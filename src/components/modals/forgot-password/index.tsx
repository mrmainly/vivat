import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";

import { Form, Input, MyButton, MyText, ToggleButton } from "../..";
import ThemeMain from "../../../theme";
import { authModalSlice } from "../../../reducer/auth_modal_slice";
import {
    useForgotPasswordChangePhoneAndMailMutation,
    useForgotPasswordV1Mutation,
    useForgotPasswordV2Mutation,
    useForgotPasswordV3Mutation,
    useForgotResetEmailMutation,
    useForgotResetPhoneMutation,
} from "../../../services/AuthService";

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
            sx={{
                m: 0,
                p: 2,
                bgcolor: "#f5f5f5",
                textAlign: "center",
            }}
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

const ForgotPasswordModal = () => {
    const [secondForm, setSecondForm] = useState(false);
    const [firstForm, setFirstForm] = useState(true);
    const [threeForm, setThreeForm] = useState(false);
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");

    const { openForgotPassword } = useSelector(
        (state: any) => state.auth_modal_slice
    );
    const dispatch = useDispatch();
    const { openForgotPasswordModal, openLoginModal } =
        authModalSlice.actions;
    const [togglePhoneAndMail] =
        useForgotPasswordChangePhoneAndMailMutation();
    const [postForgotV1] = useForgotPasswordV1Mutation();
    const [postForgotV2] = useForgotPasswordV2Mutation();
    const [postForgotV3] = useForgotPasswordV3Mutation();
    const [resendPhone] = useForgotResetPhoneMutation();
    const [resendMail] = useForgotResetEmailMutation();

    const [toggle, setToggle] = useState("Email");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
    });

    const handleClose = () => {
        dispatch(openForgotPasswordModal(false));
    };

    const choiceAPI = (data: any) => {
        if (toggle === "phone") {
            setPhone(data.phone);
        } else {
            setMail(data.email);
        }

        togglePhoneAndMail({ data: data, toggle: toggle })
            .then((res: any) => {
                if (res.data) {
                    setSecondForm(true);
                    setFirstForm(false);
                } else {
                    toast.error(
                        toggle === "phone"
                            ? "Номер телефона не найден"
                            : "Электронная почта не найдена"
                    );
                }
            })
            .catch(() => {
                toast.error("что то пошло не так");
            });
    };
    const verify = (data: any) => {
        postForgotV1({ code: data.code })
            .then((res: any) => {
                if (res.data) {
                    setSecondForm(false);
                    setThreeForm(true);
                } else {
                    toast.error(res.error.data.errors[0]);
                }
            })
            .catch((err) => {
                toast.error("что то пошло не так");
            });
    };

    const resend_code = () => {
        if (toggle === "Email") {
            resendMail({ email: mail })
                .then((res: any) => {
                    if (res.data) {
                        toast.success("Код отправлен повторно");
                    } else {
                        toast.error("Не правильный код");
                    }
                })
                .catch((err) => {
                    toast.error("Не правильный код");
                });
        } else {
            resendPhone({ phone: phone })
                .then((res: any) => {
                    if (res.data) {
                        toast.success("Код отправлен повторно");
                    } else {
                        toast.error("Не правильный код");
                    }
                })
                .catch((err) => {
                    toast.error("Не правильный код");
                });
        }
    };

    const resetPassword = (data: any) => {
        if (data.password === data.forgot_password) {
            postForgotV3(data).then((res: any) => {
                if (res.data) {
                    handleClose();
                    dispatch(openLoginModal(true));
                } else {
                    toast.error("что то пошло не так");
                }
            });
        } else {
            toast.error("что то пошло не так");
        }
    };

    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={openForgotPassword}
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
                                <Input
                                    label="Код"
                                    {...register("code")}
                                />
                                <MenuItem
                                    sx={{
                                        color: ThemeMain.palette
                                            .primary.main,
                                    }}
                                    onClick={() => resend_code()}
                                >
                                    Отправить код еще раз
                                </MenuItem>
                                {/* <Input label="Пароль" type="password" />
                                <Input label="Подтверждение пароля" type="password" /> */}
                                <MyButton
                                    style={{ marginTop: 10 }}
                                    fullWidth
                                >
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
                            <Form
                                onSubmit={handleSubmit(resetPassword)}
                            >
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
                                <MyButton
                                    style={{ marginTop: 10 }}
                                    fullWidth
                                >
                                    Продолжить
                                </MyButton>
                            </Form>
                        </Box>
                    </ModalContent>
                )}

                {firstForm && (
                    <ModalContent dividers>
                        <MyText sx={{ textAlign: "center" }}>
                            Чтобы восстановить пароль, введите Вашу
                            электронную почту
                        </MyText>
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
                                        {...register("email", {
                                            required:
                                                "Электронная почта обязательное поле",
                                            pattern: {
                                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                message:
                                                    "Не корректные данные электронной почты",
                                            },
                                        })}
                                        error={!!errors.email}
                                        helperText={
                                            errors?.email?.message
                                        }
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
                                <MyButton
                                    style={{ marginTop: 10 }}
                                    fullWidth
                                >
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
