import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
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
    const [newData, setNewData] = useState({});
    const [loading, setLoading] = useState(false);

    const location = useLocation();
    const state = location.state as CustomizedState;

    const { data, title } = state;

    console.log("data", data.length);

    // useEffect(() => {
    //     const getSearchData = async () => {
    //         setLoading(true);
    //         await setNewData(data);
    //         setLoading(false);
    //     };
    //     getSearchData();
    // }, [state]);

    return (
        <Box>
            {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <>
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
                    <MyText variant="h6" sx={{ mt: 2 }}>
                        Количество товара: {data.results.length}
                    </MyText>
                    <Box sx={{ ml: "-7px", mt: 3 }}>
                        <MainCardsConstructor data={data.results} />
                    </Box>
                </>
            )}
        </Box>
    );
};

export default SearchPage;
