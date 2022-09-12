export interface IUserRegistrationForm {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    repeatPassword: string;
    language: string;
    nationality: string;
}

export interface IUserLoginForm {
    email: string;
    password: string;
    accessGroups: string[];
}