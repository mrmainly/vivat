import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { MyText } from "../../../components";
import ThemeMain from "../../../theme";
import InfoBlog from "../components/InfoBlog";
import { FormattedMessage } from "react-intl";

const Benefits = () => {
    const data = [
        {
            img: "/img/_1966168276096.png",
            title: <FormattedMessage id="our_benefits_1" />,
        },
        {
            img: "/img/benefits_2.png",
            title: <FormattedMessage id="our_benefits_2" />,
        },
        {
            img: "/img/benefits_3.png",
            title: <FormattedMessage id="our_benefits_3" />,
        },
        {
            img: "/img/benefits_4.png",
            title: <FormattedMessage id="our_benefits_4" />,
        },
        {
            img: "/img/benefits_5.png",
            title: <FormattedMessage id="our_benefits_5" />,
        },
        {
            img: "/img/benefits_6.png",
            title: <FormattedMessage id="our_benefits_6" />,
        },
    ];
    return (
        <InfoBlog title={<FormattedMessage id="our_benefits" />}>
            <Grid
                container
                sx={{ display: "flex", justifyContent: "space-evenly" }}
            >
                {data.map((item: any, index: number) => (
                    <Grid
                        item
                        xl={4}
                        lg={4}
                        md={6}
                        sm={6}
                        xs={12}
                        key={index}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "26px 20px 47px",
                        }}
                    >
                        <img src={item.img} />
                        <MyText
                            variant="h6"
                            sx={{ mt: 2, maxWidth: 260, textAlign: "center" }}
                        >
                            {item.title}
                        </MyText>
                    </Grid>
                ))}
            </Grid>
        </InfoBlog>
    );
};

export default Benefits;
