import AuthApi from "../api/auth";
import { User } from "../typings";
import { store } from "../utils/Store";

const authApi = new AuthApi();

const getUser = async () => {
    try {
        store.on('updated', (): void => {})
        await authApi.getUser()
            .then((user) => store.set('user', user))
            .catch((e) => {
                throw e;
            });
    } catch (e) {
        throw e;
    }
}

const login = async (payload: User): Promise<void> => {
    try {
        await authApi.login(payload)
            .then(() => getUser())
            .catch((e) => {
                throw e
            });
    } catch (e) {
        throw e;
    }
}

const create = async (data: User): Promise<void> => {
    try {
        await authApi.create(data)
    } catch (e) {
        throw e;
    }
}

const logout = async (): Promise<void> => {
    try {

    } catch (e) {

    }
}

export {
    getUser,
    login,
    create,
    logout
}