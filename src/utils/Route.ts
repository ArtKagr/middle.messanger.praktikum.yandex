import Block from "./Block";

class Route {
    private _block: Block | null = null;

    constructor(private _pathname: string, private _blockClass: typeof Block, private rootQuery: string) {}

    navigate(pathname: string): void {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave(): void {
        this._block = null;
    }

    match(pathname: string): boolean {
        return pathname === this._pathname
    }

    render(): void {
        if (this._block) {
            this._block.show();
        } else {
            this._block = new this._blockClass('div',{});
            this.renderDom(this._block, this.rootQuery);
        }
    }

    renderDom (block: Block, selector: string = '#app'): Element | null {
        const el: Element | null = document.querySelector(selector);
        el!.textContent = '';
        el!.appendChild(block.getContent());
        return el;
    }
}

export default Route;