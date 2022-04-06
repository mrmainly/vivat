import React from 'react'

import { Drawer, Box, IconButton } from '@mui/material'

import { MyLink, BorderLine } from '../..'
import drawer_links from '../../../local_data/drawer_links'
import drawer_elements from '../../../local_data/drawer_elements'
import { MyDrawerProps } from '../../../interface'

const MainDrawer: React.FC<MyDrawerProps> = ({ setState, drawerOpen }) => {
    const handleDrawerOpen = () =>
        setState((prevState: any) => ({ ...prevState, drawerOpen: true }));

    const handleDrawerClose = () =>
        setState((prevState: any) => ({ ...prevState, drawerOpen: false }))
    return (
        <Drawer
            {...{
                anchor: "left",
                open: drawerOpen,
                onClose: handleDrawerClose,
            }}
        >

            <Box style={{
                width: 300, padding: 15, display: 'flex', flexDirection: 'column',
                height: '100%',
            }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={() => handleDrawerClose()}><img src="/img/Close_round_light.png" /></IconButton>
                </Box>
                <Box>
                    <BorderLine sx={{ mb: 2, mt: 2 }} />
                    {drawer_elements.map((item: any, index: number) => (
                        <MyLink href={item.to} key={index} sx={{ color: '#20B12E' }}>{item.label}</MyLink>
                    ))}
                    <BorderLine sx={{ mb: 2, mt: 2 }} />
                </Box>
                <Box>
                    {drawer_links.map((item: any, index: number) => (
                        <MyLink href={item.to} key={index}>{item.label}</MyLink>
                    ))}
                    <BorderLine sx={{ mt: 1 }} />
                </Box>
            </Box>

        </Drawer>
    )
}

export default MainDrawer