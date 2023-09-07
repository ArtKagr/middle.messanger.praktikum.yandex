import Block from '../../../utils/Block';
import template from './chatUser.tmpl';

export class ChatsUser extends Block {
    constructor(props: UserProps) {
        super('div', props);
    }

    render () {
        return this.compile(template, this.props)
    }
}
