import Block from '../../../utils/Block';
import template from './message.tmpl';
import { FormInput } from '../../../typings';

export class ChatsMessage extends Block {
    constructor(props: FormInput) {
        super('div', props);
    }

    init () {
        this.getContent()?.setAttribute('class', 'message-field-input')
    }

    render () {
        return this.compile(template, this.props);
    }
}
