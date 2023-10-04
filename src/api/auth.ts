import { HTTPTransport } from '../utils/HTTPTransport';

const authApi= new HTTPTransport();

export default class AuthApi {
    async create(data: Record<string, string>) {
        return authApi.post('/auth/signup', { data });
    }

    async login(data: Record<string, string>) {
        return authApi.post('/auth/signin', { data });
    }

    async me() {
        return authApi.get('/auth/user');
    }

    async logout() {
        return authApi.post('/auth/logout')
    }
}

export {
    authApi
}