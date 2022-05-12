import React from "react";

import { Box } from "@mui/material";
import { styled } from "@mui/system";

import { MyText } from "../../../components";

interface InfoBlogProps {
  title?: string;
  children?: any;
}

const Main = styled(Box)(({ theme }) => ({
  padding: 20,
  background: "white",
  minHeight: 600,
  borderRadius: 12,
  marginTop: 20,
}));

const InfoBlog: React.FC<InfoBlogProps> = ({ title, children }) => {
  return (
    <Box>
      <MyText variant="h5">{title}</MyText>
      <Main>{children}</Main>
    </Box>
  );
};

export default InfoBlog;
