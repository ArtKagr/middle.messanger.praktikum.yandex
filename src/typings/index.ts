type UserProps = {
    id: number;
    avatar_link: string | null;
    content: UserPropsContent;
    activeClass?: string;
}

type UserPropsContent = {
    title: string;
    message: string;
    data: {
        time: string;
        new_messages: number | null;
    }
}
