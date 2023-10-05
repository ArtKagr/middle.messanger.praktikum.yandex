const webSocketUrl: string = 'https://ya-praktikum.tech/WS/chats';

const url: string = 'https://ya-praktikum.tech/api/v2';

type User = {
    id: string;
    first_name: string;
    second_name: string;
    display_name: string;
    phone: string;
    login: string;
    avatar: string;
    email: string;
    password: string;
};

export {
  webSocketUrl,
  url,
  User
};