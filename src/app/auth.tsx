'use client'

import { ComponentProps } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useRouter } from 'next/navigation'
import useIsClientSide from "@/hooks/useIsClientSide";

type AuthProps = ComponentProps<typeof Auth0Provider>

export const AUTH0_DOMAIN = process.env.NEXT_PUBLIC_AUTH0_DOMAIN
export const AUTH0_CLIENT_ID = process.env.NEXT_PUBLIC_AUTH0_CLIENTID

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    if (!useIsClientSide()) return null

    if (!AUTH0_DOMAIN || !AUTH0_CLIENT_ID) {
        throw 'AUTH0_DOMAIN and/or AUTH0_CLIENT_ID not set'
    }
    const onRedirectCallback: AuthProps['onRedirectCallback'] = (appState) => {
        console.log('onRedirectCallback', appState)
        router.replace(appState?.returnTo ?? window?.location.pathname)
    }

    const props: AuthProps = {
        domain: AUTH0_DOMAIN,
        clientId: AUTH0_CLIENT_ID,
        authorizationParams: {
            redirect_uri: window?.location.origin,
        },
    }

    return (<>
        <h3>Auth0Provider</h3>
        <code>{JSON.stringify(props, null, 4)}</code>
        <Auth0Provider {...props} onRedirectCallback={onRedirectCallback}>
            {children}
        </Auth0Provider>
    </>)
}
