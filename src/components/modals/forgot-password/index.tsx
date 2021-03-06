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
import { useDispatch, useSelector } from "react-redux";

import { Form, Input, MyButton, MyText, ToggleButton } from "../..";
import ThemeMain from "../../../theme";
import API from "../../../api";
import { SignModalProps } from "../../../interface";
import { authModalSlice } from "../../../reducer/auth_modal_slice";

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

    const { openForgotPassword } = useSelector(
        (state: any) => state.auth_modal_slice
    );
    const dispatch = useDispatch();
    const { openForgotPasswordModal } = authModalSlice.actions;

    const [toggle, setToggle] = useState("Email");

    const { register, handleSubmit } = useForm({
        mode: "onBlur",
    });

    const handleClose = () => {
        dispatch(openForgotPasswordModal(false));
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
                        ? "?????????? ???????????????? ???? ????????????"
                        : "?????????????????????? ?????????? ???? ??????????????"
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
                toast.error("???? ???????????????????? ??????");
            });
    };

    const resend_code = () => {
        API.resend_phone(phone)
            .then((res) => {
                toast.success("?????? ?????????????????? ????????????????");
            })
            .catch((err) => {
                toast.error("???? ???????????????????? ??????");
            });
    };

    const resetPassword = (data: any) => {
        if (data.password === data.forgot_password) {
            API.reset_password(data)
                .then((res) => {
                    handleClose();
                    setLoginOpen();
                })
                .catch((err) => toast.error("?????? ???? ?????????? ???? ??????"));
        } else {
            alert("error");
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
                    ???????????????????????????? ????????????
                </BootstrapDialogTitle>
                {secondForm && (
                    <ModalContent dividers>
                        <MyText sx={{ textAlign: "center" }}>
                            ?????????????? ??????
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
                                <Input label="??????" {...register("code")} />
                                <MenuItem
                                    sx={{
                                        color: ThemeMain.palette.primary.main,
                                    }}
                                    onClick={() => resend_code()}
                                >
                                    ?????????????????? ?????? ?????? ??????
                                </MenuItem>
                                {/* <Input label="????????????" type="password" />
                                <Input label="?????????????????????????? ????????????" type="password" /> */}
                                <MyButton style={{ marginTop: 10 }} fullWidth>
                                    ????????????????????
                                </MyButton>
                            </Form>
                        </Box>
                    </ModalContent>
                )}

                {threeForm && (
                    <ModalContent dividers>
                        <MyText sx={{ textAlign: "center" }}>
                            ?????????????? ?????????? ????????????
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
                                    label="????????????"
                                    type="password"
                                    {...register("password")}
                                />
                                <Input
                                    label="?????????????????????????? ????????????"
                                    type="password"
                                    {...register("forgot_password")}
                                />
                                <MyButton style={{ marginTop: 10 }} fullWidth>
                                    ????????????????????
                                </MyButton>
                            </Form>
                        </Box>
                    </ModalContent>
                )}

                {firstForm && (
                    <ModalContent dividers>
                        <MyText sx={{ textAlign: "center" }}>
                            ?????????? ???????????????????????? ????????????, ?????????????? ???????? ??????????????????????
                            ??????????
                        </MyText>
                        <ToggleButton
                            sx={{ mt: 2 }}
                            toggleState={toggle}
                            setToggleState={setToggle}
                        />
                        <MyText sx={{ textAlign: "center", mt: 2 }}>
                            {toggle === "phone"
                                ? "?????? ?????????????????????????? ???????????? ???????????????? ?????? ???????????????? ?????? ?????????????????? ?? ??????????"
                                : "?????? ?????????????????????????? ??????????, ?????? ???????????????? ???????????? ?? ??????????"}
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
                                        label="?????????????????????? ??????????"
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
                                                label="??????????????"
                                                required
                                            />
                                        )}
                                    </InputMask>
                                )}
                                <MyButton style={{ marginTop: 10 }} fullWidth>
                                    ???????????????????????? ????????????
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
