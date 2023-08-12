import { EventBus } from "./EventBus";

export default class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    public id;
    protected props: Record<string, unknown>;
    private eventBus: () => EventBus;
    private _element: HTMLElement | null = null;
    private readonly _meta: { tagName: string, props: Record<string, unknown>};
    private children: Record<string, Block>;

    constructor(tagName: string = "div", propsWithChildren: Record<string, unknown> = {}) {
        const eventBus = new EventBus();

        const { props, children } = this._getChildrenAndProps(propsWithChildren);

        this._meta = { tagName, props };

        this.children = children;

        this.props = this._makePropsProxy(props);

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);

        eventBus.emit(Block.EVENTS.INIT);
    }

    protected init() {
        this._createResources();

        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    // Переопределяется пользователем. Возвращает разметку
    protected render(): string {
        return ''
    }

    // Переопределяется пользователем
    protected componentDidMount() {}

    // Переопределяется пользователем
    protected componentDidUpdate(oldProps: Record<string, unknown>, newProps: Record<string, unknown>) {
        return oldProps && newProps
    }

    public getContent() {
        return this.element;
    }

    public dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    private _getChildrenAndProps(childrenAndProps: Record<string, unknown> | Record<string, Block>[]) {
        const props: Record<string, unknown> = {};
        const children: Record<string, Block> = {};

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
        const { events = {} } = this.props as { events: Record<string, () => void> };

        Object.keys(events).forEach(eventName => {
            this._element!.addEventListener(eventName, events[eventName]);
        });
    }

    private _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        // @ts-ignore
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    private _createResources() {
        const { tagName } = this._meta;
        this._element = Block._createDocumentElement(tagName);
    }

    private _componentDidMount() {
        this.componentDidMount();
    }

    private _componentDidUpdate(oldProps: Record<string, unknown>, newProps: Record<string, unknown>) {
        if (this.componentDidUpdate(oldProps, newProps)) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
        }
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
        this._element!.innerHTML = this.render();

        this._addEvents();
    }

    private _makePropsProxy(props: Record<string, unknown>) {
        const self = this;

        return new Proxy(props, {
            get(target: Record<string, unknown>, prop: string) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set(target: Record<string, unknown>, prop: string, value) {
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

    private static _createDocumentElement(tagName: any) {
        return document.createElement(tagName);
    }
}
