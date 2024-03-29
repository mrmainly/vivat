import { useState } from "react";
import { Box, Autocomplete, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";
import { FormattedMessage } from "react-intl";
import { toast } from "react-toastify";
import SearchIcon from "@mui/icons-material/Search";
import API from "../../api";

import Body from "./components/Body";
import ThemeMain from "../../theme";

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
            })
            .catch((error) => {
                toast.error("error");
            });
        setLoading(false);
    };

    const handleAutoComplite = (newValue: any) => {
        let newStr = newValue[0].toUpperCase() + newValue.slice(1);
        setSearchValue(newStr);
        API.getAutoComplite(newStr)
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
