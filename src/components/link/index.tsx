import React from 'react'

import { Link } from 'react-router-dom'
import { styled } from '@mui/system'

import { MyLinkProps } from '../../interface'
import { MenuItem } from '@mui/material'

const MyLink: React.FC<MyLinkProps> = ({ href, children, ...props }) => {
    const CusLink = styled(Link)(({ }) => ({
        color: 'black',
        textDecoration: 'none'
    }))
    return <CusLink to={href} {...props}><MenuItem>{children}</MenuItem></CusLink>
}

export default MyLink