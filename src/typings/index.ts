type ObjType = { [key: string]: unknown };
type Callback = (...args: unknown[]) => void;
type EventBusGuard = (oldProps: ObjType, newProps: ObjType) => void;
type FuncEvent = { [key: string]: (...args: never[]) => void };

type ButtonProps = {
    title: string,
    disabled?: boolean;
    formButton: boolean;
    events?: FuncEvent;
}

type ChatsMenuProps = {
    avatar_link: string;
    title: string;
    message: string;
    events?: FuncEvent;
}

type UserProps = {
    id: number;
    avatar_link: string | null;
    content: UserPropsContent;
    activeClass?: string;
    events?: FuncEvent;
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
    events?: FuncEvent;
}

type FormEditProfileProps = {
    title: string;
    className: string;
}

type ErrorPageProps = {
    title: string;
    subtitleMain: string;
    subtitleSecondary: string;
    buttonText: string;
}

type EventButtonProps = {
    events: FuncEvent;
}

export {
    ObjType,
    Callback,
    FuncEvent,
    ButtonProps,
    ChatsMenuProps,
    UserProps,
    ChatsFieldProps,
    FormProps,
    FormInput,
    FormEditProfileProps,
    ErrorPageProps,
    EventButtonProps,
    EventBusGuard
}

