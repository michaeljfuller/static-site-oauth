'use client';

import {useAuth0} from "@auth0/auth0-react";

export type UserBadgeProps = {
    size: number
}

export default function UserBadge({size = 100}: UserBadgeProps) {
    const {user} = useAuth0()
    if (!user) return <div style={{ width: size, height: size}} />
    return (
        <img
            src={user?.picture}
            width={size}
            height={size}
            title={user?.name}
            style={{borderRadius: size / 2}}
        />
    )
}
