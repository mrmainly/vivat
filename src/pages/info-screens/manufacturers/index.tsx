import React from "react";

import InfoBlog from "../components/InfoBlog";
import { MyText } from "../../../components";
import theme from "../../../theme";

import { Box } from "@mui/material";

const Manufacturers = () => {
    return (
        <div>
            <InfoBlog title="Производителям">
                <Box>
                    <MyText variant="body1" sx={{ fontWeight: 600 }}>
                        Для производителей лекарственных средств и БАД
                    </MyText>
                    <MyText variant="body2" sx={{ mt: 1.2 }}>
                        Отдел маркетинга:
                    </MyText>
                    <MyText variant="body2" sx={{ mt: 0.8 }}>
                        Иванов Иван Иванович
                    </MyText>
                    <Box sx={{ display: "flex", mt: 0.8 }}>
                        <MyText variant="body2" sx={{ width: 200, color: "#828282" }}>
                            Номер телефона:
                        </MyText>
                        <MyText variant="body2" sx={{ color: theme.palette.primary.main}}>
                            +7 (914) 280-13-13
                        </MyText>
                    </Box>
                    <MyText variant="body2" sx={{ mt: 1.2 }}>
                        Отдел собственных продуктов:
                    </MyText>
                    <Box sx={{ display: "flex", mt: 0.8 }}>
                        <MyText variant="body2" sx={{ width: 200, color: "#828282" }}>
                            Электронная почта:
                        </MyText>
                        <MyText variant="body2" sx={{ color: theme.palette.primary.main, textDecoration: "underline" }}>
                            farmvivat@mail.ru
                        </MyText>
                    </Box>
                </Box>

                <Box sx={{ mt: 2.4 }}>
                    <MyText variant="body1" sx={{ fontWeight: 600 }}>
                        По вопросам размещения рекламы
                    </MyText>
                    <MyText variant="body2" sx={{ mt: 1.2 }}>
                        Руководитель отдела реклам:
                    </MyText>
                    <MyText variant="body2" sx={{ mt: 0.8 }}>
                        Иванов Иван Иванович
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
                            farmvivat@mail.ru
                        </MyText>
                    </Box>
                </Box>

                <Box sx={{ mt: 2.4 }}>
                    <MyText variant="body1" sx={{ fontWeight: 600 }}>
                        Для производителей
                    </MyText>
                    <MyText variant="body2" sx={{ mt: 1.2 }}>
                        По вопросу размещения информации и фотографии товаров на сайте просим отправлять запрос
                    </MyText>
                    <Box sx={{ display: "flex", mt: 0.8 }}>
                        <MyText variant="body2" sx={{ width: 200, color: "#828282" }}>
                            Электронная почта:
                        </MyText>
                        <MyText variant="body2" sx={{ color: theme.palette.primary.main, textDecoration: "underline" }}>
                            farmvivat@mail.ru
                        </MyText>
                    </Box>
                </Box>

                <MyText variant="body2" sx={{ mt: 0.8 }}>
                    Технические требования для фото и описаний товаров доступны <a href="" style={{ color: theme.palette.primary.main, textDecoration: "none" }}>по ссылке</a>
                </MyText>
            </InfoBlog>
        </div>
    );
};

export default Manufacturers;
