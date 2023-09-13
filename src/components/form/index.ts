import Block from '../../utils/Block';
import { Button } from '../button';
import { Input } from '../input';
import template from './form.tmpl';
import { focusFormInput, blurFormInput, submitForm } from '../../utils/Validation';
import { FormProps, FormInput, ButtonProps } from '../../typings';

export const authForm: FormProps = {
    action: '/chats',
    name: 'auth',
    title: 'Авторизация',
    inputs: [
        {
            value: null,
            placeholder: 'E-mail',
            name: 'email',
            type: 'text',
            error: 'Введите почту в соответствии с форматом stasbasov@yandex.ru'
        },
        {
            value: null,
            placeholder: 'Пароль',
            name: 'password',
            type: 'password',
            error: 'Пароль латинскими буквами: минимум 1 строчная и заглавная, а также цифра. 6-30 символов.'
        }
    ],
    button: {
        title: 'ВХОД',
        formButton: true,
        events: {
            click: submitForm
        }
    },
    link: 'ЕЩЁ НЕ ЗАРЕГИСТРИРОВАНЫ?',
    linkHref: '/registration'
}

export const regForm: FormProps = {
    action: '/',
    name: 'registration',
    title: 'Регистрация',
    inputs: [
        {
            value: null,
            placeholder: 'E-mail',
            name: 'email',
            type: 'text',
            error: 'Введите почту в соответствии с форматом stasbasov@yandex.ru'
        },
        {
            value: null,
            placeholder: 'Логин',
            name: 'login',
            type: 'text',
            error: 'Логин латинскими буквами и цифрами. 3-30 символов.'
        },
        {
            value: null,
            placeholder: 'Имя',
            name: 'first_name',
            type: 'text',
            error: 'Имя латиницей или кириллицей, с заглавной буквы. 1-40 символов.'
        },
        {
            value: null,
            placeholder: 'Фамилия',
            name: 'second_name',
            type: 'text',
            error: 'Фамилия латиницей или кириллицей, с заглавной буквы. 1-40 символов.'
        },
        {
            value: null,
            placeholder: 'Отображаемое имя',
            name: 'display_name',
            type: 'text',
            error: 'Отображаемое имя латиницей или кириллицей, с заглавной буквы. 1-40 символов.'
        },
        {
            value: null,
            placeholder: 'Телефон',
            name: 'phone',
            type: 'text',
            error: 'Номер телефона может содержать от 8 до 20 символов'
        },
        {
            value: null,
            placeholder: 'Пароль',
            name: 'password',
            type: 'password',
            error: 'Пароль латинскими буквами: минимум 1 строчная и заглавная, а также цифра. 6-30 символов.'
        },
        {
            value: null,
            placeholder: 'Повторите пароль',
            name: 'repeat_password',
            type: 'password',
            error: 'Пароль латинскими буквами: минимум 1 строчная и заглавная, а также цифра. 6-30 символов.'
        },
    ],
    button: {
        title: 'ЗАРЕГИСТРИРОВАТЬСЯ',
        formButton: true,
        events: {
            click: submitForm
        }
    },
    link: 'ВОЙТИ',
    linkHref: '/'
}

class Form extends Block {
    constructor(props: FormProps) {
        super('div', props);
    }

    init () {
        this.getContent()?.setAttribute('class', 'layout flex')
    }

    render() {
        this.props.inputs.forEach((input: FormInput) => {
            input.events = { focusin: focusFormInput, focusout: blurFormInput }
            this.children[input.name] = new Input(input);
        })

        this.children.button = new Button(this.props.button as ButtonProps);

        return this.compile(template, this.props);
    }
}
//
export const AuthForm = new Form(authForm).getContent();
export const RegForm = new Form(regForm).getContent();

