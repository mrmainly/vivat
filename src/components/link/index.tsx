import React from 'react'

import { Link } from 'react-router-dom'
import { styled } from '@mui/system'

import { MyLinkProps } from '../../interface'

const MyLink: React.FC<MyLinkProps> = ({ href, children, ...props }) => {
    const CusLink = styled(Link)(({ }) => ({
        color: 'black',
        textDecoration: 'none'
    }))
    return <CusLink to={href} {...props}>{children}</CusLink>
}

export default MyLink