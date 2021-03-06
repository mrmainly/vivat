import React from "react";
import { FormattedMessage } from "react-intl";

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
    <InfoBlog title={<FormattedMessage id="contacts"/>}>
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
          <FormattedMessage id="connect_with_us"/>
        </MyText>
        <MyText variant="body2" sx={{ mt: 0.8 }}>
          <FormattedMessage id="asks_us"/>
        </MyText>
        <MyText variant="body2" sx={{ mt: 0.8 }}>
          <span style={{ color: ThemeMain.palette.primary.main, whiteSpace: "pre-wrap" }}>+7 (914) 280-13-13 </span> <FormattedMessage id="in_yakutsk"/>;
        </MyText>
        <MyText variant="body2" sx={{ mt: 0.8 }}>
          <FormattedMessage id="schedule"/>
          <span style={{ color: ThemeMain.palette.primary.main, whiteSpace: "pre-wrap" }}> с 8:00 до 24:00</span>
        </MyText>
        <MyText variant="body2" sx={{ mt: 0.8 }}>
          <FormattedMessage id="receiving_application"/>
          <span style={{ color: ThemeMain.palette.primary.main, whiteSpace: "pre-wrap" }}> farmvivat@mail.ru</span> 
        </MyText>
      </Box>
    </InfoBlog>
  );
};

export default Contacts;
