import { store } from "../utils/Store";
import { UserApi } from "../api/user";
import { User } from "../typings";
import { getUser } from "./auth";
import { ResIndexed } from "../typings";

const userApi = new UserApi();

const editProfile = async (data: User) => {
    try {
        await userApi.editProfile(data)
            .then(() => getUser())
            .then(() => {
                // router TODO
            })
            .catch((e) => {
                throw e;
            });
    } catch (e) {
       throw e;
    }
}

const editPassword = async (data: { oldPassword: string, newPassword: string }) => {
    try {
        await userApi.editPassword(data)
            .then(() => {
                // router
            })
            .catch((e) => {
                throw e;
            })
    } catch (e) {
        throw e;
    }
}

const setAvatar = async (data: ResIndexed) => {
    try {
        await userApi.uploadAvatar(data)
            .then(() => {
                getUser();
                store.on('updated', () => {});
                // router TODO
            })
            .catch((e) => {
                throw e;
            })

    } catch (e) {
        throw e;
    }
}

const getCurrentUser = async (data: User) => {
    try {
        await userApi.getUserById(data)
            // TODO
            .then(() => {})
    } catch (e) {
        throw e;
    }
}

export {
    editProfile,
    editPassword,
    setAvatar,
    getCurrentUser
}