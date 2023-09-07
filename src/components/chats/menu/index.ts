import Block from '../../../utils/Block';
import template from './chatsMenu.tmpl';
import { ChatsUser } from "../user";
import { testFunc } from '../../../utils/Validation';

export const users: UserProps[] = [
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
        },
        activeClass: '-active'
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
];

export class ChatsMenu extends Block {
    constructor(props: ChatsMenuProps) {
        super('div', props);
    }

    render() {
        users.forEach((user) => {
            user.events = { click: testFunc }
            this.children[user.id] = new ChatsUser(user);
        })

        return this.compile(template, this.props)
    }
}
