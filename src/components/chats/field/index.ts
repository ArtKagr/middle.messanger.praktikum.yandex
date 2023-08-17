import Block from '../../../utils/Block';
import template from './chatsField.tmpl';

const messageField = {
    title: 'Двойник',
    message: 'был(а) 35 минут назад',
    messageValue: null
}

class ChatMessageField extends Block {
    constructor(props: MessageFieldProps) {
        super('div', props);
    }

    render() {
        return this.compile(template, this.props);
    }
}

export default new ChatMessageField(messageField).getContent();
