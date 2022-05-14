import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import cookie from "js-cookie";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    MenuItem,
    Box,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { StateContext, DispatchContext } from "../../../store";
import { toast } from "react-toastify";
import { Form, Input, MyButton, MyText, BorderLine } from "../..";
import ThemeMain from "../../../theme";
import API from "../../../api";

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
        <DialogTitle
            sx={{ m: 0, p: 2, bgcolor: "#f5f5f5", textAlign: "center" }}
            {...other}
        >
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

export default function SignIn() {
    const navigate = useNavigate();
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);
    const { register, handleSubmit } = useForm({
        mode: "onBlur",
    });
    const handleClose = () => {
        dispatch({
            type: "auth_modal",
            payload: { sign_in: false, sign_up: false, forgot: false },
        });
    };

    const onSubmit = (data: any) => {
        API.getToken({ ...data }, dispatch)
            .then((res) => {
                toast.success("авторизация прошла успешно");
                cookie.set("jwttoken", res.data.token);
                dispatch({
                    type: "auth_modal",
                    payload: { sign_in: false, forgot: false, sign_up: false },
                });
            })
            .catch((error) => {
                toast.error("такого пользователя не существует");
            });
    };
    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={state.auth_modal.sign_in}
        >
            <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleClose}
            >
                Авторизация
            </BootstrapDialogTitle>
            <ModalContent dividers>
                <MyText sx={{ textAlign: "center" }}>
                    Если у вас есть учётная запись, авторизуйтесь, используя
                    адрес электронной почты (email) или телефон
                </MyText>
                <Box
                    sx={{
                        width: 261,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Input label="Телефон" {...register("username")} />
                        <Input
                            label="Пароль"
                            {...register("password")}
                            type="password"
                        />
                        <MenuItem
                            sx={{
                                mt: 1,
                                color: ThemeMain.palette.primary.main,
                                display: "flex",
                                justifyContent: "center",
                            }}
                            onClick={() =>
                                dispatch({
                                    type: "auth_modal",
                                    payload: {
                                        sign_in: false,
                                        sign_up: false,
                                        forgot: true,
                                    },
                                })
                            }
                        >
                            Забыли пароль?
                        </MenuItem>
                        <MyButton style={{ marginTop: 10 }} fullWidth>
                            Войти
                        </MyButton>
                    </Form>
                    <BorderLine sx={{ mt: 2, mb: 2, width: 100 }} />
                    <MyButton
                        fullWidth
                        onClick={() =>
                            dispatch({
                                type: "auth_modal",
                                payload: {
                                    sign_in: false,
                                    sign_up: true,
                                    forgot: false,
                                },
                            })
                        }
                    >
                        Регистрация
                    </MyButton>
                    <MenuItem
                        sx={{ mt: 1.5, color: ThemeMain.palette.primary.main }}
                    >
                        Продолжить без авторизации
                    </MenuItem>
                </Box>
            </ModalContent>
            {/* <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Save changes
                    </Button>
                </DialogActions> */}
        </BootstrapDialog>
    );
}
