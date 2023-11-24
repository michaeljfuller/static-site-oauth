'use client';

import {useAuth0} from "@auth0/auth0-react";
import styles from './page.module.css'
import UserBadge from "@/components/UserBadge";
import AuthButton from "@/components/AuthButton";

export default function Home() {
    const auth = useAuth0()

    return (
        <main className={styles.main}>
            {
                auth.user && <div className={styles.center}>
                    <UserBadge size={50}/>
                </div>
            }
            <div className={styles.center}>
                Hello, {auth.user?.name ?? 'Guest'}.
            </div>
            <div className={styles.center}>
                <AuthButton/>
            </div>
            <div>
                <pre>Auth: {JSON.stringify(auth, null, 4)}</pre>
            </div>
        </main>
    )
}
