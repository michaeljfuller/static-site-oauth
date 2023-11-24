'use client';

import { useAuth0 } from "@auth0/auth0-react";
import styles from './page.module.css'
import {useState} from "react";

export default function Home() {
  const {error: authError, ...auth} = useAuth0()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const logIn = () => {
      auth.loginWithRedirect().then(
          () => console.log('Logging in'),
          e => console.log('Failed to log in', e)
      )
  }
  const logOut = () => {
      setIsLoggingOut(true)
      console.log('Logging out...')
      auth.logout().then(
          () => console.log('Logged out'),
          e => console.log('Failed to log out', e)
      ).finally(() => setIsLoggingOut(false))
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        { authError && <p><code>Error: { JSON.stringify(authError)}</code></p> }
      </div>

      <div className={styles.center}>
        <code>Auth: { JSON.stringify(auth, null, 4)}</code>
      </div>

      <div className={styles.center} style={{ gap: '1em' }}>
        <button
          onClick={logIn}
          disabled={Boolean(auth.isLoading || authError)}
        >
          Log In
        </button>
        <br />
        <button
          onClick={logOut}
          disabled={isLoggingOut}
        >
          Log Out
        </button>
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://kinsta.com/docs/static-site-hosting/static-site-deployments"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Kinsta.
          </p>
        </a>
      </div>
    </main>
  )
}
