import React from "react";
import { Box } from "@mui/material";

import description_data from "../../../local_data/description_product_card";
import { MyText } from "../../../components";

interface DescriptionDataPorps {
    instructions?: any;
}

const Description: React.FC<DescriptionDataPorps> = ({ instructions }) => {
    return (
        <Box>
            <MyText variant="h6">
                {instructions?.discribe
                    ? instructions?.discribe
                    : "У этого товара нету инструкций"}
            </MyText>
        </Box>
    );
};

export default Description;
