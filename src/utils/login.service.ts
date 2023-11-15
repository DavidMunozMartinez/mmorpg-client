export class LoginServiceClass {
    constructor() {}

    isAuth(): Promise<{ playerId: string }> {
        return Promise.resolve({ playerId: (Math.random() + 1).toString(36).substring(7) });
    }

    register() {}

    login() {}

    logout() {}
}

export const LoginService = new LoginServiceClass();