import {useEffect, useState} from "react";

export default function useIsClientSide() {
    const [isClientSide, setClientSide] = useState(false);

    useEffect(() => {
        setClientSide(true);
    }, []);

    return isClientSide
}
