'use client'

import {ComponentProps} from 'react';
import {Auth0Provider} from '@auth0/auth0-react';
import {useRouter} from 'next/navigation'
import useIsClientSide from "@/hooks/useIsClientSide";
import useAuthConfig from "@/hooks/useAuthConfig";

type AuthProps = ComponentProps<typeof Auth0Provider>

export function AuthProvider({children}: { children: React.ReactNode }) {
    const config = useAuthConfig()
    const router = useRouter()

    if (!useIsClientSide()) return null

    const onRedirectCallback: AuthProps['onRedirectCallback'] = (appState) => {
        console.log('onRedirectCallback', appState)
        router.replace(appState?.returnTo ?? window?.location.pathname)
    }

    return <Auth0Provider
        domain={config.domain}
        clientId={config.clientId}
        authorizationParams={{
            redirect_uri: config.redirectUri
        }}
        onRedirectCallback={onRedirectCallback}
    >{children}</Auth0Provider>
}
