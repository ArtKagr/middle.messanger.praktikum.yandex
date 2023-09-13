import Block from '../../utils/Block';
import template from './input.tmpl';
import { FormInput } from '../../typings';

export class Input extends Block {
    constructor(props: FormInput) {
        super('div', props);
    }

    init () {
        this.getContent()?.setAttribute('class', 'form-input_container');
    }

    render () {
        return this.compile(template, this.props);
    }
}
