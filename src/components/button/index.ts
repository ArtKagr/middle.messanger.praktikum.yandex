import Block from '../../utils/Block';
import template from './button.hbs';

export class Button extends Block {
    constructor(props: Record<string, unknown>) {
        super('button', props);
    }

    render() {
        return this.compile(template, { label: this.props.label });
    }
}
