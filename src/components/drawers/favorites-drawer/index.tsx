import { useEffect, useState } from "react";

import { Drawer, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";
import cookie from "js-cookie";

import { MyText, FavoritesCard } from "../..";
import { useSelector, useDispatch } from "react-redux";
import ThemeMain from "../../../theme";
import { drawersSlice } from "../../../reducer/drawers_slice";
import { useGetFavoritesQuery } from "../../../services/FavoritesService";

const Main = styled(Box)(({ theme }) => ({
    width: 300,
    padding: 30,
    height: "100%",
    [theme.breakpoints.down("sm")]: {
        width: 260,
    },
}));

const FavoritesDrawer = () => {
    const [skipFavorite, setSkipFavorite] = useState(true);

    const dispatch = useDispatch();
    const jwttoken = cookie.get("jwttoken");

    const { favorite_open } = useSelector((state: any) => state.drawers_slice);
    const { handleFavoritesDrawerOpen } = drawersSlice.actions;
    const { data, isFetching } = useGetFavoritesQuery("", {
        skip: skipFavorite,
    });

    useEffect(() => {
        if (jwttoken) {
            setSkipFavorite(false);
        } else {
            setSkipFavorite(true);
        }
    }, [jwttoken]);

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
                    opacity: isFetching ? 0.5 : 1,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        mb: 2,
                    }}
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
                    <img src="/img/Favorite_light.png" alt="" />
                    <MyText
                        variant="h6"
                        sx={{
                            ml: 1,
                            color: ThemeMain.palette.primary.main,
                        }}
                    >
                        Избранные товары
                    </MyText>
                </Box>
                {data?.length ? (
                    <>
                        <MyText variant="body1" sx={{ mt: 1.5 }}>
                            <span>{data.length}</span> товара
                        </MyText>
                        {data.map((item: any, index: number) => (
                            <FavoritesCard {...item} key={index} />
                        ))}
                    </>
                ) : (
                    <Box sx={{ mt: 2 }}>Нет избранных товаров</Box>
                )}
            </Main>
        </Drawer>
    );
};

export default FavoritesDrawer;
