import React from "react";
import { Box, CardActionArea } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

import { MyText } from "../..";
import ThemeMain from "../../../theme";
import { WorkCardProps } from "../../../interface";
import ROUTES from "../../../routes";

const Root = styled(CardActionArea)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    background: "#FFFFFF",
    padding: 15,
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: 12,
    alignItems: "start",
    width: "100%",
}));

const WorkCard: React.FC<WorkCardProps> = ({ title, city, id }) => {
    const navigate = useNavigate();

    const getCity = () => {
        switch (city) {
            case 1:
                return "Якутск";
                break;
            case 2:
                return "Москва";
            default:
                alert("Нету города");
        }
    };
    return (
        <Root onClick={() => navigate(`${ROUTES.PHARMACY_DETAIL_WORK}/${id}`)}>
            <MyText variant="h6" sx={{ color: ThemeMain.palette.primary.main }}>
                {title}
            </MyText>
            <MyText variant="body1" sx={{ color: "#343434" }}>
                {getCity()}
            </MyText>
            {/* <MyText variant="body1" sx={{ color: "#343434" }}>
                Зарплата: от<span>{price}</span>
            </MyText> */}
        </Root>
    );
};

export default WorkCard;
