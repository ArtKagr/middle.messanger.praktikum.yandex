import { HTTPTransport } from "../utils/HTTPTransport";
import { url } from "../typings/constants";
import { ResIndexed, ChatCreate, ChatUsers } from "../typings";

const chatApi = new HTTPTransport();

class ChatApi {

    async getChats() {
        return await chatApi.get(`${url}/chats`);
    }

    async getChatToken(data: number) {
        const { token } = (await chatApi.post(`${url}/chats/token/${data}`) as ResIndexed);
        return token
    }

    async createChat(data: ChatCreate) {
        return await chatApi.post(`${url}/chats`, { data } as ResIndexed);
    }

    async addUsers(data: ChatUsers) {
        return await chatApi.put(`${url}/chats/users`, { data } as ResIndexed);
    }

    async deleteUsers(data: ChatUsers) {
        return await chatApi.delete(`${url}/chats/users`, { data } as ResIndexed);
    }

    async uploadAvatar(data: FormData) {
        return await chatApi.put(`${url}/chats/avatar`, { data } as ResIndexed);
    }
}

export {
    ChatCreate,
    ChatUsers,
    ChatApi
}