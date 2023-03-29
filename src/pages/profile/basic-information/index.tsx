import { TextField, Box } from "@mui/material";
import { styled } from "@mui/system";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import {
    ProfileSideBar,
    MyButton,
    SkeletonBasicInformation,
} from "../../../components";

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

const InputProfile = styled(TextField)({
    background: "white",
});

const ProfileForm = styled("form")(({ theme }) => ({
    width: 350,
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
}));

const BasicInformation = () => {
    const { data, isFetching } = useGetAccountUserQuery("");
    const { register, handleSubmit } = useForm({
        mode: "onBlur",
    });

    console.log("data", data);

    const [patchAccountUser] = usePatchAccountUserMutation();

    const onSubmit = (data: any) => {
        patchAccountUser({
            email: data.email,
            first_name: data.first_name,
            last_name: data.last_name,
            patronymic: data.patronymic,
            birth_date: data.birth_date,
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
                <ProfileForm onSubmit={handleSubmit(onSubmit)}>
                    {isFetching ? (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <SkeletonBasicInformation />
                        </Box>
                    ) : (
                        <>
                            <InputProfile
                                label={
                                    <FormattedMessage id="surname" />
                                }
                                fullWidth
                                defaultValue={data.last_name}
                                {...register("last_name")}
                            />
                            <InputProfile
                                label={<FormattedMessage id="name" />}
                                margin="normal"
                                fullWidth
                                defaultValue={data.first_name}
                                {...register("first_name")}
                            />
                            <InputProfile
                                label={
                                    <FormattedMessage id="patronymic" />
                                }
                                margin="normal"
                                fullWidth
                                defaultValue={data.patronymic}
                                {...register("patronymic")}
                            />
                            <InputProfile
                                label={
                                    <FormattedMessage id="phone_number" />
                                }
                                margin="normal"
                                fullWidth
                                value={data.phone}
                                {...register("phone")}
                            />
                            <InputProfile
                                label={<FormattedMessage id="mail" />}
                                margin="normal"
                                fullWidth
                                defaultValue={data.email}
                                disabled
                            />
                            <InputProfile
                                label={
                                    <FormattedMessage id="birth_date" />
                                }
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                                type="date"
                                fullWidth
                                defaultValue={data.birth_date}
                                {...register("birth_date")}
                            />
                            <MyButton
                                style={{ marginTop: 15 }}
                                fullWidth
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
