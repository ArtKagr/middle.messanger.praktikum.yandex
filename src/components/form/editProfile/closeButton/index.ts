import Block from '../../../../utils/Block';
import template from './closeButton.tmpl';

export class EditProfileCloseButton extends Block {
    constructor(props: EventButtonProps) {
        super('div', props);
    }

    init () {
        this.getContent()?.setAttribute('class', 'modal-edit_profile-block-head-icon')
    }

    render () {
        return this.compile(template, this.props);
    }
}
