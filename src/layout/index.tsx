import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import BasicLayout from './BasicLayout'
import ProfileLayout from './ProfileLayout'

const Layout = () => {
    const location = useLocation()
    useEffect(() => {

    }, [location])
    return (
        <>
            <BasicLayout />
        </>
    )
}

export default Layout