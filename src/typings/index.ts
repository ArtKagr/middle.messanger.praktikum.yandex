type ObjType = { [key: string]: any }

type Callback = (event: any) => void;

type Event = { [key: string]: (...args: never[]) => void };

interface ButtonProps {
    title: string,
    disabled?: boolean;
    formButton: boolean;
    events?: Event;
}

type ChatsMenuProps = {
    avatar_link: string;
    title: string;
    message: string;
    events?: Event;
}

type UserProps = {
    id: number;
    avatar_link: string | null;
    content: UserPropsContent;
    activeClass?: string;
    events?: Event;
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
    events?: Event;
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
    events?: Event;
}

type FormEditProfileProps = {
    title: string;
    className: string;
}

type Chats = {}

type ErrorPageProps = {
    title: string;
    subtitleMain: string;
    subtitleSecondary: string;
    buttonText: string;
}

type EventButtonProps = {
    events: Event;
}

