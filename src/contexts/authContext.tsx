"use client";

import { UserSession } from "@/interfaces/forms";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

interface AuthProviderProps {
    children: React.ReactNode;
}

interface AuthContextProps {
    user: UserSession | null;
    setUser: (user:UserSession | null) => void;
    logout: () => void;
    
}

export const AuthContext = createContext<AuthContextProps>({
    user: null,
    setUser: () => {},
    logout: () => {},
});

export const AuthProvider = ({children}: AuthProviderProps) => {
    const [user, setUser] = useState<UserSession | null>(null);
    const router = useRouter();
    
    useEffect(() => {

        if (user) {
            localStorage.setItem("user", JSON.stringify({ user }));
        }
    }, [user]);
    
    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
        const localUser = localStorage.getItem("user");
        setUser(JSON.parse(localUser!)?.user)
        }
    }, []);

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
        router.push("/home");
    };

    return (
        <AuthContext.Provider value={{user, setUser, logout}}>
        {children}
        </AuthContext.Provider>
    )
};