import Block from '../../../utils/Block';
import template from './chatsField.tmpl';
import { enterMessage, focusMessage } from '../../../utils/Validation';
import { ChatsMessage } from '../message';
import { ChatsSendButton } from '../sendButton';
import { FormInput, EventButtonProps, ChatsFieldProps } from '../../../typings';


const inputMessage: FormInput = {
    value: '',
    placeholder: 'Написать сообщение...',
    name: 'message',
    type: 'text',
    error: 'Отображаемое имя латиницей или кириллицей, с заглавной буквы. 1-40 символов.',
    events: { focusin: focusMessage }
}

const sendButton: EventButtonProps = {
    events: {
        click: enterMessage
    }
}

export class ChatMessageField extends Block {
    constructor(props: ChatsFieldProps) {
        super('div', props);
    }

    init () {
        this.getContent()?.setAttribute('class', 'layout')
    }

    render() {
        this.children.inputMessage = new ChatsMessage(inputMessage);
        this.children.sendButton = new ChatsSendButton(sendButton);

        return this.compile(template, this.props);
    }
}
