import React, { useState } from "react";
import {
    Box,
    Checkbox,
    FormControlLabel,
    TextField,
    Drawer,
    IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import { useForm, Controller } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";

import { MyText, BorderLine, MyButton, Form } from "../..";
import ThemeMain from "../../../theme";

const Main = styled(Box)(({ theme }) => ({
    background: "white",
    borderRadius: 12,
    width: "100%",
    [theme.breakpoints.down("md")]: {
        width: 300,
    },
}));

interface CatalogFilterSideBarProps {
    open: any;
    setOpen: any;
    formState: any;
    formDispatch: any;
}

const CatalogFilterSideBar: React.FC<CatalogFilterSideBarProps> = ({
    formState,
    formDispatch,
    open,
    setOpen,
}) => {
    const [drawerState, setDrawerState] = useState(true);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [producer, setProducer] = useState("");

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

    const handleCheckbox = (e: any) => {
        formDispatch({
            type: "checkbox",
            field: e.target.name,
            payload: e.target.checked,
        });
    };

    const handleInput = (value: any, name: string) => {
        formDispatch({
            type: "input",
            payload: { value: value, name: name },
        });
    };

    return (
        <>
            {drawerState ? (
                <Drawer
                    {...{
                        anchor: "left",
                        open: open,
                        onClose: () => setOpen(false),
                    }}
                >
                    <Main>
                        <Box
                            sx={{
                                p: 2,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <MyText variant="h6">Фильтр</MyText>
                                <IconButton onClick={() => setOpen(false)}>
                                    <CloseIcon
                                        sx={{
                                            color: ThemeMain.palette.primary
                                                .main,
                                        }}
                                        fontSize="large"
                                    />
                                </IconButton>
                            </Box>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formState.ordering_qty}
                                        name="ordering_qty"
                                        onChange={(e) => handleCheckbox(e)}
                                    />
                                }
                                label="Наличие товара"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formState.notRecept}
                                        name="notRecept"
                                        onChange={(e) => handleCheckbox(e)}
                                    />
                                }
                                label="Без рецепта"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formState.jnvls}
                                        name="jnvls"
                                        onChange={(e) => handleCheckbox(e)}
                                    />
                                }
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
                                    value={minPrice}
                                    onChange={(e) =>
                                        setMinPrice(e.target.value)
                                    }
                                    onBlur={() => {
                                        handleInput(minPrice, "min_price");
                                    }}
                                />
                                <TextField
                                    label="Конец цены"
                                    size="small"
                                    sx={{ mt: 2, width: "100%" }}
                                    type="number"
                                    value={maxPrice}
                                    onChange={(e) =>
                                        setMaxPrice(e.target.value)
                                    }
                                    onBlur={() => {
                                        handleInput(maxPrice, "max_price");
                                    }}
                                />
                            </Box>
                        </Box>
                        <BorderLine />
                        <Box sx={{ p: 2 }}>
                            <MyText variant="h6">Бренды</MyText>
                            <TextField
                                label="Название бренда"
                                size="small"
                                sx={{ mt: 2, width: "100%", pb: 1 }}
                                value={producer}
                                onChange={(e) => setProducer(e.target.value)}
                                onBlur={() => {
                                    handleInput(producer, "producer");
                                }}
                            />
                        </Box>
                    </Main>
                </Drawer>
            ) : (
                <Main>
                    <Box sx={{ p: 2 }}>
                        <MyText variant="h6">Фильтр</MyText>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formState.ordering_qty}
                                    name="ordering_qty"
                                    onChange={(e) => handleCheckbox(e)}
                                />
                            }
                            label="Наличие товара"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formState.notRecept}
                                    name="notRecept"
                                    onChange={(e) => handleCheckbox(e)}
                                />
                            }
                            label="Без рецепта"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formState.jnvls}
                                    name="jnvls"
                                    onChange={(e) => handleCheckbox(e)}
                                />
                            }
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
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                                onBlur={() => {
                                    handleInput(minPrice, "min_price");
                                }}
                            />
                            <TextField
                                label="Конец цены"
                                size="small"
                                sx={{ mt: 2, width: "100%" }}
                                type="number"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                                onBlur={() => {
                                    handleInput(maxPrice, "max_price");
                                }}
                            />
                        </Box>
                    </Box>
                    <BorderLine />
                    <Box sx={{ p: 2 }}>
                        <MyText variant="h6">Бренды</MyText>
                        <TextField
                            label="Название бренда"
                            size="small"
                            sx={{ mt: 2, width: "100%", pb: 1 }}
                            value={producer}
                            onChange={(e) => setProducer(e.target.value)}
                            onBlur={() => {
                                handleInput(producer, "producer");
                            }}
                        />
                    </Box>
                </Main>
            )}
        </>
    );
};

export default CatalogFilterSideBar;
