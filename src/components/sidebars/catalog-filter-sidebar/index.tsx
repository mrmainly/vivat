import React, { useState } from "react";
import {
    Box,
    Checkbox,
    FormControlLabel,
    TextField,
    Drawer,
} from "@mui/material";
import { styled } from "@mui/system";
import { useForm, Controller } from "react-hook-form";

import { MyText, BorderLine, MyButton, Form } from "../..";

const Main = styled(Form)(({ theme }) => ({
    background: "white",
    borderRadius: 12,
    width: "100%",
}));

interface CatalogFilterSideBarProps {
    availability: any;
    setAvailability: any;
    open: any;
    setOpen: any;
    onSubmit: any;
}

const CatalogFilterSideBar: React.FC<CatalogFilterSideBarProps> = ({
    availability,
    setAvailability,
    open,
    setOpen,
    onSubmit,
}) => {
    const [drawerState, setDrawerState] = useState(true);

    const { control, register, handleSubmit, getValues } = useForm({
        mode: "onBlur",
    });

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

    const Body = () => {
        return (
            <Main onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ p: 2 }}>
                    <MyText variant="h6">Фильтр</MyText>
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Наличие товара"
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Без рецепта"
                        {...register("notRecept")}
                    />
                    <FormControlLabel control={<Checkbox />} label="ЖНВЛП" />
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
                            {...register("min_price")}
                        />
                        <TextField
                            label="Конец цены"
                            size="small"
                            sx={{ mt: 2, width: "100%" }}
                            type="number"
                            {...register("max_price")}
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
                        {...register("producer")}
                    />
                </Box>
                <Box sx={{ pl: 2, pr: 2, pb: 2.5 }}>
                    <MyButton>Поиск</MyButton>
                </Box>
            </Main>
        );
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
                    <Body />
                </Drawer>
            ) : (
                <Body />
            )}
        </>
    );
};

export default CatalogFilterSideBar;
