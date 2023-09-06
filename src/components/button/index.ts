import Block from '../../utils/Block'
import template from './button.tmpl'

export class Button extends Block {
    constructor(props: ButtonProps) {
        super('button', props);
    }

    init () {
        this.getContent()?.setAttribute('class', 'form-button');
        this.getContent()?.setAttribute('type', 'submit');
    }

    render () {
        return this.compile(template, this.props);
    }
}
