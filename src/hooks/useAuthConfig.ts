import useIsClientSide from "@/hooks/useIsClientSide";

export default function useAuthConfig() {
    const isClientSide = useIsClientSide()

    const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN
    const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENTID

    if (!domain) throw 'Env var not set: NEXT_PUBLIC_AUTH0_DOMAIN'
    if (!clientId) throw 'Env var not set: NEXT_PUBLIC_AUTH0_CLIENTID'

    return {
        domain,
        clientId,
        redirectUri: isClientSide ? window?.location.origin : undefined,
    }
}
