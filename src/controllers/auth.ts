import AuthApi from "../api/auth";
import { User } from "../api/type";

const authApi = new AuthApi();

const getUser = async() => {
    const responseUser = await authApi.getUser();

    console.log(responseUser);
}

const signIn = async (data: User): Promise<void> => {
    const response = await authApi.login(data);

    console.log(response);
}

const signUp = async (data: User): Promise<void> => {
    const response = await authApi.create(data);

    console.log(response);
}

const logout = async (): Promise<void> => {
    await authApi.logout();
}

export {
    getUser,
    signIn,
    signUp,
    logout
}