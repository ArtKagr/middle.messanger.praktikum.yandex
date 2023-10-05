import { HTTPTransport } from '../utils/HTTPTransport';
import { url, User} from "./type";

const authApi= new HTTPTransport();

export default class AuthApi {
    async create(data: User) {
        return await authApi.post(`${url}/auth/signup`, { data });
    }

    async login(data: User) {
        return await authApi.post(`${url}/auth/signin`, { data });
    }

    async getUser() {
        return await authApi.get(`${url}/auth/user`);
    }

    async logout() {
        return await authApi.post(`${url}/auth/logout`)
    }
}

export {
    authApi
}