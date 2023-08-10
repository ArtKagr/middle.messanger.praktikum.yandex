import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    root: resolve(__dirname, 'src'),
    build: {
        outDir: resolve(__dirname, 'dist')
    },
    plugins: [handlebars({
        partialDirectory: resolve(__dirname, 'src/partials'),
        helpers: {
            chatClass: (chatId) => `chats-menu-settings-user ${chatId === 7 ? '-active' : ''}`
        },
        context: {
            user: {
                first_name: 'Иван',
                second_name: 'Иванов'
            },
            forms: {
                auth: [
                    { value: 'ivan@example.com', placeholder: 'E-mail', type: 'email', name: 'login' },
                    { value: '1234567890', placeholder: 'Пароль', type: 'password', name: 'password' }
                ],
                registration: [
                    { value: 'ivan@example.com', placeholder: 'E-mail', type: 'email', name: 'email' },
                    { value: 'ivanivanov', placeholder: 'Логин', type: 'text', name: 'login' },
                    { value: 'Иван', placeholder: 'Имя', type: 'text', name: 'first_name' },
                    { value: 'Иванов', placeholder: 'Фамилия', type: 'text', name: 'second_name' },
                    { value: 'Вано', placeholder: 'Отображаемое имя', type: 'text', name: 'display_name' },
                    { value: '+79099673030', placeholder: 'Телефон', type: 'text', name: 'phone' },
                    { value: '1234567890', placeholder: 'Пароль', type: 'password', name: 'password' },
                    { value: '1234567890', placeholder: 'Повторите пароль', type: 'password', name: 'repeat_password' }
                ],
                edit_profile: [
                    { value: 'ivan@example.com', placeholder: 'Почта', type: 'email', name: 'email' },
                    { value: 'ivanivanov', placeholder: 'Логин', type: 'text', name: 'login' },
                    { value: 'Иван', placeholder: 'Имя', type: 'text', name: 'first_name' },
                    { value: 'Иванов', placeholder: 'Фамилия', type: 'text', name: 'second_name' },
                    { value: 'Вано', placeholder: 'Имя в чате', type: 'text', name: 'display_name' },
                    { value: '+79099673030', placeholder: 'Телефон', type: 'text', name: 'phone' },
                ],
            },
            chat: {
                menu: {
                    avatar_link: 'https://www.shutterstock.com/image-photo/greta-thunberg-fridays-future-event-260nw-1587812527.jpg',
                    title: 'Иван Иванов',
                    message: '+7 (909) 967 30 30',
                    search: null
                },
                items: [
                    {
                        id: 0,
                        avatar_link: null,
                        content: {
                            title: 'Кондрат',
                            message: 'Ты чего?',
                            data: {
                                time: '21:14',
                                new_messages: 1
                            }
                        }
                    },
                    {
                        id: 1,
                        avatar_link: null,
                        content: {
                            title: 'Frontend news',
                            message: 'Друзья, мы запускаем новую версию продукта',
                            data: {
                                time: '21:14',
                                new_messages: 4
                            }
                        }
                    },
                    {
                        id: 2,
                        avatar_link: null,
                        content: {
                            title: 'Тёща',
                            message: 'А я же говорила...',
                            data: {
                                time: '21:14',
                                new_messages: null
                            }
                        }
                    },
                    {
                        id: 3,
                        avatar_link: null,
                        content: {
                            title: 'Daily M',
                            message: 'Почему вы ещё не создали свою версию',
                            data: {
                                time: '21:14',
                                new_messages: null
                            }
                        }
                    },
                    {
                        id: 4,
                        avatar_link: null,
                        content: {
                            title: 'Встреча выпускников',
                            message: 'Евгений: а может под мост?',
                            data: {
                                time: '14:02',
                                new_messages: null
                            }
                        }
                    },
                    {
                        id: 5,
                        avatar_link: null,
                        content: {
                            title: 'ЯжДизайнер',
                            message: 'Т-текстуры',
                            data: {
                                time: '21:13',
                                new_messages: null
                            }
                        }
                    },
                    {
                        id: 6,
                        avatar_link: null,
                        content: {
                            title: 'Кто-то очень умный',
                            message: 'А как вы хотели',
                            data: {
                                time: '21:18',
                                new_messages: null
                            }
                        }
                    },
                    {
                        id: 7,
                        avatar_link: 'https://www.shutterstock.com/image-photo/greta-thunberg-fridays-future-event-260nw-1587812527.jpg',
                        content: {
                            title: 'Двойник',
                            message: 'Что за дела?',
                            data: {
                                time: '21:18',
                                new_messages: 9
                            }
                        }
                    },
                    {
                        id: 8,
                        avatar_link: null,
                        content: {
                            title: 'Кто-то очень умный',
                            message: 'А как вы хотели',
                            data: {
                                time: '21:18',
                                new_messages: null
                            }
                        }
                    },
                    {
                        id: 9,
                        avatar_link: null,
                        content: {
                            title: 'Кто-то очень умный',
                            message: 'А как вы хотели',
                            data: {
                                time: '21:18',
                                new_messages: null
                            }
                        }
                    },
                    {
                        id: 10,
                        avatar_link: null,
                        content: {
                            title: 'Кто-то очень умный',
                            message: 'А как вы хотели',
                            data: {
                                time: '21:18',
                                new_messages: null
                            }
                        }
                    },
                    {
                        id: 11,
                        avatar_link: null,
                        content: {
                            title: 'Кто-то очень умный',
                            message: 'А как вы хотели',
                            data: {
                                time: '21:18',
                                new_messages: null
                            }
                        }
                    },
                    {
                        id: 12,
                        avatar_link: null,
                        content: {
                            title: 'Кто-то очень умный',
                            message: 'А как вы хотели',
                            data: {
                                time: '21:18',
                                new_messages: null
                            }
                        }
                    },
                    {
                        id: 13,
                        avatar_link: null,
                        content: {
                            title: 'Кто-то очень умный',
                            message: 'А как вы хотели',
                            data: {
                                time: '21:18',
                                new_messages: null
                            }
                        }
                    }

                ],
                chat_field: {
                    header: {
                        title: 'Двойник',
                        message: 'был(а) 35 минут назад'
                    },
                    messages: {},
                    message_field: null
                }
            }
        }
    })]
});
