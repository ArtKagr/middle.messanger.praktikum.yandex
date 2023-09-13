import { EventBus } from "./EventBus";
import { nanoid } from 'nanoid';
import Handlebars from 'handlebars';
import { Callback, ObjType } from '../typings';

export default class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    public id: string;
    protected props: ObjType;
    public children: ObjType;
    private eventBus: () => EventBus;
    private _element: HTMLElement;
    private readonly _meta: { tagName: string, props: ObjType };

    constructor(tagName: string = "div", propsWithChildren: ObjType = {}) {
        const eventBus = new EventBus();

        const { props, children } = this._getChildrenAndProps(propsWithChildren);

        this._meta = { tagName, props };

        this.id = nanoid(6);

        this.children = children;

        this.props = this._makePropsProxy(props);

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);

        eventBus.emit(Block.EVENTS.INIT);
    }



    protected _init() {
        this._createResources();

        this.init();

        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    protected init(): void {}

    public getContent() {
        return this.element;
    }

    public dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    private _getChildrenAndProps(childrenAndProps: ObjType) {
        const props: ObjType = {};
        const children: ObjType = {};

        Object.entries(childrenAndProps).forEach(([key, value]) => {
            if (value instanceof Block) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        })

        return { props, children }
    }

    private _addEvents () {
        const { events = {} } = this.props as { events: ObjType };

        Object.keys(events).forEach(eventName => {
            const event = events[eventName] as Callback;
            this._element!.addEventListener(eventName, event);
        });
    }

    private _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    private _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    // Переопределяется пользователем
    protected componentDidMount() {
        return true;
    }

    private _componentDidMount() {
        this.componentDidMount();
    }

    private _componentDidUpdate(oldProps: ObjType, newProps: ObjType) {
        if (this.componentDidUpdate(oldProps, newProps)) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
        }
    }

    // Переопределяется пользователем
    protected componentDidUpdate(oldProps: Record<string, unknown>, newProps: Record<string, unknown>) {
        return oldProps && newProps;
    }

    setProps = (nextProps: Record<string, unknown>) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };


    get element() {
        return this._element;
    }

    private _render() {
        const block = this.render();

        this._element!.innerHTML = '';

        this._element!.append(block);

        this._addEvents();
    }

    // Переопределяется пользователем. Возвращает разметку
    protected render(): DocumentFragment {
        return new DocumentFragment();
    }

    protected compile(template: string, context: ObjType) {
        const contextAndStubs = { ...context };

        Object.entries(this.children as Record<string, Block>).forEach(([name, element]) => {
            if (Array.isArray(element)) {
                contextAndStubs[name] = element.map(item => `<div data-id="${item.id}"></div>`)
            } else {
                contextAndStubs[name] = `<div data-id="${element.id}"></div>`;
            }
        })

        const temp = document.createElement('template');
        //


        temp.innerHTML = Handlebars.compile(template)(contextAndStubs);


        Object.entries(this.children as Record<string, Block>).forEach(([_, component]) => {
            const stub = temp.content.querySelector(`[data-id="${component.id}"]`)

            if(!stub) {
                return;
            }

            component.getContent().append(...Array.from(stub.childNodes));
            stub.replaceWith(component.getContent()!)
        });

        return temp.content;
    }

    _makePropsProxy(props: ObjType) {
        const self = this;

        return new Proxy(props, {
            get(target: ObjType, prop: string) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set(target: ObjType, prop: string, value) {
                const oldTarget = { ...target }

                target[prop] = value;
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, { oldTarget, target });
                return true;
            },
            deleteProperty() {
                throw new Error("Нет доступа");
            }
        });
    }

    _createDocumentElement(tagName: string) {
        return document.createElement(tagName);
    }
}
