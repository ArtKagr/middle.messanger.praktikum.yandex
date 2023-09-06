const rules = {
    email: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
    login: /^(?!^\d+)[a-zA-Z0-9-_]{3,30}$/,
    first_name: /^[А-ЯA-Z]{1}[а-яa-z-ё]{1,40}$/,
    second_name: /^[А-ЯA-Z]{1}[а-яa-z-ё]{1,40}$/,
    display_name: /^[А-ЯA-Z]{1}[а-яa-z-ё]{1,40}$/,
    phone: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){8,20}(\s*)?$/,
    password: /^(?=.*[a-z])(?=.*[A-Z]){1,}(?=.*[0-9]){1,}(?=.*[^\s]).{6,30}/,
    repeat_password: /^(?=.*[a-z])(?=.*[A-Z]){1,}(?=.*[0-9]){1,}(?=.*[^\s]).{6,30}/
}

function focusInput (event: InputEvent): void {
    const input = event.target as HTMLInputElement;
    input.nextElementSibling?.setAttribute('class', 'error_text')

}

function blurInput (event: InputEvent): void {
    const input = event.target as HTMLInputElement;
    checkInput(input);
}

function checkInput (input: HTMLInputElement): boolean {
    // @ts-ignore
    const isError = !rules[input.name].test(input.value)

    if (isError) {
        input.nextElementSibling?.setAttribute('class', 'error_text -visible')
    }

    return isError
}

function submitForm (e: Event): void {
    e.preventDefault();

    const children: NodeListOf<HTMLInputElement> = document.querySelectorAll('.form-input');

    const errors: boolean[] = [];

    const values: Record<string, string> = {};

    children.forEach((input) => {
        errors.push(checkInput(input));

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
    focusInput,
    blurInput,
    submitForm,
    testFunc
}
