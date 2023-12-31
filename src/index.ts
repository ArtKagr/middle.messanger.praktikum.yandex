import { AuthForm, RegForm } from './components/form';
import { NotFoundPage, ServerErrorPage } from './pages/error';
import { ChatsPage } from './pages/chats';
import { FormEditProfile } from './components/form/editProfile';

const pages: { [key: string]: HTMLElement } = {
    '/': AuthForm,
    '/registration': RegForm,
    '/chats': new ChatsPage({}).getContent(),
    '/edit-profile': new FormEditProfile({ title: 'Иван', className: '' }).getContent(),
    '/500': ServerErrorPage
};

const currentPage: HTMLElement = pages[window.location.pathname] || NotFoundPage;

window.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#root')!;
    root.append(currentPage);
})
