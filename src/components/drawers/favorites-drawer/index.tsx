import React, { useEffect, useState } from "react";

import { Drawer, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";

import { MyText, FavoritesCard } from "../..";
import { useSelector, useDispatch } from "react-redux";
import ThemeMain from "../../../theme";
import API from "../../../api";
import { drawersSlice } from "../../../reducer/drawers_slice";

const Main = styled(Box)(({ theme }) => ({
    width: 300,
    padding: 30,
    height: "100%",
    [theme.breakpoints.down("sm")]: {
        width: 260,
    },
}));

const FavoritesDrawer = () => {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const { favorite_open } = useSelector((state: any) => state.drawers_slice);
    const { handleFavoritesDrawerOpen } = drawersSlice.actions;

    useEffect(() => {
        const getFavorites = async () => {
            setLoading(true);
            await API.getFavorites()
                .then((res) => {
                    setData(res.data);
                })
                .catch((error) => console.log(error));
            setLoading(false);
        };
        getFavorites();
    }, [status]);
    return (
        <Drawer
            {...{
                anchor: "right",
                open: favorite_open,
                onClose: () => dispatch(handleFavoritesDrawerOpen(false)),
            }}
        >
            <Main
                style={{
                    opacity: loading ? 0.5 : 1,
                }}
            >
                <Box
                    sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}
                >
                    <IconButton
                        onClick={() =>
                            dispatch(handleFavoritesDrawerOpen(false))
                        }
                    >
                        <CloseIcon
                            sx={{ color: ThemeMain.palette.primary.main }}
                            fontSize="large"
                        />
                    </IconButton>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img src="/img/Favorite_light.png" />
                    <MyText
                        variant="h6"
                        sx={{ ml: 1, color: ThemeMain.palette.primary.main }}
                    >
                        Избранные товары
                    </MyText>
                </Box>
                <MyText variant="body1" sx={{ mt: 1.5 }}>
                    <span>{data.length}</span> товара
                </MyText>
                {data.length !== 0
                    ? data.map((item: any, index: number) => (
                          <FavoritesCard
                              {...item}
                              key={index}
                              status={status}
                              setStatus={setStatus}
                          />
                      ))
                    : "Нет избранных товаров"}
            </Main>
        </Drawer>
    );
};

export default FavoritesDrawer;
