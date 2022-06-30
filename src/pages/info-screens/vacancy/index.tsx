import React from "react";

import InfoBlog from "../components/InfoBlog";
import { MyText } from "../../../components";

import theme from "../../../theme";

import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

const Vacancy = () => {
    const CustomGrid = styled(Grid)(({ theme }) => ({
        display: "flex",
        marginTop: 8,
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },
    }));
    const data = [
        {
            post: "Фармацевт/провизор",
            texts: [
                {
                    label: "Опыт работы:",
                    value: "Не требуется",
                },
                {
                    label: "Образование:",
                    value: "Фармацевтическое (среднее специальное/высшее)",
                },
                {
                    label: "График работы:",
                    value: "Полный рабочий день",
                },
                {
                    label: "Зарплата:",
                    value: "От 80 000 руб.",
                },
            ],
            sentResume: "Отправить резюме на ",
            type: "notEnd",
        },
        {
            post: "Фармацевт/провизор",
            texts: [
                {
                    label: "Опыт работы:",
                    value: "Не требуется",
                },
                {
                    label: "Образование:",
                    value: "Фармацевтическое (среднее специальное/высшее)",
                },
                {
                    label: "График работы:",
                    value: "Полный рабочий день",
                },
                {
                    label: "Зарплата:",
                    value: "От 80 000 руб.",
                },
            ],
            sentResume: "Отправить резюме на ",
            type: "notEnd",
        },
        {
            post: "Фармацевт/провизор",
            texts: [
                {
                    label: "Опыт работы:",
                    value: "Не требуется",
                },
                {
                    label: "Образование:",
                    value: "Фармацевтическое (среднее специальное/высшее)",
                },
                {
                    label: "График работы:",
                    value: "Полный рабочий день",
                },
                {
                    label: "Зарплата:",
                    value: "От 80 000 руб.",
                },
            ],
            sentResume: "Отправить резюме на ",
            type: "notEnd",
        },
        {
            post: "Фармацевт/провизор",
            texts: [
                {
                    label: "Опыт работы:",
                    value: "Не требуется",
                },
                {
                    label: "Образование:",
                    value: "Фармацевтическое (среднее специальное/высшее)",
                },
                {
                    label: "График работы:",
                    value: "Полный рабочий день",
                },
                {
                    label: "Зарплата:",
                    value: "От 80 000 руб.",
                },
            ],
            sentResume: "Отправить резюме на ",
            type: "end",
        },
    ];
    return (
        <div>
            <InfoBlog title="Наши вакансии">
                {data.map((item, index) => (
                    <Box key={index}>
                        <MyText variant="h6" sx={{ mb: 0.8, fontWeight: 600 }}>
                            {item.post}
                        </MyText>
                        {item.texts.map((textItem, index) => (
                            <CustomGrid container>
                                <Grid
                                    item
                                    xl={4}
                                    lg={4}
                                    md={4}
                                    sm={4}
                                    xs={4}
                                    key={index}
                                >
                                    <MyText variant="body2">
                                        {textItem.label}
                                    </MyText>
                                </Grid>
                                <Grid
                                    item
                                    xl={8}
                                    lg={8}
                                    md={8}
                                    sm={8}
                                    xs={8}
                                    key={index}
                                >
                                    <MyText variant="body2">
                                        {textItem.value}
                                    </MyText>
                                </Grid>
                            </CustomGrid>
                        ))}
                        <MyText variant="body1" sx={{ mt: 1.6 }}>
                            {item.sentResume}{" "}
                            <span style={{ color: theme.palette.primary.main }}>
                                finvest2011@mail.ru
                            </span>
                        </MyText>
                        <>
                            {item.type !== "end" ? (
                                <Box
                                    sx={{
                                        border: "1px solid #CDCDCD",
                                        mt: 2.8,
                                        mb: 2.8,
                                    }}
                                ></Box>
                            ) : (
                                ""
                            )}
                        </>
                    </Box>
                ))}
            </InfoBlog>
        </div>
    );
};

export default Vacancy;
