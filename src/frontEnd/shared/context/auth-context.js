import { createContext } from 'react';

export const AuthContext = createContext({
    isSignedIn: false,
    fuid: null,
    signIn: () => {},
    signOut: () => {}
})