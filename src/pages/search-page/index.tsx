import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

import Body from "./components/Body";

interface CustomizedState {
    data: any;
    title: string;
}

const SearchPage = () => {
    const location = useLocation();
    const state = location.state as CustomizedState;

    const { data, title } = state;

    return (
        <Box>
            <Body title={title} data={data} />
        </Box>
    );
};

export default SearchPage;
