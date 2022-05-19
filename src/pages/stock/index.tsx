import React, { useEffect, useState } from "react";

import {
    Box,
    Grid,
    FormControlLabel,
    FormGroup,
    Checkbox,
    Pagination,
} from "@mui/material";
import { styled } from "@mui/system";

import { MyText, StockCard } from "../../components";
import API from "../../api";

const Stock = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getPromotion = async () => {
            setLoading(true);
            await API.getPromotion()
                .then((res) => {
                    setData(res.data);
                    console.log(res);
                })
                .catch((error) => {
                    console.log(error);
                });
            setLoading(false);
        };
        getPromotion();
    }, []);

    const data1 = [
        {
            img: "/img/depositphotos.jpg",
            text: "Скидка до 25% на ффывфывфы фыв фыв фыв фы фывф ыфаы",
            dateStart: "14 фев 2022",
            dateEnd: "01 апр 2022",
            id: 1,
        },
        {
            img: "/img/depositphotos.jpg",
            text: "Скидка до 25% на ффывфывфы фыв фыв фыв фы фывф ыфаы",
            dateStart: "14 фев 2022",
            dateEnd: "01 апр 2022",
            id: 2,
        },
        {
            img: "/img/depositphotos.jpg",
            text: "Скидка до 25% на ффывфывфы фыв фыв фыв фы фывф ыфаы",
            dateStart: "14 фев 2022",
            dateEnd: "01 апр 2022",
            id: 3,
        },
        {
            img: "/img/depositphotos.jpg",
            text: "Скидка до 25% на ффывфывфы фыв фыв фыв фы фывф ыфаы",
            dateStart: "14 фев 2022",
            dateEnd: "01 апр 2022",
            id: 4,
        },
        {
            img: "/img/depositphotos.jpg",
            text: "Скидка до 25% на ффывфывфы фыв фыв фыв фы фывф ыфаы",
            dateStart: "14 фев 2022",
            dateEnd: "01 апр 2022",
            id: 5,
        },
        {
            img: "/img/depositphotos.jpg",
            text: "Скидка до 25% на ффывфывфы фыв фыв фыв фы фывф ыфаы",
            dateStart: "14 фев 2022",
            dateEnd: "01 апр 2022",
            id: 6,
        },
        {
            img: "/img/depositphotos.jpg",
            text: "Скидка до 25% на ффывфывфы фыв фыв фыв фы фывф ыфаы",
            dateStart: "14 фев 2022",
            dateEnd: "01 апр 2022",
            id: 7,
        },
        {
            img: "/img/depositphotos.jpg",
            text: "Скидка до 25% на ффывфывфы фыв фыв фыв фы фывф ыфаы",
            dateStart: "14 фев 2022",
            dateEnd: "01 апр 2022",
            id: 8,
        },
    ];
    return (
        <Box>
            <MyText variant="h5">Акции</MyText>
            {/* <FormGroup row sx={{ mb: 1.5, mt: 1.5 }}>
                <FormControlLabel
                    control={<Checkbox color="success" />}
                    label="Со скидкой"
                />
                <FormControlLabel
                    control={<Checkbox color="success" />}
                    label="С подарком"
                />
                <FormControlLabel
                    control={<Checkbox color="success" />}
                    label="Спецпредложение"
                />
                <FormControlLabel
                    control={<Checkbox color="success" />}
                    label="Онлайн акция"
                />
            </FormGroup> */}
            <Grid container spacing={2} sx={{ mt: 2 }}>
                {data.map((item, index) => (
                    <Grid item lg={3} xl={3} md={4} sm={6} xs={12} key={index}>
                        <StockCard {...item} />
                    </Grid>
                ))}
            </Grid>
            <Pagination count={10} sx={{ mt: 3 }} />
        </Box>
    );
};

export default Stock;
