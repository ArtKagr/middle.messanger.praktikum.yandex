import Block from '../../utils/Block';
// @ts-ignore
import template from './button.hbs';

interface ButtonProps {
    label: string;
    events: {
        click: () => void;
    }
}

export class Button extends Block {
    constructor(props: ButtonProps) {
        // @ts-ignore
        super('button', props);
    }

    render() {
        return template({ label: this.props.label });
    }
}
