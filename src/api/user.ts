import { HTTPTransport } from "../utils/HTTPTransport";
import { url } from "../typings/constants";
import { User, ResIndexed } from "../typings";

const userApi = new HTTPTransport();

class UserApi {

    async editProfile(data: User) {
        return await userApi.put(`${url}/user/profile`, { data } as ResIndexed);
    }

    async editPassword(data: { oldPassword: string, newPassword: string }) {
        return await userApi.put(`${url}/user/password`, { data } as ResIndexed);
    }

    async uploadAvatar(data: ResIndexed) {
        return await userApi.put(`${url}/user/profile/avatar`, { data } as ResIndexed);
    }

    async getUserByLogin(data: ResIndexed) {
        return await userApi.post(`${url}/user/search`, { data } as ResIndexed);
    }

    async getUserById(data: ResIndexed) {
        return await userApi.get(`${url}/user/${data.id}`);
    }
}

export {
    UserApi
}