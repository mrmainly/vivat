import React, { useEffect, useState } from "react";
import { TextField, Box } from "@mui/material";
import { styled } from "@mui/system";
import { toast } from "react-toastify";
import cookie from "js-cookie";

import {
    ProfileSideBar,
    MyButton,
    ProfileUpdateModal,
    SkeletonBasicInformation,
} from "../../../components";
import API from "../../../api";

import { FormattedMessage } from "react-intl";
import {
    useGetAccountUserQuery,
    usePatchAccountUserMutation,
} from "../../../services/AccountUser";

const Main = styled(Box)(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
    },
}));

const InputProfile = styled(TextField)(({ theme }) => ({
    background: "white",
}));

const ProfileForm = styled(Box)(({ theme }) => ({
    width: 350,
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
}));

const BasicInformation = () => {
    const [phone, setPhone] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [date, setDate] = useState("");
    const [patronymic, setPatronymic] = useState("");
    const [mail, setMail] = useState("");
    const [loading, setLoading] = useState(true);

    const [patchAccountUser] = usePatchAccountUserMutation();

    useEffect(() => {
        const getAccount = async () => {
            await API.getAccountUser().then((res) => {
                const data = res.data;
                setPhone(data.phone);
                setFirstName(data.first_name);
                setLastName(data.last_name);
                setMail(data.email);
                setPatronymic(data.patronymic);
                setDate(data.birth_date);
                cookie.set(
                    "name",
                    `${data.first_name} ${data.last_name} ${data.patronymic}`
                );
            });
            setLoading(false);
        };
        getAccount();
    }, []);

    const putAccountUser = () => {
        patchAccountUser({
            email: mail,
            first_name: firstName,
            last_name: lastName,
            patronymic: patronymic,
            birth_date: date,
            sex: "male",
        })
            .then((res: any) => {
                if (res.data) {
                    toast.success("Профиль изменен");
                } else {
                    toast.error(
                        `${res.error.data.errors[0]} ${res.error.data.errors[1]}`
                    );
                }
                console.log(res);
            })
            .catch((err) => {
                toast.error("Профиль не изменен");
            });
    };

    return (
        <Main>
            <ProfileSideBar
                title={<FormattedMessage id="basic_information" />}
            />
            <Box sx={{ mt: 6.3, width: "100%" }}>
                <ProfileForm>
                    <ProfileUpdateModal />
                    {loading ? (
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <SkeletonBasicInformation />
                        </Box>
                    ) : (
                        <>
                            <InputProfile
                                label={<FormattedMessage id="surname" />}
                                fullWidth
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <InputProfile
                                label={<FormattedMessage id="name" />}
                                margin="normal"
                                fullWidth
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <InputProfile
                                label={<FormattedMessage id="patronymic" />}
                                margin="normal"
                                fullWidth
                                value={patronymic}
                                onChange={(e) => setPatronymic(e.target.value)}
                            />
                            <InputProfile
                                label={<FormattedMessage id="phone_number" />}
                                margin="normal"
                                fullWidth
                                value={phone}
                            />
                            <InputProfile
                                label={<FormattedMessage id="mail" />}
                                margin="normal"
                                fullWidth
                                value={mail}
                                onChange={(e) => setMail(e.target.value)}
                            />
                            <InputProfile
                                label={<FormattedMessage id="birth_date" />}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                                type="date"
                                fullWidth
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                            <MyButton
                                style={{ marginTop: 15 }}
                                fullWidth
                                onClick={() => putAccountUser()}
                            >
                                Сохранить
                            </MyButton>
                        </>
                    )}
                </ProfileForm>
            </Box>
        </Main>
    );
};

export default BasicInformation;
