import Block from '../../utils/Block';
import template from './button.tmpl';

export class Button extends Block {
    constructor(props: ButtonProps) {
        super('button', props);
    }

    init () {
        if (this.props.formButton) {
            this.getContent()?.setAttribute('type', 'submit');
        }

        if (this.props.disabled) {
            this.getContent()?.setAttribute('disabled', '');
            this.getContent()?.setAttribute('class', 'form-button -disabled');
        } else {
            this.getContent()?.setAttribute('class', 'form-button');
        }
    }

    render () {
        return this.compile(template, this.props);
    }
}
