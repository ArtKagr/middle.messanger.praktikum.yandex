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
            error: {
              '404': {
                  title: { class: 'title-error', value: '404' },
                  'subtitle-main': { class: 'subtitle-main', value: 'Такой страницы нет' },
                  'subtitle-secondary': { class: 'subtitle-secondary', value: 'Мы знаем о проблеме и уже чиним сервис. Скоро все заработает.' },
                  button: { class: 'button notFound', href: '/chats', value: 'НАЗАД К ЧАТАМ' }
              },
              '500': {
                  title: { class: 'title-error', value: '500' },
                  'subtitle-main': { class: 'subtitle-main', value: 'У нас проблема' },
                  'subtitle-secondary': { class: 'subtitle-secondary', value: 'Возможно она была удалена или перенесена на другой адрес.' },
                  button: { class: 'button notFound', href: '/chats', value: 'НАЗАД К ЧАТАМ' }
              }
            },
            auth: {
              title: { class: 'title-auth', value: 'Авторизация' },
              inputs: [
                  { class: 'input', value: 'ivan@example.com', placeholder: 'E-mail', type: 'email' },
                  { class: 'input', value: '1234567890', placeholder: 'Пароль', type: 'password' }
              ],
              buttons: [
                  { class: 'button', href: '/chats', value: 'ВХОД' },
                  { class: 'auth-link', href: '/registration', value: 'ЕЩЁ НЕ ЗАРЕГИСТРИРОВАНЫ?' }
              ]
            },
            registration: {
                title: { class: 'title-auth', value: 'Регистрация' },
                inputs: [
                    { class: 'input', value: 'ivan@example.com', placeholder: 'E-mail', type: 'email' },
                    { class: 'input', value: 'ivanivanov', placeholder: 'Логин', type: 'text' },
                    { class: 'input', value: 'Иван', placeholder: 'Имя', type: 'text' },
                    { class: 'input', value: 'Иванов', placeholder: 'Фамилия', type: 'text' },
                    { class: 'input', value: 'Вано', placeholder: 'Отображаемое имя', type: 'text' },
                    { class: 'input', value: '+79099673030', placeholder: 'Телефон', type: 'text' },
                    { class: 'input', value: '1234567890', placeholder: 'Пароль', type: 'password' },
                    { class: 'input', value: '1234567890', placeholder: 'Повторите пароль', type: 'password' }
                ],
                buttons: [
                    { class: 'button', href: '/', value: 'ЗАРЕГИСТРИРОВАТЬСЯ' },
                    { class: 'auth-link', href: '/', value: 'ВОЙТИ' }
                ]
            },
            chat: {
                class: 'chats',
                menu: {
                  class: 'chats-menu',
                  settings: {
                      class: 'chats-menu-settings',
                      user: {
                          class: 'chats-menu-settings-user_settings',
                          avatar: {
                              class: 'user-avatar'
                          },
                          content: {
                              class: 'chats-menu-settings-user-content',
                              title: {
                                  class: 'user-title',
                                  value: 'Иван Иванов'
                              },
                              message: {
                                  class: 'user-message',
                                  value: '+7 (909) 967 30 30'
                              }
                          },
                          settings: {
                              class: 'user-settings'
                          }
                      },
                      search: {
                          class: 'chats-input-search',
                          placeholder: 'Поиск',
                          type: 'text',
                          value: ''
                      }
                  },
                  users: {
                    class: 'chats-menu-settings-users',
                    items: [
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
                  },
                },
                field: {
                    class: 'chats-field',
                    header: {
                        class: 'message-header',
                        content: {
                            class: 'message-header-content',
                            title: {
                                class: 'message-header-content-title',
                                value: 'ЯжДизайнер'
                            },
                            message: {
                                class: 'message-header-content-message',
                                value: 'был(а) 35 минут назад'
                            }
                        },
                        menu: {
                            class: 'message-header-menu"'
                        }
                    },
                    'message-field': {
                        class: 'message-field',
                        icon: {
                            class: 'message-field-attach'
                        },
                        input: {
                            class: 'message-field-input',
                            placeholder: 'Написать сообщение...'
                        }
                    }
                }
            }
        }
    })]
});
