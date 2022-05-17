import React from "react";

import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useLocation } from "react-router-dom";

import { MyText, BlogCardTheme } from "../../components";

interface NameProps {
    name?: string;
}

const ThemeBlog = () => {
    const locationState = useLocation();
    const state = locationState.state as NameProps;

    const { name } = state;

    const data = [
        {
            description:
                "Аллергия — это аномальная реакция иммунной системы на безвредные вещества. В обычном состоянии иммунитет защищает от патогенных микроорганизмов или других опасных белков, которые проникают в организм. Но если иммунная система слишком остро реагирует, то она может воспринимать обычные продукты, пыльцу или другие белки как агрессора.  sdasdasdasdasd asd as d as da sdasdasd asdasdasd asdasdasdasdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdsas dasdasdasdas asdasd asdasd fffffffffffffffffffffff ffffffffffffffff  ffffffffffffff fffffffffffffffffffffffffffffffffffffff ffffffffffffffffffffffff ffffffffffffffffff",
            tag: "Здоровте",
            img: "/img/depositphotos.jpg",
            date: "15.10.2021",
            views: "200",
            id: 1,
        },
        {
            description:
                "Аллергия — это аномальная реакция иммунной системы на безвредные вещества. В обычном состоянии иммунитет защищает от патогенных микроорганизмов или других опасных белков, которые проникают в организм. Но если иммунная система слишком остро реагирует, то она может воспринимать обычные продукты, пыльцу или другие белки как агрессора.",
            tag: "Здоровте",
            img: "/img/depositphotos.jpg",
            date: "15.10.2021",
            views: "200",
            id: 2,
        },
        {
            description:
                "3 Что нужно знать о аллергии? фыф фывфы asdasdasd sadas  asdasd  ",
            tag: "Здоровте",
            img: "/img/depositphotos.jpg",
            date: "15.10.2021",
            views: "200",
            id: 3,
        },
        {
            description:
                "4 Что нужно знать о аллергии? фыф фывфы asdasdasd sadas  asdasd  ",
            tag: "Здоровте",
            img: "/img/depositphotos.jpg",
            date: "15.10.2021",
            views: "200",
            id: 4,
        },
        {
            description:
                "5 Что нужно знать о аллергии? фыф фывфы asdasdasd sadas  asdasd  ",
            tag: "Здоровте",
            img: "/img/depositphotos.jpg",
            date: "15.10.2021",
            views: "200",
            id: 5,
        },
    ];
    return (
        <Box>
            <MyText variant="h6">{name}</MyText>
            <Grid container>
                <Grid item xs={12}>
                    {data.map((item, index) => (
                        <BlogCardTheme {...item} key={index} />
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
};

export default ThemeBlog;
