import React, { useState } from "react";
import {
    Box,
    Checkbox,
    FormControlLabel,
    TextField,
    Drawer,
    IconButton,
    Radio,
    FormControl,
    RadioGroup,
    FormLabel,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

import { MyText, BorderLine, MyButton, Form } from "../../..";

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

const Body: React.FC<CatalogFilterSideBarProps> = ({
    formState,
    formDispatch,
    open,
    setOpen,
}) => {
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [producer, setProducer] = useState("");

    const navigate = useNavigate();

    const handleCheckbox = (e: any, type: string) => {
        formDispatch({
            type: "checkbox",
            field: e.target.name,
            payload: type === "radio" ? e.target.value : e.target.checked,
        });
        // console.log("tar4get", e.target.name);
        // console.log("tar4get value", e.target.value);
    };

    const handleInput = (value: any, name: string) => {
        formDispatch({
            type: "input",
            payload: { value: value, name: name },
        });
    };
    return (
        <Main>
            <Box sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <MyText variant="body1">Отпуск из аптек</MyText>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={formState.notRecept}
                            name="notRecept"
                            onChange={(e) => handleCheckbox(e, "checkbox")}
                        />
                    }
                    label="Без рецепта"
                />
            </Box>
            <BorderLine sx={{ mt: "-5px" }} />
            <Box sx={{ p: 2 }}>
                <MyText variant="body1">Наличие товара</MyText>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={formState.ordering_qty}
                            name="ordering_qty"
                            onChange={(e) => handleCheckbox(e, "checkbox")}
                        />
                    }
                    label="ул. Лермонтова, 38"
                />
            </Box>
            <BorderLine sx={{ mt: "-5px" }} />
            <Box sx={{ p: 2 }}>
                <MyText variant="body1">
                    Жизненно необходимые и важнейшие лекарственные препараты
                </MyText>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={formState.jnvls}
                            name="jnvls"
                            onChange={(e) => handleCheckbox(e, "checkbox")}
                        />
                    }
                    label="Да"
                />
            </Box>
            <BorderLine sx={{ mt: "-5px" }} />
            <Box sx={{ padding: 2 }}>
                <MyText variant="body1">Цена, ₽</MyText>
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
                        onKeyDown={(e) =>
                            e.key === "Enter"
                                ? handleInput(minPrice, "min_price")
                                : ""
                        }
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
                        onKeyDown={(e) =>
                            e.key === "Enter"
                                ? handleInput(maxPrice, "max_price")
                                : ""
                        }
                    />
                </Box>
            </Box>
            <BorderLine />
            <Box sx={{ p: 2 }}>
                <MyText variant="body1">Бренды</MyText>
                <TextField
                    label="Название бренда"
                    size="small"
                    sx={{ mt: 2, width: "100%", pb: 1 }}
                    value={producer}
                    onChange={(e) => setProducer(e.target.value)}
                    onBlur={() => {
                        handleInput(producer, "producer");
                    }}
                    onKeyDown={(e) =>
                        e.key === "Enter"
                            ? handleInput(producer, "producer")
                            : ""
                    }
                />
                {/* <MyButton
                    style={{ marginTop: 10 }}
                    variant="contained"
                    onClick={() => {
                        getProducts("reverse");
                    }}
                >
                    Сбросить фильтры
                </MyButton> */}
            </Box>
        </Main>
    );
};

export default Body;
