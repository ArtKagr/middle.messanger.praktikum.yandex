import Block from '../../utils/Block';
import template from './form.tmpl';

const authForm: FormProps = {
    action: '/chats',
    title: 'Авторизация',
    inputs: [
        {
            value: 'ivan@example.com',
            placeholder: 'E-mail',
            type: 'email',
            name: 'login'
        },
        {
            value: '1234567890',
            placeholder: 'Пароль',
            type: 'password',
            name: 'password'
        }
    ],
    button: 'ВХОД',
    link: 'ЕЩЁ НЕ ЗАРЕГИСТРИРОВАНЫ?',
    linkHref: '/registration'
}

const regForm: FormProps = {
    action: '/',
    title: 'Регистрация',
    inputs: [
        { value: 'ivan@example.com', placeholder: 'E-mail', type: 'email', name: 'email' },
        { value: 'ivanivanov', placeholder: 'Логин', type: 'text', name: 'login' },
        { value: 'Иван', placeholder: 'Имя', type: 'text', name: 'first_name' },
        { value: 'Иванов', placeholder: 'Фамилия', type: 'text', name: 'second_name' },
        { value: 'Вано', placeholder: 'Отображаемое имя', type: 'text', name: 'display_name' },
        { value: '+79099673030', placeholder: 'Телефон', type: 'text', name: 'phone' },
        { value: '1234567890', placeholder: 'Пароль', type: 'password', name: 'password' },
        { value: '1234567890', placeholder: 'Повторите пароль', type: 'password', name: 'repeat_password' }
    ],
    button: 'ЗАРЕГИСТРИРОВАТЬСЯ',
    link: 'ВОЙТИ',
    linkHref: '/'
}

class Form extends Block {
    constructor(props: FormProps) {
        super('div', props, ['layout', '-flex']);
    }

    render() {
        return this.compile(template, this.props);
    }
}

export const AuthForm = new Form(authForm).getContent();
export const RegForm = new Form(regForm).getContent();

