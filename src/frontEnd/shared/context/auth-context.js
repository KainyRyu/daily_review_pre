import { createContext } from 'react';

export const AuthContext = createContext({
    isSignedIn: false,
    currentUser: null,
    signIn: () => {},
    signOut: () => {}
})