import Block from '../../../utils/Block';
import template from './chatsMenu.tmpl';
import users from '../user';

const chatsMenu = {
    avatar_link: 'https://www.shutterstock.com/image-photo/greta-thunberg-fridays-future-event-260nw-1587812527.jpg',
    title: 'Иван Иванов',
    message: '+7 (909) 967 30 30',
    users
}

class ChatsMenu extends Block {
    constructor(props: ChatsMenuProps) {
        super('div', props);
    }

    render() {
        return this.compile(template, this.props)
    }
}

export default new ChatsMenu(chatsMenu).getContent()
