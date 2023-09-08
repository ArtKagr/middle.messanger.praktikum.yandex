import Block from '../../../utils/Block';
import template from './editProfile.tmpl';
import { Button } from '../../button';
import { FormEditProfileInput } from './editProfileInput';
import { EditProfileCloseButton } from './closeButton';
import {
    changeProfileData,
    focusEditProfileInput,
    blurEditProfileInput,
    saveProfileData,
    hideEditProfileModal
} from '../../../utils/Validation';

let items: FormInput[] = [
    {
        value: null,
        placeholder: 'Почта',
        type: 'email',
        name: 'email',
        error: 'Введите почту в соответствии с форматом stasbasov@yandex.ru'
    },
    {
        value: null,
        placeholder: 'Логин',
        type: 'text',
        name: 'login',
        error: 'Логин латинскими буквами и цифрами. 3-30 символов.'
    },
    {
        value: null,
        placeholder: 'Имя',
        type: 'text',
        name: 'first_name',
        error: 'Имя латиницей или кириллицей, с заглавной буквы. 1-40 символов.'
    },
    {
        value: null,
        placeholder: 'Фамилия',
        type: 'text',
        name: 'second_name',
        error: 'Фамилия латиницей или кириллицей, с заглавной буквы. 1-40 символов.'
    },
    {
        value: null,
        placeholder: 'Имя в чате',
        type: 'text',
        name: 'display_name',
        error: 'Отображаемое имя латиницей или кириллицей, с заглавной буквы. 1-40 символов.'
    },
    {
        value: null,
        placeholder: 'Телефон',
        type: 'text',
        name: 'phone',
        error: 'Номер телефона может содержать от 8 до 20 символов'
    },
]

export class FormEditProfile extends Block {
    constructor(props: FormEditProfileProps) {
        super('div', props);
    }

    init () {
        if (this.props.className === '') {
            this.getContent().setAttribute('class', 'layout');
        } else {
            this.getContent().setAttribute('class', `layout-${this.props.className}`);
        }
    }

    render () {
        this.children.closeButton = new EditProfileCloseButton({
            events: {
                click: hideEditProfileModal
            }
        })

        items.forEach((input) => {
            input.events = { focusin: focusEditProfileInput, focusout: blurEditProfileInput };
            this.children[input.name] = new FormEditProfileInput(input);
        })

        this.children.editButton = new Button({
            title: 'ИЗМЕНИТЬ ДАННЫЕ',
            formButton: false,
            events: {
                click: changeProfileData
            }
        })

        this.children.saveButton = new Button({
            title: 'СОХРАНИТЬ',
            disabled: true,
            formButton: false,
            events: {
                click: saveProfileData
            }
        })

        return this.compile(template, this.props);
    }
}
