import Block from '../../../utils/Block';
import template from './sendButton.tmpl';

export class ChatsSendButton extends Block {
    constructor(props: EventButtonProps) {
        super('div', props);
    }

    init () {
        this.getContent()?.setAttribute('class', 'message-field-send')
    }

    render () {
        return this.compile(template, this.props);
    }
}
