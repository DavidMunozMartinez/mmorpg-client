export class LoginServiceClass {
    constructor() {}

    isAuth(): Promise<boolean> {
        return Promise.resolve(true);
    }

    register() {}

    login() {}

    logout() {}
}

export const LoginService = new LoginServiceClass();