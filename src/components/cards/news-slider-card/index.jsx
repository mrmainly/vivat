import { Box, Typography, CardActionArea } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

import "./newsSliderCard.css";
import ROUTES from "../../../routes";

const Root = styled(CardActionArea)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    width: "98%",
    height: 350,
    borderRadius: 10,
    backgroundColor: "white",

    cursor: "pointer",
    "&:hover #Title": {
        color: "#07ab44",
    },
}));

const Img = styled("img")(({ theme }) => ({
    width: "100%",
    height: 220,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    objectFit: "cover",
}));

const DateText = styled(Typography)(({ theme }) => ({
    color: "gray",
    fontSize: 14,
}));

const Title = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    marginTop: 5,
    fontSize: 16,
    transition: "all 0.5s ease",

    height: 45,
}));

const Description = styled(Typography)(({ theme }) => ({
    marginTop: 5,
    fontSize: 14,
}));

const NewsSliderCard = ({ id, date, title, image, min_description }) => {
    const navigate = useNavigate();

    return (
        <Root onClick={() => navigate(`${ROUTES.BLOG_DETAIL}/${id}`)}>
            <Img src={`http://xn----7sbbagaytx2c4ad.xn--p1ai${image}`} />
            <Box style={{ padding: 5 }}>
                <DateText>{date}</DateText>
                <Title className="description" id="Title">
                    {title}
                </Title>
                <Description className="description">{min_description ? min_description : "В данной новости нету короткого описания"}</Description>
            </Box>
        </Root>
    );
};

export default NewsSliderCard;
