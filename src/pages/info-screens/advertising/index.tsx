import React from "react";

import InfoBlog from "../components/InfoBlog";
import { MyText } from "../../../components";
import theme from "../../../theme";

import { Box } from "@mui/material";

const Advertising = () => {
    return (
        <div>
            <InfoBlog title="Реклама на сайте">
                <Box>
                    <MyText variant="body1" sx={{ fontWeight: 600 }}>
                        Что есть у нас?
                    </MyText>
                    <MyText variant="body2" sx={{ mt: 1.2 }}>
                        Виват-аптека.рф - это развитая рекламная площадка с большим выбором инструментов продвижения - вы не останетесь незамеченными! Большая, постоянная растущая аудитория сайта.
                    </MyText>
                    <MyText variant="body2" sx={{ mt: 0.8 }}>
                        Лояльность и доверие наших покупателей к информации на сайте.
                    </MyText>
                </Box>

                <Box sx={{ mt: 2.4 }}>
                    <MyText variant="body1" sx={{ fontWeight: 600 }}>
                        Что нужно вам?
                    </MyText>
                    <MyText variant="body2" sx={{ mt: 1.2 }}>
                        Вы ставите задачу - мы находим решение!
                    </MyText>
                </Box>

                <Box sx={{ mt: 2.4 }}>
                    <MyText variant="body1" sx={{ fontWeight: 600 }}>
                        Реклама на сайте
                    </MyText>
                    <MyText variant="body2" sx={{ mt: 1.2 }}>
                        По вопросам размещения рекламы и акций на сайте и в аптеках:
                    </MyText>
                    <MyText variant="body2" sx={{ mt: 0.8 }}>
                        Руководитель отдела рекламы: Иванов Иван Иванович
                    </MyText>
                    <Box sx={{ display: "flex", mt: 0.8 }}>
                        <MyText variant="body2" sx={{ width: 200, color: "#828282" }}>
                            Номер телефона:
                        </MyText>
                        <MyText variant="body2" sx={{ color: theme.palette.primary.main}}>
                            +7 (914) 280-13-13
                        </MyText>
                    </Box>
                    <Box sx={{ display: "flex", mt: 0.8 }}>
                        <MyText variant="body2" sx={{ width: 200, color: "#828282" }}>
                            Электронная почта:
                        </MyText>
                        <MyText variant="body2" sx={{ color: theme.palette.primary.main, textDecoration: "underline" }}>
                            finvest2011@mail.ru
                        </MyText>
                    </Box>
                </Box>

                <Box sx={{ mt: 2.4 }}>
                    <MyText variant="body1" sx={{ fontWeight: 600 }}>
                        Контент на сайте
                    </MyText>
                    <MyText variant="body2" sx={{ mt: 1.2 }}>
                        По вопросам размещения информации и фотографий товаров:
                    </MyText>
                    <MyText variant="body2" sx={{ mt: 0.8 }}>
                        Контент-менеджер: Иванов Иван Иванович
                    </MyText>
                    <Box sx={{ display: "flex", mt: 0.8 }}>
                        <MyText variant="body2" sx={{ width: 200, color: "#828282" }}>
                            Номер телефона:
                        </MyText>
                        <MyText variant="body2" sx={{ color: theme.palette.primary.main}}>
                            +7 (914) 280-13-13
                        </MyText>
                    </Box>
                    <Box sx={{ display: "flex", mt: 0.8 }}>
                        <MyText variant="body2" sx={{ width: 200, color: "#828282" }}>
                            Электронная почта:
                        </MyText>
                        <MyText variant="body2" sx={{ color: theme.palette.primary.main, textDecoration: "underline" }}>
                            finvest2011@mail.ru
                        </MyText>
                    </Box>
                </Box>
            </InfoBlog>
        </div>
    );
};

export default Advertising;
