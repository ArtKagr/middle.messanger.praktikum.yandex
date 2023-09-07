import { ChatsMenu } from '../../components/chats/menu';
import { ChatMessageField } from '../../components/chats/field'
import { FormEditProfile } from '../../components/form/editProfile';
import Block from '../../utils/Block';
import template from './chats.tmpl';

export class ChatsPage extends Block {
    constructor(props: Chats) {
        super('div', props);
    }

    init () {
        this.getContent().setAttribute('class', 'layout');
    }

    render () {
        this.children.chatsMenu = new ChatsMenu({
            avatar_link: 'https://www.shutterstock.com/image-photo/greta-thunberg-fridays-future-event-260nw-1587812527.jpg',
            title: 'Иван Иванов',
            message: '+7 (909) 967 30 30'
        })

        this.children.chatsField = new ChatMessageField({
            title: 'Двойник',
            message: 'был(а) 35 минут назад',
        })

        this.children.editProfile = new FormEditProfile({
            title: 'Иван',
            className: 'modal'
        })

        return this.compile(template, this.props)
    }
}
