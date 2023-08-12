import Block from '../../utils/Block';
// @ts-ignore
import template from './home.hbs';
import { Button } from '../../components/Button';

export class HomePage extends Block {
    constructor() {
        super('div');
    }

    render() {
        const button = new Button({
           label: 'Click me',
           events: {
               click: () => console.log('clicked')
            }
        });

        return template({ button })
    }
}
