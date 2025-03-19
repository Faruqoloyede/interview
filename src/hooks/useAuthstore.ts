import { create } from "zustand";

interface AuthStore {
    user: {
        email: string,
        password: string,
    } | null;

    login: (email: string, password: string) => boolean;
    logout: ()=> void;
}

export const useAuthstore = create<AuthStore>((set)=>({
    user: null,
    login: (email, password) =>{
        set({user: {email, password}});
        return true;
    },
    logout: ()=> set({user: null}),
}))