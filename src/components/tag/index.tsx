import React, { ReactNode } from "react";

import { Box } from "@mui/material";
import { styled } from "@mui/system";

import ThemeMain from "../../theme";

interface TagProps {
    children: ReactNode[] | ReactNode;
}

const TagMain = styled(Box)(({ theme }) => ({
    padding: 5,
    background:
        "linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #55CD61",
    width: "max-content",
    borderRadius: 8,
    color: ThemeMain.palette.primary.main,
}));

const Tag: React.FC<TagProps> = ({ children }) => {
    return <TagMain>{children}</TagMain>;
};

export default Tag;
