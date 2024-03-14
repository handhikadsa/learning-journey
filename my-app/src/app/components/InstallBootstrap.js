'use client'
import { useEffect } from "react";

const InstallBoostrap = () => {

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.js')
    }, [])

    return <></>
}

export default InstallBoostrap