import React, { useContext } from 'react'

import { Drawer, Box, IconButton } from '@mui/material'

import { MyLink, BorderLine } from '../..'
import drawer_links from '../../../local_data/drawer_links'
import drawer_elements from '../../../local_data/drawer_elements'
import { DispatchContext, StateContext } from '../../../store'

interface MainDrawerProps {
    state: any,
    handleClose: any
}

const MainDrawer: React.FC<MainDrawerProps> = ({ state, handleClose }) => {
    // const state = useContext(StateContext)
    // const dispatch = useContext(DispatchContext)

    // const handleDrawerClose = () => dispatch({ type: 'drawers', payload: { profile_drawer: false, main_drawer: false, favorites_drawer: false } })
    return (
        <Drawer
            {...{
                anchor: "left",
                open: state,
                onClose: handleClose,
            }}
        >
            <Box style={{
                width: 300, padding: 15, display: 'flex', flexDirection: 'column',
                height: '100%',
            }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={() => handleClose()}><img src="/img/Close_round_light.png" /></IconButton>
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