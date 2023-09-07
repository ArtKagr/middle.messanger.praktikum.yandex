import Block from '../../../../utils/Block';
import template from './editProfileInput.tmpl';

export class FormEditProfileInput extends Block {
    constructor(props: FormInput) {
        super('div', props);
    }

    init () {
        this.getContent()?.setAttribute('class', 'modal-edit_profile-block-data-item_container')
    }

    render() {
        return this.compile(template, this.props);
    }
}
