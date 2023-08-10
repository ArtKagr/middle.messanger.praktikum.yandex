class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    private _element: Record<string, any> = {};
    private readonly _meta: Record<string, any> = {};
    protected eventBus = new EventBus();
    protected props: Record<string, any>;

    constructor(tagName: string = "div", props: Record<string, any> = {}) {
        this._meta = { tagName, props };

        this.props = this._makePropsProxy(props);

        this._registerEvents(this.eventBus);

        this.eventBus.emit(Block.EVENTS.INIT);
    }

    _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    init() {
        this._createResources();

        this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }

    _componentDidMount() {
        this.componentDidMount();
    }

    componentDidMount() {}

    dispatchComponentDidMount() {
        this.eventBus.emit(Block.EVENTS.FLOW_CDM);
    }

    _componentDidUpdate(oldProps: Record<string, any>, newProps: Record<string, any>) {
        const response = this.componentDidUpdate(oldProps, newProps);

        if (!response) {
            return;
        }

        this._render();
    }

    componentDidUpdate(oldProps: Record<string, any>, newProps: Record<string, any>) {
        return { oldProps, newProps }
    }

    setProps = (nextProps: any) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };


    get element() {
        return this._element;
    }

    _render() {
        this._element.innerHTML = this.render();
    }

    render() {
        return ''
    }

    getContent() {
        return this.element;
    }

    _makePropsProxy(props: Record<string, any>) {
        const self = this;

        return new Proxy(props, {
            get(target: any, prop: any) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set(target: any, prop: any, value) {
                target[prop] = value;
                self.eventBus.emit(Block.EVENTS.FLOW_CDU, {...target}, target);
                return true;
            },
            deleteProperty() {
                throw new Error("Нет доступа");
            }
        });
    }

    _createDocumentElement(tagName: any) {
        return document.createElement(tagName);
    }
}
