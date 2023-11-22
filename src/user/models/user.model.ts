export interface CreateUserModel {
    name: string;
    email: string;
    password: string;
}

export interface LoginModel {
    email: string,
    password: string,
}