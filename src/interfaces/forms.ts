// src/interfaces/forms.ts

import { StartupSnapshot } from "v8";

export interface LoginForm {
    email: string;
    password: string;
    message?:string;
}

export interface Order {
    id: number;
    status: string;
    date: string;
}

export interface RegisterForm extends LoginForm {
    name: string;
    address: string;
    phone: string;
    userId?: number;
    orders?: Order [];
}

export interface UserSession {
    login: boolean;
    user: RegisterForm;
    token: string;
}



export interface Errors {
    email: string;
    password: string;
    name: string;
    address: string;
    phone: string;
}

export interface LoginErrors {
    email: string;
    password: string;
}

