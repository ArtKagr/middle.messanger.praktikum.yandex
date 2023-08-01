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
        context: {
            formClass: 'form',
            inputClass: 'chats-input',
            inputs: {
                auth: [
                    { class: 'chats-input', value: 'ivan@example.com', placeholder: 'E-mail', type: 'email' },
                    { class: 'chats-input', value: '1234567890', placeholder: 'Пароль', type: 'password' }
                ],
                registration: [
                    { class: 'chats-input', value: 'ivan@example.com', placeholder: 'E-mail', type: 'email' },
                    { class: 'chats-input', value: 'ivanivanov', placeholder: 'Логин', type: 'text' },
                    { class: 'chats-input', value: 'Иван', placeholder: 'Имя', type: 'text' },
                    { class: 'chats-input', value: 'Иванов', placeholder: 'Фамилия', type: 'text' },
                    { class: 'chats-input', value: 'Вано', placeholder: 'Отображаемое имя', type: 'text' },
                    { class: 'chats-input', value: '+79099673030', placeholder: 'Телефон', type: 'text' },
                    { class: 'chats-input', value: '1234567890', placeholder: 'Пароль', type: 'password' },
                    { class: 'chats-input', value: '1234567890', placeholder: 'Повторите пароль', type: 'password' }
                ]
            },
            chat: {
                users: [
                    {
                        class: 'chats-menu-settings-user',
                        avatar: {
                            class: 'user-avatar',
                            value: null
                        },
                        content: {
                            class: 'chats-menu-settings-user-content',
                            title: {
                                class: 'user-title',
                                value: 'Кондарт'
                            },
                            message: {
                                class: 'user-message',
                                value: 'Ты чего?'
                            },
                            data: {
                                class: 'flex-column-wrapper',
                                time: {
                                    class: 'user-time',
                                    value: '21:14'
                                },
                                message: {
                                    class: 'user-new_message',
                                    value: '1'
                                }
                            }
                        }
                    },
                    {
                        class: 'chats-menu-settings-user',
                        avatar: {
                            class: 'user-avatar',
                            value: null
                        },
                        content: {
                            class: 'chats-menu-settings-user-content',
                            title: {
                                class: 'user-title',
                                value: 'Frontend news'
                            },
                            message: {
                                class: 'user-message',
                                value: 'Друзья, мы запускаем новую версию продукта'
                            },
                            data: {
                                class: 'flex-column-wrapper',
                                time: {
                                    class: 'user-time',
                                    value: '21:14'
                                },
                                message: {
                                    class: 'user-new_message',
                                    value: '4'
                                }
                            }
                        }
                    },
                    {
                        class: 'chats-menu-settings-user',
                        avatar: {
                            class: 'user-avatar',
                            value: null
                        },
                        content: {
                            class: 'chats-menu-settings-user-content',
                            title: {
                                class: 'user-title',
                                value: 'Тёща'
                            },
                            message: {
                                class: 'user-message',
                                value: 'А я же говорила...'
                            },
                            data: {
                                class: 'flex-column-wrapper',
                                time: {
                                    class: 'user-time',
                                    value: '21:14'
                                },
                                message: {}
                            }
                        }
                    },
                    {
                        class: 'chats-menu-settings-user',
                        avatar: {
                            class: 'user-avatar',
                            value: null
                        },
                        content: {
                            class: 'chats-menu-settings-user-content',
                            title: {
                                class: 'user-title',
                                value: 'Daily M'
                            },
                            message: {
                                class: 'user-message',
                                value: 'Почему вы ещё не создали свою версию'
                            },
                            data: {
                                class: 'flex-column-wrapper',
                                time: {
                                    class: 'user-time',
                                    value: '21:14'
                                },
                                message: {}
                            }
                        }
                    },
                    {
                        class: 'chats-menu-settings-user',
                        avatar: {
                            class: 'user-avatar',
                            value: null
                        },
                        content: {
                            class: 'chats-menu-settings-user-content',
                            title: {
                                class: 'user-title',
                                value: 'Встреча выпускников'
                            },
                            message: {
                                class: 'user-message',
                                value: 'Евгений: а может под мост?'
                            },
                            data: {
                                class: 'flex-column-wrapper',
                                time: {
                                    class: 'user-time',
                                    value: '14:02'
                                },
                                message: {}
                            }
                        }
                    },
                    {
                        class: 'chats-menu-settings-user -active',
                        avatar: {
                            class: 'user-avatar',
                            value: null
                        },
                        content: {
                            class: 'chats-menu-settings-user-content',
                            title: {
                                class: 'user-title',
                                value: 'ЯжДизайнер'
                            },
                            message: {
                                class: 'user-message',
                                value: 'Т-текстуры'
                            },
                            data: {
                                class: 'flex-column-wrapper',
                                time: {
                                    class: 'user-time',
                                    value: '21:13'
                                },
                                message: {}
                            }
                        }
                    },
                    {
                        class: 'chats-menu-settings-user',
                        avatar: {
                            class: 'user-avatar',
                            value: null
                        },
                        content: {
                            class: 'chats-menu-settings-user-content',
                            title: {
                                class: 'user-title',
                                value: 'Кто-то очень умный'
                            },
                            message: {
                                class: 'user-message',
                                value: 'А как вы хотели'
                            },
                            data: {
                                class: 'flex-column-wrapper',
                                time: {
                                    class: 'user-time',
                                    value: '21:18'
                                },
                                message: {}
                            }
                        }
                    },
                    {
                        class: 'chats-menu-settings-user',
                        avatar: {
                            class: 'user-avatar',
                            value: null
                        },
                        content: {
                            class: 'chats-menu-settings-user-content',
                            title: {
                                class: 'user-title',
                                value: 'Кто-то очень умный'
                            },
                            message: {
                                class: 'user-message',
                                value: 'А как вы хотели'
                            },
                            data: {
                                class: 'flex-column-wrapper',
                                time: {
                                    class: 'user-time',
                                    value: '21:18'
                                },
                                message: {}
                            }
                        }
                    },
                    {
                        class: 'chats-menu-settings-user',
                        avatar: {
                            class: 'user-avatar',
                            value: null
                        },
                        content: {
                            class: 'chats-menu-settings-user-content',
                            title: {
                                class: 'user-title',
                                value: 'Кто-то очень умный'
                            },
                            message: {
                                class: 'user-message',
                                value: 'А как вы хотели'
                            },
                            data: {
                                class: 'flex-column-wrapper',
                                time: {
                                    class: 'user-time',
                                    value: '21:18'
                                },
                                message: {}
                            }
                        }
                    },
                    {
                        class: 'chats-menu-settings-user',
                        avatar: {
                            class: 'user-avatar',
                            value: null
                        },
                        content: {
                            class: 'chats-menu-settings-user-content',
                            title: {
                                class: 'user-title',
                                value: 'Кто-то очень умный'
                            },
                            message: {
                                class: 'user-message',
                                value: 'А как вы хотели'
                            },
                            data: {
                                class: 'flex-column-wrapper',
                                time: {
                                    class: 'user-time',
                                    value: '21:18'
                                },
                                message: {}
                            }
                        }
                    },
                    {
                        class: 'chats-menu-settings-user',
                        avatar: {
                            class: 'user-avatar',
                            value: null
                        },
                        content: {
                            class: 'chats-menu-settings-user-content',
                            title: {
                                class: 'user-title',
                                value: 'Кто-то очень умный'
                            },
                            message: {
                                class: 'user-message',
                                value: 'А как вы хотели'
                            },
                            data: {
                                class: 'flex-column-wrapper',
                                time: {
                                    class: 'user-time',
                                    value: '21:18'
                                },
                                message: {}
                            }
                        }
                    },
                    {
                        class: 'chats-menu-settings-user',
                        avatar: {
                            class: 'user-avatar',
                            value: null
                        },
                        content: {
                            class: 'chats-menu-settings-user-content',
                            title: {
                                class: 'user-title',
                                value: 'Кто-то очень умный'
                            },
                            message: {
                                class: 'user-message',
                                value: 'А как вы хотели'
                            },
                            data: {
                                class: 'flex-column-wrapper',
                                time: {
                                    class: 'user-time',
                                    value: '21:18'
                                },
                                message: {}
                            }
                        }
                    },
                    {
                        class: 'chats-menu-settings-user',
                        avatar: {
                            class: 'user-avatar',
                            value: null
                        },
                        content: {
                            class: 'chats-menu-settings-user-content',
                            title: {
                                class: 'user-title',
                                value: 'Кто-то очень умный'
                            },
                            message: {
                                class: 'user-message',
                                value: 'А как вы хотели'
                            },
                            data: {
                                class: 'flex-column-wrapper',
                                time: {
                                    class: 'user-time',
                                    value: '21:18'
                                },
                                message: {}
                            }
                        }
                    },
                    {
                        class: 'chats-menu-settings-user',
                        avatar: {
                            class: 'user-avatar',
                            value: null
                        },
                        content: {
                            class: 'chats-menu-settings-user-content',
                            title: {
                                class: 'user-title',
                                value: 'Кто-то очень умный'
                            },
                            message: {
                                class: 'user-message',
                                value: 'А как вы хотели'
                            },
                            data: {
                                class: 'flex-column-wrapper',
                                time: {
                                    class: 'user-time',
                                    value: '21:18'
                                },
                                message: {}
                            }
                        }
                    }
                ]
            }
        }
    })],
    css: { postcss: 'postcss.config.js' }
});
