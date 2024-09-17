// src/helpers/validations.ts

export const validateEmail = (email: string): string => {
    if (!email) {
    return "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
    return "El email no es válido";
    }
    return "";
};

export const validatePassword = (password: string): string => {
    if (!password) {
    return "La contraseña es requerida";
    } else if (password.length < 6) {
    return "La contraseña debe tener al menos 6 caracteres";
    }
    return "";
};


export const validateName = (name: string): string => {
    if (!name) {
    return "El nombre es requerido";
    }
    return "";
};

export const validateAddress = (address: string): string => {
    if (!address) {
    return "La dirección es requerida";
    }
    return "";
};

export const validatePhone = (phone: string): string => {
    if (!phone) {
    return "El teléfono es requerido";
    } else if (!/^\d{10}$/.test(phone)) {
    return "El teléfono debe tener 10 dígitos";
    }
    return "";
};
