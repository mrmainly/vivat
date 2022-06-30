import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { MyText } from "../../../components";
import ThemeMain from "../../../theme";
import InfoBlog from "../components/InfoBlog";

const Benefits = () => {
    const data = [
        {
            img: "/img/benefits_1.png",
            title: "Работа в крупной и стабильной компании",
        },
        {
            img: "/img/benefits_2.png",
            title: "Возможность быстрого карьерного роста",
        },,
        {
            img: "/img/benefits_3.png",
            title: "Современные процессы и методы работы",
        },,
        {
            img: "/img/benefits_4.png",
            title: "Позитивный и дружный коллектив",
        },,
        {
            img: "/img/benefits_5.png",
            title: "Расширенный социальный пакет",
        },,
        {
            img: "/img/benefits_6.png",
            title: "Предоставление жилья иногородным",
        },
    ]
  return (
    <InfoBlog title="Наши преимущества">
        <Grid
            container
            sx={{ display: "flex", justifyContent: "space-evenly" }}
        >
            {data.map((item: any, index: number) => (
                <Grid item
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
                        padding: "26px 20px 47px"
                    }}
                >
                    <img
                        src={item.img}
                    />
                    <MyText variant="h6" sx={{ mt: 2, maxWidth: 260, textAlign: "center" }}>
                        {item.title}
                    </MyText>
                </Grid>
            ))}
        </Grid>
    </InfoBlog>
  );
};

export default Benefits;
