import Block from '../../../utils/Block';
import { template } from './editProfile.tmpl';

type FormEditProfileInputProps = {
    value: string;
    placeholder: string;
    type: string;
    name: string;
}

type FormEditProfileProps = {
    firstName: string;
    items: FormEditProfileInputProps[]
}

const items = [
    { value: 'ivan@example.com', placeholder: 'Почта', type: 'email', name: 'email' },
    { value: 'ivanivanov', placeholder: 'Логин', type: 'text', name: 'login' },
    { value: 'Иван', placeholder: 'Имя', type: 'text', name: 'first_name' },
    { value: 'Иванов', placeholder: 'Фамилия', type: 'text', name: 'second_name' },
    { value: 'Вано', placeholder: 'Имя в чате', type: 'text', name: 'display_name' },
    { value: '+79099673030', placeholder: 'Телефон', type: 'text', name: 'phone' },
]

const editProfile = {
    firstName: 'Иван',
    items
}

class FormEditProfile extends Block {
    constructor(props: FormEditProfileProps) {
        super('div', props, 'layout');
    }

    render () {
        return this.compile(template, this.props);
    }
}

export default new FormEditProfile(editProfile).getContent();
