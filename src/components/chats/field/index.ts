import Block from '../../../utils/Block';
import { template } from './chatsField.tmpl';

type MessageFieldProps = {
    title: string | null;
    message: string | null;
    messageValue: string | null;
}

const messageField = {
    title: 'Двойник',
    message: 'был(а) 35 минут назад',
    messageValue: null
}

class ChatMessageField extends Block {
    constructor(props: MessageFieldProps) {
        super('div', props, 'chat-field');
    }

    render() {
        return this.compile(template, this.props);
    }
}

export default new ChatMessageField(messageField).getContent();
