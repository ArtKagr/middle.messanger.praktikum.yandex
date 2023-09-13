import Block from '../../../utils/Block';
import template from './chatUser.tmpl';
import { UserProps } from '../../../typings';

export class ChatsUser extends Block {
    constructor(props: UserProps) {
        super('div', props);
    }

    render () {
        return this.compile(template, this.props)
    }
}
