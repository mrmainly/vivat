import React from "react";
import { CardActionArea, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

import { MyText } from "../..";
import ThemeMain from "../../../theme";
import { WorkCardProps } from "../../../interface";
import ROUTES from "../../../routes";
import "./work_card.css";

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

const WorkCard: React.FC<WorkCardProps> = ({ title, city, id, isFetching, description }) => {
    const navigate = useNavigate();

    return (
        <Root onClick={() => navigate(`${ROUTES.PHARMACY_DETAIL_WORK}/${id}`)} style={{ opacity: isFetching ? 0.5 : 1 }}>
            <MyText variant="h6" sx={{ color: ThemeMain.palette.primary.main }}>
                {title}
            </MyText>
            <MyText variant="body1" sx={{ color: "#343434", marginTop: 1 }}>
                Город: {city.name}
            </MyText>
            <Typography variant="body1" sx={{ color: "#343434", marginTop: 1 }} className="description_work">
                {description}
            </Typography>
        </Root>
    );
};

export default WorkCard;
