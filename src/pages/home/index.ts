import Block from '../../utils/Block';
import template from './home.hbs';

export class HomePage extends Block {
    constructor(props: Record<string, unknown>) {
        super('div', props);
    }

    render() {
        return this.compile(template, { title: this.props.title })
    }
}
