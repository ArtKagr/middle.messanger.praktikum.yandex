import AuthApi from "../api/auth";

const authApi = new AuthApi();

const getUser = async() => {
    const responseUser = await authApi.me();

    console.log(responseUser);
}

const signIn = async (data: Record<string, string>) => {
    const response = await authApi.login(data);

    console.log(response);
}

const signUp = async (data: Record<string, string>) => {
    const response = await authApi.create(data);

    console.log(response);
}

const logout = async () => {
    await authApi.logout();
}

export {
    getUser,
    signIn,
    signUp,
    logout
}