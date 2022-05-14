import React, { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    MenuItem,
    Box,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { StateContext, DispatchContext } from "../../../store";
import { Form, Input, MyButton, MyText, ToggleButton } from "../..";
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

export default function ForgotPassword() {
    const [secondForm, setSecondForm] = useState(false);
    const [firstForm, setFirstForm] = useState(true);
    const [threeForm, setThreeForm] = useState(false);

    const [toggle, setToggle] = useState("Email");
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
    const choiceAPI = (data: any) => {
        API.sendPhoneMailForgotPassword(data, toggle)
            .then((res) => {
                console.log("inside", res);
                if (res) {
                    setSecondForm(true);
                    setFirstForm(false);
                }
            })
            .catch((err) => {
                toast.error(
                    toggle === "phone"
                        ? "Номер телефона не найден"
                        : "Электронная почта не найдена"
                );
            });
    };
    const verify = (data: any) => {
        API.sendVerifyCode({ code: data.code })
            .then((res) => {
                console.log("res.inside", res);
                setSecondForm(false);
                setThreeForm(true);
            })
            .catch((err) => {
                toast.error("Не правильный код");
            });
    };

    const resetPassword = (data: any) => {
        if (data.password === data.forgot_password) {
            API.reset_password(data)
                .then((res) => {
                    dispatch({
                        type: "auth_modal",
                        payload: {
                            sign_up: false,
                            sign_in: true,
                            forgot: false,
                        },
                    });
                })
                .catch((err) => toast.error("что то пошло не так"));
        } else {
            alert("error");
        }
    };

    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={state.auth_modal.forgot}
            >
                <BootstrapDialogTitle
                    id="customized-dialog-title"
                    onClose={handleClose}
                >
                    Восстановление пароля
                </BootstrapDialogTitle>
                {secondForm && (
                    <ModalContent dividers>
                        <MyText sx={{ textAlign: "center" }}>
                            Введите код
                        </MyText>
                        <Box
                            sx={{
                                width: 261,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Form onSubmit={handleSubmit(verify)}>
                                <Input label="Код" {...register("code")} />
                                <MenuItem
                                    sx={{
                                        color: ThemeMain.palette.primary.main,
                                    }}
                                >
                                    Отправить код еще раз
                                </MenuItem>
                                {/* <Input label="Пароль" type="password" />
                                <Input label="Подтверждение пароля" type="password" /> */}
                                <MyButton style={{ marginTop: 10 }} fullWidth>
                                    Продолжить
                                </MyButton>
                            </Form>
                        </Box>
                    </ModalContent>
                )}

                {threeForm && (
                    <ModalContent dividers>
                        <MyText sx={{ textAlign: "center" }}>
                            Введите новый пароль
                        </MyText>
                        <Box
                            sx={{
                                width: 261,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Form onSubmit={handleSubmit(resetPassword)}>
                                <Input
                                    label="Пароль"
                                    type="password"
                                    {...register("password")}
                                />
                                <Input
                                    label="Подтверждение пароля"
                                    type="password"
                                    {...register("forgot_password")}
                                />
                                <MyButton style={{ marginTop: 10 }} fullWidth>
                                    Продолжить
                                </MyButton>
                            </Form>
                        </Box>
                    </ModalContent>
                )}

                {firstForm && (
                    <ModalContent dividers>
                        <MyText sx={{ textAlign: "center" }}>
                            Чтобы восстановить пароль, введите Вашу электронную
                            почту
                        </MyText>
                        <ToggleButton
                            sx={{ mt: 2 }}
                            toggleState={toggle}
                            setToggleState={setToggle}
                        />
                        <MyText sx={{ textAlign: "center", mt: 2 }}>
                            {toggle === "phone"
                                ? "Для подтверждения номера телефона вам поступит СМС сообщение с кодом"
                                : "Для подтверждения почты, вам поступит письмо с кодом"}
                        </MyText>
                        <Box
                            sx={{
                                width: 261,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Form onSubmit={handleSubmit(choiceAPI)}>
                                {toggle === "Email" ? (
                                    <Input
                                        label="Электронная почта"
                                        {...register("email")}
                                    />
                                ) : (
                                    <Input
                                        label="Номер телефона"
                                        {...register("phone")}
                                    />
                                )}
                                <MyButton style={{ marginTop: 10 }} fullWidth>
                                    Восстановить пароль
                                </MyButton>
                            </Form>
                        </Box>
                    </ModalContent>
                )}
            </BootstrapDialog>
        </div>
    );
}
