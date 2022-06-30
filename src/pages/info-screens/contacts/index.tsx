import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

import { MyText } from "../../../components";
import ThemeMain from "../../../theme";
import InfoBlog from "../components/InfoBlog";

const Main = styled(Box)(({ theme }) => ({
  width: 450,
}));

const Contacts = () => {
  const data = [
    {
      title: "Функциональные группы",
      columns: [
        {
          label: "Аренда:",
          value: "as1233d@gmail.com",
        },
        {
          label: "Франчайзинг:",
          value: "as1233d@gmail.com",
        },
        {
          label: "Работа в компании:",
          value: "as1233d@gmail.com",
        },
        {
          label: "Прочие вопросы:",
          value: "as1233d@gmail.com",
        },
      ],
    },
    {
      title: "Взаимодействие со СМИ",
      columns: [
        {
          label: "Телефон:",
          value: "+7 (914) 123-12-12",
        },
        {
          label: "E-mail:",
          value: "as1233d@gmail.com",
        },
        {
          label: "Работа в компании:",
          value: "as1233d@gmail.com",
        },
        {
          label: "Прочие вопросы:",
          value: "as1233d@gmail.com",
        },
      ],
    },
  ];
  return (
    <InfoBlog title="Контакты">
      {/* <MyText variant="h5">Контакты</MyText>
      <Box sx={{ mt: 1.6 }}>
        <MyText variant="h6">Время работы</MyText>
      </Box>
      <MyText variant="h6">Телефон</MyText>
      <MyText variant="body1" sx={{ mt: 1.6 }}>
        +7 (914) 123-12-12
      </MyText>
      {data.map((item, index) => (
        <Box key={index} sx={{ mt: 4 }}>
          <MyText variant="h6">{item.title}</MyText>
          {item.columns.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                mt: 1.6,
              }}
            >
              <MyText variant="body2">{item.label}</MyText>
              <MyText
                variant="body2"
                sx={{ color: ThemeMain.palette.primary.main }}
              >
                {item.value}
              </MyText>
            </Box>
          ))}
        </Box>
      ))} */}
      <Box>
        <MyText variant="body1" sx={{ fontWeight: 600 }}>
          Связаться с нами:
        </MyText>
        <MyText variant="body2" sx={{ mt: 0.8 }}>
          По вопросам связанным с оформлением, исполнение заказа вы можете обратиться:
        </MyText>
        <MyText variant="body2" sx={{ mt: 0.8 }}>
          <span style={{ color: ThemeMain.palette.primary.main, whiteSpace: "pre-wrap" }}>+7 (914) 280-13-13 </span> в Якутске;
        </MyText>
        <MyText variant="body2" sx={{ mt: 0.8 }}>
          График работы клиентского сервиса: 
          <span style={{ color: ThemeMain.palette.primary.main, whiteSpace: "pre-wrap" }}> с 8:00 до 24:00</span>
        </MyText>
        <MyText variant="body2" sx={{ mt: 0.8 }}>
          Круглосуточный прием обращений принимается по адресу: 
          <span style={{ color: ThemeMain.palette.primary.main, whiteSpace: "pre-wrap" }}> finvest2011@mail.ru</span> 
        </MyText>
      </Box>
    </InfoBlog>
  );
};

export default Contacts;
