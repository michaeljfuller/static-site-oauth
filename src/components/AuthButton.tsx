'use client';

import {useAuth0} from "@auth0/auth0-react";
import {useState} from "react";
import styles from './AuthButton.module.css'

export default function AuthButton() {
    const auth = useAuth0()
    const [isLoggingIn, setIsLoggingIn] = useState(false)
    const [isLoggingOut, setIsLoggingOut] = useState(false)

    const logIn = () => {
        setIsLoggingIn(true)
        auth.loginWithRedirect().then(
            () => console.log('Logging in'),
            e => console.log('Failed to log in', e)
        ).finally(() => setIsLoggingIn(false))
    }

    const logOut = () => {
        setIsLoggingOut(true)
        console.log('Logging out...')
        auth.logout().then(
            () => console.log('Logged out'),
            e => console.log('Failed to log out', e)
        ).finally(() => setIsLoggingOut(false))
    }

    if (auth.isLoading) {
        return <button disabled className={styles.button}>Loading...</button>
    }

    if (auth.isAuthenticated) {
        return <button
            className={styles.button}
            onClick={logOut}
            disabled={isLoggingOut}
        >Log Out</button>
    }

    return <button
        className={styles.button}
        onClick={logIn}
        disabled={isLoggingIn}
    >Log In</button>
}
