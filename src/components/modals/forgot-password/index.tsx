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
import InputMask from "react-input-mask";

import { StateContext, DispatchContext } from "../../../store";
import { Form, Input, MyButton, MyText, ToggleButton } from "../..";
import ThemeMain from "../../../theme";
import API from "../../../api";
import { SignModalProps } from "../../../interface";

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
        width: 300,
    },
}));

const DialogTitleStyle = styled(DialogTitle)(({ theme }) => ({
    background: "#f5f5f5",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
        width: 300,
        fontSize: 16,
    },
}));

const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitleStyle
            {...other}
            sx={{ m: 0, p: 2, bgcolor: "#f5f5f5", textAlign: "center" }}
        >
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    ml: 4,
                }}
            >
                {children}
            </Box>

            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitleStyle>
    );
};

const ForgotPasswordModal: React.FC<SignModalProps> = ({
    forgot,
    setForgotClose,
    setLoginOpen,
}) => {
    const [secondForm, setSecondForm] = useState(false);
    const [firstForm, setFirstForm] = useState(true);
    const [threeForm, setThreeForm] = useState(false);
    const [phone, setPhone] = useState("");

    const [toggle, setToggle] = useState("Email");
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    const { register, handleSubmit } = useForm({
        mode: "onBlur",
    });

    const handleClose = () => {
        setForgotClose();
    };

    const choiceAPI = (data: any) => {
        setPhone(data.phone);
        API.sendPhoneMailForgotPassword(data, toggle)
            .then((res) => {
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
                setSecondForm(false);
                setThreeForm(true);
            })
            .catch((err) => {
                toast.error("Не правильный код");
            });
    };

    const resend_code = () => {
        API.resend_phone(phone)
            .then((res) => {
                toast.success("Код отправлен повторно");
            })
            .catch((err) => {
                toast.error("Не правильный код");
            });
    };

    const resetPassword = (data: any) => {
        if (data.password === data.forgot_password) {
            API.reset_password(data)
                .then((res) => {
                    handleClose();
                    setLoginOpen();
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
                open={forgot}
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
                                    onClick={() => resend_code()}
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
                                        required
                                    />
                                ) : (
                                    <InputMask
                                        mask="79999999999"
                                        disabled={false}
                                        {...register("phone")}
                                        required
                                    >
                                        {() => (
                                            <Input
                                                {...register("phone")}
                                                id="phone"
                                                label="Телефон"
                                                required
                                            />
                                        )}
                                    </InputMask>
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
};

export default ForgotPasswordModal;
