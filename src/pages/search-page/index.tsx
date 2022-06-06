import React from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

import { MainCardsConstructor } from "../../constructor";
import { MyText } from "../../components";
import ThemeMain from "../../theme";

interface CustomizedState {
    data: any;
    title: string;
}

const Root = styled(Box)(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
    },
}));

const Text = styled(MyText)(({ theme }) => ({
    marginLeft: 20,
    [theme.breakpoints.down("md")]: {
        marginLeft: 0,
    },
}));

const SearchPage = () => {
    const location = useLocation();
    const state = location.state as CustomizedState;

    const { data, title } = state;

    return (
        <Box>
            <Root>
                <MyText
                    variant="h5"
                    sx={{ color: ThemeMain.palette.primary.main }}
                >
                    Результаты поиска:
                </MyText>
                <Text variant="h5">
                    {title ? title : "Вы отправили пустой текст"}
                </Text>
            </Root>
            <Box sx={{ ml: "-7px", mt: 5 }}>
                <MainCardsConstructor data={data} />
            </Box>
        </Box>
    );
};

export default SearchPage;
