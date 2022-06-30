import React from "react";

import InfoBlog from "../components/InfoBlog";
import { MyText } from "../../../components";

import { Box } from "@mui/material";

import theme from "../../../theme";

const StaffDepartment = () => {
  return (
    <div>
      <InfoBlog title="Отдел персонала">
        <Box>
            <MyText variant="body1" sx={{ fontWeight: 600 }}>
                Контакты отдела подбора персонала
            </MyText>
            <MyText variant="body2" sx={{ mt: 1.2 }}>
                Уважаемые соискатели, обращаем внимание, что собеседования и прием на работу проводятся в обычном режиме.
            </MyText>
            <MyText variant="body2" sx={{ mt: 1.2 }}>
                По вопросам трудоустройства обращайтесь к нашему менеджеру:
            </MyText>
        </Box>

        <Box sx={{ mt: 2.4 }}>
            <MyText variant="body1" sx={{ fontWeight: 600 }}>
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
                    finvest2011@mail.ru
                </MyText>
            </Box>
        </Box>
        <Box sx={{ mt: 2.4 }}>
            <MyText variant="body1" sx={{ fontWeight: 600 }}>
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
                    finvest2011@mail.ru
                </MyText>
            </Box>
        </Box>

        <Box sx={{ mt: 2.4 }}>
            <MyText variant="body1" sx={{ fontWeight: 600 }}>
                Адрес отдела подбора персонала
            </MyText>
            <MyText variant="body2" sx={{ mt: 1.2 }}>
                677005, г. Якутск, ул. Лермонтова, 38, левое крыльцо , 1-й этаж
            </MyText>
        </Box>
      </InfoBlog>
    </div>
  );
};

export default StaffDepartment;
