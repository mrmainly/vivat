import React, { useState } from "react";
import {
    Box,
    Checkbox,
    FormControlLabel,
    TextField,
    Drawer,
} from "@mui/material";
import { styled } from "@mui/system";
import { Sling as Hamburger } from "hamburger-react";

import { MyText, BorderLine, MyButton } from "../..";

const Main = styled(Box)(({ theme }) => ({
    background: "white",
    borderRadius: 12,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
}));

const ButtonShow = styled(Box)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    width: "max-content",
    [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "row",
        float: "right",
    },
}));

interface CatalogFilterSideBarProps {
    availability: any;
    setAvailability: any;
}

const CatalogFilterSideBar: React.FC<CatalogFilterSideBarProps> = ({
    availability,
    setAvailability,
}) => {
    const [drawerState, setDrawerState] = useState(true);
    const [drawerOpen, setDrawerOpen] = useState(false);

    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 900) {
                setDrawerState(true);
            }
            if (window.innerWidth > 900) {
                setDrawerState(false);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <ButtonShow
                onClick={() => {
                    setDrawerOpen(true);
                }}
            >
                <Hamburger toggled={drawerOpen} />
            </ButtonShow>
            {drawerState ? (
                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: () => setDrawerOpen(false),
                    }}
                >
                    <Main>
                        <Box sx={{ p: 2 }}>
                            <MyText variant="h6">Фильтр</MyText>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Наличие товара"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Без рецепта"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="ЖНВЛП"
                            />
                        </Box>
                        <BorderLine sx={{ mt: "-5px" }} />
                        <Box sx={{ padding: 2 }}>
                            <MyText variant="h6">Цена, ₽</MyText>
                            <Box>
                                <TextField
                                    label="Начало цены"
                                    size="small"
                                    sx={{ mt: 2, width: "100%" }}
                                    type="number"
                                />
                                <TextField
                                    label="Конец цены"
                                    size="small"
                                    sx={{ mt: 2, width: "100%" }}
                                    type="number"
                                />
                            </Box>
                        </Box>
                        <BorderLine />
                        <Box sx={{ p: 2 }}>
                            <MyText variant="h6">Бренды</MyText>
                            <TextField
                                label="Название бренда"
                                size="small"
                                sx={{ mt: 2, width: "100%" }}
                                type="number"
                            />
                        </Box>
                        <Box sx={{ pl: 2, pr: 2 }}>
                            <MyButton>Поиск</MyButton>
                        </Box>
                    </Main>
                </Drawer>
            ) : (
                <Main>
                    <Box
                        sx={{ p: 2, display: "flex", flexDirection: "column" }}
                    >
                        <MyText variant="h6">Фильтр</MyText>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Наличие товара"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Без рецепта"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="ЖНВЛП"
                        />
                    </Box>
                    <BorderLine sx={{ mt: "-5px" }} />
                    <Box sx={{ padding: 2 }}>
                        <MyText variant="h6">Цена, ₽</MyText>
                        <Box>
                            <TextField
                                label="Начало цены"
                                size="small"
                                sx={{ mt: 2, width: "100%" }}
                                type="number"
                            />
                            <TextField
                                label="Конец цены"
                                size="small"
                                sx={{ mt: 2, width: "100%" }}
                                type="number"
                            />
                        </Box>
                    </Box>
                    <BorderLine />
                    <Box sx={{ p: 2 }}>
                        <MyText variant="h6">Бренды</MyText>
                        <TextField
                            label="Название бренда"
                            size="small"
                            sx={{ mt: 2, width: "100%" }}
                            type="number"
                        />
                    </Box>
                    <Box sx={{ pl: 2, pr: 2, pb: 3 }}>
                        <MyButton>Поиск</MyButton>
                    </Box>
                </Main>
            )}
        </>
    );
};

export default CatalogFilterSideBar;
