type ObjType = { [key: string]: any }

type ClassNames = string | string[] | undefined

type Callback = (event: any) => void;

type UserProps = {
    id: number;
    avatar_link: string | null;
    content: UserPropsContent;
    activeClass?: string;
    events?: { [key: string]: () => void };
}

type UserPropsContent = {
    title: string;
    message: string;
    data: {
        time: string;
        new_messages: number | null;
    }
}

type MessageFieldProps = {
    title: string | null;
    message: string | null;
    messageValue: string | null;
}

type FormProps = {
    action: string;
    title: string;
    inputs: FormInput[];
    button: string;
    link: string;
    linkHref: string;
    events?: { [key: string]: () => void };
}

type FormInput = {
    value: string;
    placeholder: string;
    type: string;
    name: string;
    events?: { [key: string]: () => void }
}

type FormEditProfileInputProps = {
    value: string;
    placeholder: string;
    type: string;
    name: string;
}

type FormEditProfileProps = {
    firstName: string;
    items: FormEditProfileInputProps[]
}

type Chats = {
    chatsMenu: string;
    chatsField: string;
}

type ErrorPageProps = {
    title: string;
    subtitleMain: string;
    subtitleSecondary: string;
    buttonText: string;
}
