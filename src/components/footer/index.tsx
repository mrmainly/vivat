import React from "react";

import { Grid, Box } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

import { MyContainer, MyText, BorderLine } from "..";
import ROUTES from "../../routes";

import { FormattedMessage } from "react-intl";

const GridItem = styled(Grid)(({ theme }) => ({
    marginTop: 10,
    marginBottom: 10,
    [theme.breakpoints.down("sm")]: {
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
}));

const FooterBox = styled(Box)(({ theme }) => ({
    background: "white",
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const Footer = () => {
    const Array = [
        {
            title: <FormattedMessage id='help'/>,
            columns: [
                {
                    label: <FormattedMessage id='how_place_order'/>,
                    href: ROUTES.ORDER,
                },
                {
                    label: <FormattedMessage id='payment_booking'/>,
                    href: ROUTES.BOOKING,
                },
                {
                    label: <FormattedMessage id='delivery'/>,
                    href: ROUTES.DELIVERY,
                },
                {
                    label: <FormattedMessage id='interesting'/>,
                    href: "/",
                },
                {
                    label: <FormattedMessage id='privacy_policy'/>,
                    href: "/",
                },
                {
                    label: <FormattedMessage id='permit_documentation'/>,
                    href: ROUTES.WORK,
                },
                {
                    label: <FormattedMessage id='conditions_distance_selling'/>,
                    href: "/",
                },
                {
                    label: <FormattedMessage id='feedback'/>,
                    href: "/",
                },
            ],
        },
        {
            title: <FormattedMessage id='about_us'/>,
            columns: [
                {
                    label: <FormattedMessage id='about_company'/>,
                    href: ROUTES.TEAM,
                },
                {
                    label: <FormattedMessage id='contacts'/>,
                    href: ROUTES.CONTACTS,
                },
                {
                    label: <FormattedMessage id='leave_feedback'/>,
                    href: "/",
                },
            ],
        },
        {
            title: <FormattedMessage id='job_uppercase'/>,
            columns: [
                {
                    label: <FormattedMessage id='benefits_working_in_vivat'/>,
                    href: "/",
                },
                {
                    label: <FormattedMessage id='working_in_pharmacy'/>,
                    href: "/",
                },
                {
                    label: <FormattedMessage id='contacts'/>,
                    href: "/",
                },
            ],
        },
    ];
    return (
        <FooterBox>
            <MyContainer
                wrapper={false}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 300,
                    color: "#55CD61",
                    padding: 2,
                    flexDirection: "column",
                }}
            >
                <Grid container sx={{ mb: 2 }}>
                    {Array.map((item, index) => (
                        <GridItem
                            item
                            key={index}
                            lg={3}
                            xl={3}
                            md={3}
                            sm={6}
                            xs={12}
                        >
                            <MyText variant="h6">{item.title}</MyText>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                {item.columns.map((item, index) => (
                                    <Link
                                        to={item.href}
                                        key={index}
                                        style={{
                                            marginTop: 10,
                                            textDecoration: "none",
                                            color: "#55CD61",
                                            width: "max-width",
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </Box>
                        </GridItem>
                    ))}
                </Grid>
                <BorderLine />
                <MyText sx={{ mt: 2 }}>
                    © 2021 Да здравствует здоровье «Vivat»
                </MyText>
            </MyContainer>
        </FooterBox>
    );
};

export default Footer;
