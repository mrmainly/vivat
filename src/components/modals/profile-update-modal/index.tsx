import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    DialogActions,
} from "@mui/material";

// import { StateContext, DispatchContext } from '../../../store';
import { MyText, MyButton } from "../..";
import ThemeMain from "../../../theme";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

const ModalContent = styled(DialogContent)(({ theme }) => ({
    width: 500,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
        width: 250,
    },
}));

const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

export default function ProfileUpdateModal() {
    const handleClose = () => {
        // dispatch({ type: 'profile_modal', payload: { open: false, status: '' } })
    };

    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={false}
            >
                <BootstrapDialogTitle
                    id="customized-dialog-title"
                    onClose={handleClose}
                >
                    {/* {state.profile_modal.status == 'success'
                        ?
                        'Успешно'
                        :
                        'Ошибка'
                    } */}
                </BootstrapDialogTitle>
                <ModalContent dividers>
                    <MyText sx={{ textAlign: "center" }}>
                        {/* {state.profile_modal.status == 'success'
                            ?
                            'Ваши данные сохранены'
                            :
                            'Заполните все обязательные поля'
                        } */}
                    </MyText>
                </ModalContent>
                <DialogActions>
                    <MyButton onClick={handleClose}>OK</MyButton>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
