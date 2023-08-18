function checkRules (inputName: string, data: string): string {
    switch (inputName) {
        case 'login':
            if (!rules.login.test(data)) {
               return errors.login;
            }
            break;
        case 'password':
        case 'repeat_password':
        case 'oldPassword':
        case 'newPassword':
            if (!rules.password.test(data)) {
                return errors.password;
            }
            break;
        case 'first_name':
            if (!rules.name.test(data)) {
                return errors.firstName;
            }
            break;
        case 'second_name':
            if (!rules.name.test(data)) {
                return errors.secondName;
            }
            break;
        case 'display_name':
            if (!rules.name.test(data)) {
                return errors.displayName;
            }
            break;
        case 'email':
            if (!rules.email.test(data)) {
                return errors.email;
            }
            break;
        case 'phone':
            if (!rules.phone.test(data)) {
                return errors.phone;
            }
            break;
    }

    return '';
}

function getFieldData (item: HTMLInputElement): Record<string, any> {

    const errorMessage = checkRules(item.name, item.value);
    const errorField = getErrorField(item.parentElement as HTMLElement);
    const errorTextField = setErrorField(errorField, errorMessage);

    return { errorMessage, errorField, errorTextField }
}

function getErrorField (field: HTMLElement) {
    return field.querySelector('.field_error') as HTMLDivElement;
}

function setErrorField (field: HTMLDivElement, error: string): HTMLDivElement {
    field.textContent = error
    return field
}

function checkField (item: HTMLInputElement): boolean {
    const { errorMessage } = getFieldData(item);
    return !errorMessage;
}
//
function focusField (event: InputEvent): void {
    checkField(event.target as HTMLInputElement);
}

function submitForm (e: Event): void {
    e.preventDefault();

    const children: NodeListOf<HTMLInputElement> = document.querySelectorAll('input');
    const payload: Record<string, string> = {};

    children.forEach((item: HTMLInputElement) => {
        const { errorMessage } = getFieldData(item);

        if (item.value || !errorMessage) {
            payload[item.name] = item.value
        }

        if (Object.keys(payload).length === children.length) {
            console.log('submitForm', payload)
        }
    })
}

function submitMessage (e: Event): void {
    e.preventDefault();

    const item = document.querySelector('input[type=text]') as HTMLInputElement;
    const payload: Record<string, string> = {};

    if (item) {
        let errorField = getErrorField(item);

        if (item.value === '') {
            errorField = setErrorField(errorField, errors.emptyMessage);
        } else {
            errorField = setErrorField(errorField, '');

            payload[item.name] = item.value;
            console.log('submitMessage', payload);
        }
    }
}

enum errors {
    login = 'Логин латинскими буквами и цифрами. 3-30 символов.',
    password = 'Пароль латинскими буквами: минимум 1 строчная и заглавная, а также цифра. 6-30 символов.',
    firstName = 'Имя латиницей или кириллицей, с заглавной буквы. 1-40 символов.',
    secondName = 'Фамилия латиницей или кириллицей, с заглавной буквы. 1-40 символов.',
    displayName = 'Отображаемое имя латиницей или кириллицей, с заглавной буквы. 1-40 символов.',
    email = 'Введите почту в соответствии с форматом stasbasov@yandex.ru',
    phone = 'Номер телефона может содержать от 8 до 20 символов',
    emptyMessage = 'Заполните поле'
}

const rules = {
    login: /^(?!^\d+)[a-zA-Z0-9-_]{3,30}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z]){1,}(?=.*[0-9]){1,}(?=.*[^\s]).{6,30}/,
    name: /^[А-ЯA-Z]{1}[а-яa-z-]{1,40}$/,
    email: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
    phone: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){8,20}(\s*)?$/
}

export {
    checkField,
    focusField,
    submitForm,
    submitMessage
}
