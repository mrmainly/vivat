import React, { useContext } from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import { StateContext, DispatchContext } from '../../store'


export default function Notification() {
    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    const handleClose = () => {
        dispatch({ type: 'notification', payload: { active: false } })
    }
    const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
        props,
        ref,
    ) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <div>
            <Snackbar
                open={state.noti.active}
                autoHideDuration={3000}
                onClose={handleClose}
                action={action}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <Alert severity={state.noti.status}>{state.noti.text}</Alert>
            </Snackbar>
        </div>
    );
}