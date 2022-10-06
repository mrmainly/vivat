import React from "react";

import { Box, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";

import { MyText } from "../../../components";
import { MainCardsConstructor } from "../../../constructor";
import ThemeMain from "../../../theme";

const Root = styled(Box)(({ theme }) => ({
    display: "flex",
    marginTop: 10,
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

interface SearchPageBody {
    loading?: boolean;
    data: any;
    title: string;
}

const SearchPageBody: React.FC<SearchPageBody> = ({ loading, data, title }) => {
    if (loading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <div>
            {data.results && (
                <>
                    <Root>
                        <MyText
                            variant="h5"
                            sx={{ color: ThemeMain.palette.primary.main }}
                        >
                            Результаты поиска:
                        </MyText>
                        <Text variant="h5" sm={18}>
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
        </div>
    );
};

export default SearchPageBody;
