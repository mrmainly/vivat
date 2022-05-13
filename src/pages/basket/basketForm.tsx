import React from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextareaAutosize,
  FormLabel,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";

import { MyText, Form, Input, MyButton, BorderLine } from "../../components";
import ThemeMain from "../../theme";

const InfoBlog = styled(Box)(({ theme }) => ({
  boxShadow: " 0px 5px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: 12,
  width: "80%",
  minHeight: 391,
  background: "white",
  padding: 24,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    width: "90%",
    padding: 10,
  },
}));

const BasketForm = () => {
  return (
    <>
      <MyText variant="h5">Оформление заказа</MyText>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
          <MyText variant="h6" sx={{ mt: 1 }}>
            Контактные данные
          </MyText>
          <Form sx={{ display: "flex", flexDirection: "column" }}>
            <Input label="Номер телефона" />
            <Input label="Имя" />
            <Input label="Фамилия" />
            <Input label="Электронная почта" />
            <FormControl fullWidth margin="normal" sx={{ bgcolor: "white" }}>
              <InputLabel id="demo-simple-select-label">
                Выберите адрес аптеки:
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Выберите адрес аптеки:"
              >
                <MenuItem>Ten</MenuItem>
                <MenuItem>Twenty</MenuItem>
                <MenuItem>Thirty</MenuItem>
              </Select>
            </FormControl>
            <TextareaAutosize
              aria-label="maximum height"
              minRows={5}
              placeholder="Комментарий"
              style={{ width: "99%", marginTop: 15 }}
            />
            <FormControl sx={{ mt: 2 }}>
              <FormLabel component="legend">Способ оплаты:</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox name="gilad" />}
                  label="Наличными при получении"
                />
                <FormControlLabel
                  control={<Checkbox name="jason" />}
                  label="Оплата картой онлайн"
                />
              </FormGroup>
            </FormControl>
            <MyText variant="body1" sx={{ mt: 2 }}>
              Подтвердите ваш заказ
            </MyText>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
            >
              <MyText variant="body2">Стоимость товара без скидки:</MyText>
              <MyText variant="body2">160 ₽</MyText>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
            >
              <MyText variant="body2">Бонусы за заказ:</MyText>
              <MyText variant="body2">160 ₽</MyText>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
                color: "#55CD61",
              }}
            >
              <MyText variant="body1">Итого</MyText>
              <MyText variant="body2">160 ₽</MyText>
            </Box>
            <MyButton style={{ marginTop: 35 }}>Подтвердить заказ</MyButton>
          </Form>
        </Grid>
        <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
          <InfoBlog>
            <Box>
              <MyText
                variant="h6"
                sx={{ color: ThemeMain.palette.primary.main, mb: 2 }}
              >
                Ваш заказ:
              </MyText>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
              >
                <MyText variant="body2">
                  1. Нурофен лонг 0,2+0,5 N12 Табл П/Плен/Оболоч
                </MyText>
                <MyText variant="body2" sx={{ fontWeight: 600 }}>
                  1000 ₽
                </MyText>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
              >
                <MyText variant="body2">
                  1. Нурофен лонг 0,2+0,5 N12 Табл П/Плен/Оболоч
                </MyText>
                <MyText variant="body2" sx={{ fontWeight: 600 }}>
                  1000 ₽
                </MyText>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
              >
                <MyText variant="body2">
                  1. Нурофен лонг 0,2+0,5 N12 Табл П/Плен/Оболоч
                </MyText>
                <MyText variant="body2" sx={{ fontWeight: 600 }}>
                  1000 ₽
                </MyText>
              </Box>
            </Box>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <MyText
                  variant="body1"
                  sx={{ color: ThemeMain.palette.primary.main }}
                >
                  Сумма к оплате:
                </MyText>
                <MyText
                  variant="body1"
                  sx={{ color: ThemeMain.palette.primary.main }}
                >
                  2900 ₽
                </MyText>
              </Box>
              <BorderLine />
            </Box>
          </InfoBlog>
        </Grid>
      </Grid>
    </>
  );
};

export default BasketForm;
