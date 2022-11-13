import { NewsSlider } from "../../../constructor";
import ROUTES from "../../../routes";
import { SkeletonNewsSlider } from "../../../components";

import { Box, Typography, MenuItem } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const TitleBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
        marginTop: 20,
    },
}));

const Title = styled(Typography)(({ theme }) => ({
    fontWeight: "600",
    fontSize: 23,
}));

const WrapperNewsSlider = ({ data, loading }) => {
    const navigate = useNavigate();

    if (loading) {
        return <SkeletonNewsSlider />;
    }
    return (
        <div>
            <TitleBox>
                <Title>Новости и статьи</Title>
                <MenuItem onClick={() => navigate(ROUTES.BLOG_THEME)}>Все статьи</MenuItem>
            </TitleBox>
            <NewsSlider data={data?.results} />
        </div>
    );
};

export default WrapperNewsSlider;
