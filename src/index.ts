import { HomePage } from './pages/home';
// import { Button } from "./components/button";

window.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app')!;

    const homePage = new HomePage({ title: 'Home page' });

    root.append(homePage.getContent()!);

    setTimeout(() => {
        homePage.setProps({ title: 'Update title' })
    }, 1000)
})
