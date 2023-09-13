const rules = {
    email: /^([A-Za-z0-9_])+([A-Za-z0-9_])+\.([A-Za-z]{2,4})$/,
    login: /^(?!^\d+)[a-zA-Z0-9-_]{3,30}$/,
    first_name: /^[А-ЯA-Z]{1}[а-яa-z-ё]{1,40}$/,
    second_name: /^[А-ЯA-Z]{1}[а-яa-z-ё]{1,40}$/,
    display_name: /^[А-ЯA-Z]{1}[а-яa-z-ё]{1,40}$/,
    phone: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){8,20}(\s*)?$/,
    password: /^(?=.*[a-z])(?=.*[A-Z]){1,}(?=.*[0-9]){1,}(?=.*[^\s]).{6,30}/,
    repeat_password: /^(?=.*[a-z])(?=.*[A-Z]){1,}(?=.*[0-9]){1,}(?=.*[^\s]).{6,30}/
}

function focusFormInput (event: InputEvent): void {
    const input = event.target as HTMLInputElement;
    input.nextElementSibling?.setAttribute('class', 'error-text')

}

function blurFormInput (event: InputEvent): void {
    const input = event.target as HTMLInputElement;
    checkFormInput(input);
}

function focusEditProfileInput (event: InputEvent): void {
    const input = event.target as HTMLInputElement;
    const parent = input.parentElement
    parent?.nextElementSibling?.setAttribute('class', 'modal-edit_profile-block-data-error')
}

function blurEditProfileInput (event: InputEvent): void {
    const input = event.target as HTMLInputElement;
    checkEditProfileInput(input);
}

function showEditProfileModal (): void {
    const modal: HTMLDivElement | null = document.querySelector('.layout-modal')
    modal?.setAttribute('class', 'layout-modal visible')
}

function hideEditProfileModal (): void {
    const modal: HTMLDivElement | null = document.querySelector('.layout-modal')
    modal?.setAttribute('class', 'layout-modal')
}

function focusMessage (): void {
    const errorMessage: HTMLInputElement | null = document.querySelector('.message-field_container-error')
    errorMessage?.setAttribute('class', 'message-field_container-error')
}

function enterMessage (): void {
    const errorMessage: HTMLInputElement | null = document.querySelector('.message-field_container-error')
    const inputField: HTMLInputElement | null = document.querySelector('.message-field-input input')
    const inputValue: string | undefined = inputField?.value

    if (inputValue === '') {
        errorMessage?.setAttribute('class', 'message-field_container-error visible')
    } else {
        console.log('message', inputValue)
    }

}

function checkFormInput (input: HTMLInputElement): boolean {
    const rule = !rules[input.name as string] as unknown
    const isError = rule.test(input.value)

    if (isError) {
        input.nextElementSibling?.setAttribute('class', 'error-text visible')
    }

    return isError
}

function checkEditProfileInput (input: HTMLInputElement) {
    const rule = !rules[input.name as string] as unknown
    const isError = rule.test(input.value)

    if (isError) {
        const parent = input.parentElement
        parent?.nextElementSibling?.setAttribute('class', 'modal-edit_profile-block-data-error visible')
    }

    return isError
}

function changeProfileData (e: Event): void {
    e.preventDefault();

    const editButton = e.target as HTMLButtonElement;
    const saveButton = editButton.nextElementSibling;
    const children: NodeListOf<HTMLInputElement> = document.querySelectorAll('.modal-edit_profile-block-data-item-value');

    children.forEach((input: HTMLInputElement) => {
        input.removeAttribute('disabled');
    })

    editButton.setAttribute('disabled', '');
    saveButton?.removeAttribute('disabled');
    saveButton?.setAttribute('class', 'form-button');
}

function saveProfileData (e: Event) {
    submitForm(e, '.modal-edit_profile-block-data-item-value', 'edit-profile')
}

function submitForm (e: Event, className: string = '.form-input', source: string = 'form'): void {
    e.preventDefault();

    const children: NodeListOf<HTMLInputElement> = document.querySelectorAll(className);
    const errors: boolean[] = [];
    const values: Record<string, string> = {};

    children.forEach((input: HTMLInputElement) => {
        if (source === 'form') {
            errors.push(checkFormInput(input));
        } else {
            errors.push(checkEditProfileInput(input));
        }
        values[input.name] = input.value;
    });

    const isSuccessForm = !errors.some(error => error)

    console.log('form', values)
    console.log('isSuccessForm', isSuccessForm)
}

function testFunc (e: Event): void {
    e.preventDefault();
    console.warn('testFunc')
}

export {
    focusFormInput,
    blurFormInput,
    submitForm,
    focusMessage,
    enterMessage,
    testFunc,
    changeProfileData,
    saveProfileData,
    focusEditProfileInput,
    blurEditProfileInput,
    showEditProfileModal,
    hideEditProfileModal
}
