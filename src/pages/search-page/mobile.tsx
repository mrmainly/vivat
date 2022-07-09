import React, { useState } from "react";
import { Box, Autocomplete, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SearchIcon from "@mui/icons-material/Search";

import { MyText } from "../../components";
import Body from "./components/Body";
import API from "../../api";
import ROUTES from "../../routes";
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

const CustomTextField = styled(TextField)(({ theme }) => ({
    background: "white",
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderTopRightRadius: 0,
            borderEndEndRadius: 0,
        },
    },
}));

const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: ThemeMain.palette.primary.main,
    color: "white",
    borderTopLeftRadius: 0,
    borderEndStartRadius: 0,
    "&:hover": {
        color: ThemeMain.palette.primary.main,
        borderColor: ThemeMain.palette.primary.main,
    },
}));

const SearchPageMobile = () => {
    const [searchValue, setSearchValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [AutoCompliteData, setAutoCompliteData] = useState([]);
    const [data, setData] = useState([]);

    const onSubmit = async () => {
        setLoading(true);
        await API.productsSearch(searchValue)
            .then((res) => {
                setData(res.data);
                console.log(res);
            })
            .catch((error) => {
                toast.error("error");
            });
        setLoading(false);
    };

    const handleAutoComplite = (newValue: any) => {
        setSearchValue(newValue);
        API.getAutoComplite(newValue)
            .then((res) => {
                const newData = res.data.map((item: any) => {
                    return item.name;
                });
                setAutoCompliteData(newData);
            })
            .catch((error) => console.log(error));
    };

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Autocomplete
                    id="free-solo-2-demo"
                    freeSolo
                    size="small"
                    sx={{ width: "100%" }}
                    options={AutoCompliteData}
                    onInputChange={(event, newInputValue) =>
                        handleAutoComplite(newInputValue)
                    }
                    renderInput={(params) => (
                        <CustomTextField
                            variant="outlined"
                            label={<FormattedMessage id="search_medicine" />}
                            {...params}
                            fullWidth
                            value={searchValue}
                            // onChange={(e) => setSearchValue(e.target.value)}
                        />
                    )}
                />
                <CustomButton size="small" onClick={() => onSubmit()}>
                    <SearchIcon />
                </CustomButton>
            </Box>
            <Body title={searchValue} data={data} loading={loading} />
        </Box>
    );
};

export default SearchPageMobile;
