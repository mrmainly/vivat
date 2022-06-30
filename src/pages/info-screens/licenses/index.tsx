import React from "react";

import InfoBlog from "../components/InfoBlog";
import { MyText } from "../../../components";

import { Box } from "@mui/material";

const Licenses = () => {
    const data = [
        "Заглушка",
        "Заглушка",
        "Заглушка",
        "Заглушка",
    ]
    return (
        <div>
        <InfoBlog title="Лицензии">
            <MyText variant="body1" sx={{ fontWeight: 600 }}>
                Заглушка
            </MyText>
            <Box>
                {data.map((item, index) => (
                    <MyText variant="body2" sx={{ mt: 0.8 }} key={index}>
                        {item}
                    </MyText>
                ))}    
            </Box>
        </InfoBlog>
        </div>
    );
};

export default Licenses;
