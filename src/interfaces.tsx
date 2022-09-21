export interface IUserRegistrationForm {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    repeatPassword: string;
    language: string;
    nationality: string;
}

export interface IUserEditForm {
    firstName: string;
    lastName: string;
    password: string;
    repeatPassword: string;
    language: string;
    imageURL: string;
}

export interface IUserLoginForm {
    firstName: string;
    email: string;
    password: string;
    accessGroups: string[];
}

