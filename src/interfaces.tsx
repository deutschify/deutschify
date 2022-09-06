export interface IUserRegistrationForm {
    vorName: string;
    nachName: string;
    email: string;
    password: string;
    repeatPassword: string;
    sprache: string;
    nationalität: string;
}

export interface IUserLoginForm {
    email: string;
    password: string;
}