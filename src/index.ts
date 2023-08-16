import { AuthForm, RegForm } from './components/form';
import { NotFoundPage, ServerErrorPage } from './components/errorPage';

const pages: { [key: string]: HTMLElement } = {
    '/': AuthForm,
    '/registration': RegForm,
    '/chats': RegForm,
    '/edit-profile': RegForm,
    '/500': ServerErrorPage
};

const currentPage: HTMLElement = pages[window.location.pathname] || NotFoundPage;

window.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#root')!;
    root.append(currentPage);
})
