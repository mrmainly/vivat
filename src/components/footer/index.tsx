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
            columns: [
                {
                    label: "VIVAT",
                    href: "",
                },
                {
                    label: "8 (914) 272-50-13",
                    href: "",
                },
                {
                    label: "finvest2011@mail.ru",
                    href: "",
                },
                {
                    label: "ИНН 7707083893",
                    href: "",
                },
                {
                    label: "ОГРН 1027700132195",
                    href: "",
                },
                {
                    label: <FormattedMessage id="office_address" />,
                    href: "",
                },
            ],
        },
        {
            title: <FormattedMessage id="about_company" />,
            columns: [
                {
                    label: <FormattedMessage id="about_us" />,
                    href: ROUTES.ABOUT_US,
                },
                {
                    label: <FormattedMessage id="privacy_policy" />,
                    href: "/",
                },
                {
                    label: <FormattedMessage id="contacts" />,
                    href: ROUTES.CONTACTS,
                },
                {
                    label: <FormattedMessage id="pharmacy" />,
                    href: ROUTES.ADDRESS,
                },
            ],
        },
        {
            title: <FormattedMessage id="help" />,
            columns: [
                {
                    label: <FormattedMessage id="news" />,
                    href: ROUTES.BLOG,
                },
                {
                    label: <FormattedMessage id="medication_booking" />,
                    href: ROUTES.BOOKING,
                },
                {
                    label: <FormattedMessage id="payment_receipt_order" />,
                    href: "/",
                },
            ],
        },
        {
            title: <FormattedMessage id="career" />,
            columns: [
                {
                    label: <FormattedMessage id="benefits_working" />,
                    href: ROUTES.VIVAT_INFO,
                },
                {
                    label: <FormattedMessage id="vacancy" />,
                    href: "/",
                },
                {
                    label: <FormattedMessage id="human_resource_department" />,
                    href: "/",
                },
            ],
        },
        {
            title: <FormattedMessage id="cooperation" />,
            columns: [
                {
                    label: <FormattedMessage id="manufacturers" />,
                    href: "/",
                },
                {
                    label: <FormattedMessage id="advertising_in_website" />,
                    href: "/",
                },
                {
                    label: <FormattedMessage id="technical_support" />,
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
                            lg={2.4}
                            xl={2.4}
                            md={3}
                            sm={6}
                            xs={12}
                        >
                            <MyText
                                variant="h6"
                                style={{
                                    color: "#343434",
                                }}
                            >
                                {item.title}
                            </MyText>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                {item.columns.map((item, index) => (
                                    <Box key={index}>
                                        {item.href ? (
                                            <Link
                                                to={item.href}
                                                key={index}
                                                style={{
                                                    marginTop: 10,
                                                    textDecoration: "none",
                                                    color: "#828282",
                                                    width: "max-width",
                                                }}
                                            >
                                                {item.label}
                                            </Link>
                                        ) : (
                                            <MyText
                                                key={index}
                                                style={{
                                                    marginTop: 10,
                                                    textDecoration: "none",
                                                    color: "#686868",
                                                    width: "max-width",
                                                }}
                                            >
                                                {item.label}
                                            </MyText>
                                        )}
                                    </Box>
                                ))}
                            </Box>
                        </GridItem>
                    ))}
                </Grid>
                <BorderLine />
            </MyContainer>
        </FooterBox>
    );
};

export default Footer;
