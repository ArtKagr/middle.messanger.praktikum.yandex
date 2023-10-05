import { HTTPTransport } from "../utils/HTTPTransport";
import { url } from "./type";

type ChatCreate = {
    title: string,
    chatId: string | number | ChatCreate
}

type ChatUsers = {
    users: Array<string | number>,
    chatId: number
}

const chatApi = new HTTPTransport();

class ChatApi {

    async getChats() {
        return await chatApi.get(`${url}/chats`);
    }

    async getChatToken(data: number) {
        return await chatApi.post(`${url}/chats/token/${data}`);
    }

    async createChat(data: ChatCreate) {
        return await chatApi.post(`${url}/chats`, { data });
    }

    async addUsers(data: ChatUsers) {
        return await chatApi.put(`${url}/chats/users`, { data });
    }

    async deleteUsers(data: ChatUsers) {
        return await chatApi.delete(`${url}/chats/users`, { data });
    }
}

export {
    ChatCreate,
    ChatUsers,
    ChatApi
}