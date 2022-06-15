import React from "react";
import { Box } from "@mui/material";

import description_data from "../../../local_data/description_product_card";
import { MyText } from "../../../components";

interface DescriptionDataPorps {
    instructions?: any;
}

interface BodyPorps {
    title: string;
    children: any;
    style?: React.CSSProperties;
}

const Body: React.FC<BodyPorps> = ({ title, children, ...props }) => {
    return (
        <Box {...props}>
            <MyText variant="h6">{title}</MyText>
            <MyText variant="body1">{children}</MyText>
        </Box>
    );
};

const Description: React.FC<DescriptionDataPorps> = ({ instructions }) => {
    const descriptions = [
        {
            title: "Описания",
            content: instructions?.discribe,
        },
        {
            title: "Условия хранения",
            content: instructions?.storageCondition,
        },
        {
            title: "Дозировка",
            content: instructions?.esinstruction[0]?.dosage,
        },
        {
            title: "Индикация",
            content: instructions?.esinstruction[0]?.interaction,
        },
        {
            title: "Передозировка",
            content: instructions?.esinstruction[0]?.overDosage,
        },
        {
            title: "Взаимодействие",
            content: instructions?.esinstruction[0]?.contraInteraction,
        },
        {
            title: "Фармакологическое действие",
            content: instructions?.esinstruction[0]?.pharmAction,
        },
        {
            title: "Особые указания",
            content: instructions?.esinstruction[0]?.specialInstruction,
        },
        {
            title: "побочный эффект",
            content: instructions?.esinstruction[0]?.sideEffect,
        },
    ];
    return (
        <Box sx={{ mt: "-20px" }}>
            {instructions ? (
                descriptions.map((item: any, index: number) => {
                    if (item.content)
                        return (
                            <Body
                                title={item.title}
                                key={index}
                                style={{ marginTop: 20 }}
                            >
                                {item.content}
                            </Body>
                        );
                })
            ) : (
                <MyText variant="h6" sx={{ mt: 2 }}>
                    Для данного товара нету описания
                </MyText>
            )}
        </Box>
    );
};

export default Description;
