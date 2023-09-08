import Block from '../../utils/Block';
import template from './error.tmpl';

const notFoundPage: ErrorPageProps = {
    title: '404',
    subtitleMain: 'Такой страницы нет',
    subtitleSecondary: 'Возможно она была удалена или перенесена на другой адрес',
    buttonText: 'НАЗАД К ЧАТАМ'
}

const serverErrorPage: ErrorPageProps = {
    title: '500',
    subtitleMain: 'У нас проблема',
    subtitleSecondary: 'Мы знаем о проблеме и уже чиним сервис. Скоро всё заработает.',
    buttonText: 'НАЗАД К ЧАТАМ'
}

class ErrorPage extends Block {
    constructor(props: ErrorPageProps) {
        super('form', props);
    }

    init () {
        this.getContent()?.setAttribute('class', 'layout flex')
    }

    render() {
        return this.compile(template, this.props);
    }
}

export const NotFoundPage = new ErrorPage(notFoundPage).getContent();
export const ServerErrorPage = new ErrorPage(serverErrorPage).getContent();
