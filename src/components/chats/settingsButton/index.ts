import Block from '../../../utils/Block';
import template from './settingsButton.tmpl';

export class ChatsSettingsButton extends Block {
    constructor(props: EventButtonProps) {
        super('div', props);
    }

    init () {
        this.getContent()?.setAttribute('class', 'user-settings')
    }

    render () {
        return this.compile(template, this.props);
    }
}
