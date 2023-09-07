type ObjType = { [key: string]: any }

type Callback = (event: any) => void;

interface ButtonProps {
    title: string,
    events?: { [key: string]: (...args: never) => void }
}

type ChatsMenuProps = {
    avatar_link: string;
    title: string;
    message: string;
    events?: { [key: string]: (...args: never) => void }
}

type UserProps = {
    id: number;
    avatar_link: string | null;
    content: UserPropsContent;
    activeClass?: string;
    events?: { [key: string]: (...args: never) => void };
}

type UserPropsContent = {
    title: string;
    message: string;
    data: {
        time: string;
        new_messages: number | null;
    }
}

type ChatsFieldProps = {
    title: string | null;
    message: string | null;
}

type InputMessageProps = {
    value: string | null;
    events?: { [key: string]: (...args: never) => void };
}

type FormProps = {
    action: string;
    name: string;
    title: string;
    inputs: FormInput[];
    button: ButtonProps;
    link: string;
    linkHref: string;
}

type FormInput = {
    value: string | null;
    placeholder: string;
    name: string;
    type: string;
    error?: string;
    events?: { [key: string]: (...args: never) => void }
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

type Chats = {}

type ErrorPageProps = {
    title: string;
    subtitleMain: string;
    subtitleSecondary: string;
    buttonText: string;
}

type SendButtonProps = {
    events?: { [key: string]: (...args: never) => void };
}

