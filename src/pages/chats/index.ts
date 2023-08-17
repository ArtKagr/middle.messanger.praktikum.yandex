import ChatsMenu from '../../components/chats/menu';
import ChatsField from '../../components/chats/field'
import Block from '../../utils/Block';
import template from './chats.tmpl';

const chats = {
    chatsMenu: ChatsMenu.innerHTML,
    chatsField: ChatsField.innerHTML
};

class ChatsPage extends Block {
    constructor(props: Chats) {
        super('div', props, 'layout');
    }

    render () {
        return this.compile(template, this.props)
    }
}

export default new ChatsPage(chats).getContent();
