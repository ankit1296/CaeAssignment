export class LoggedInUser {
    username:string;
    password: string;
    loginTime: any;
    constructor() {
        this.username = '';
        this.password = '';
        this.loginTime = undefined;

    }

    static getLoggedInUserInstance(username:string,password:string) : LoggedInUser{
       const user = new LoggedInUser();
       user.username = username;
       user.password = password;
       user.loginTime = new Date();
       return user;
    }
}