import React, { useEffect, useState, useContext } from "react";
import { Box, MenuItem, CircularProgress } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

import product_data from "../../local_data/product_data";
import { BasketCard, MyText, MyButton } from "../../components";
import { ProductCardsSlider } from "../../constructor";
import API from "../../api";
import { DispatchContext } from "../../store";
import ROUTES from "../../routes";

const Basket = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const count_product = 8;
  const general_price = 8196;

  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    const getOrders = async () => {
      await API.getOrdersList().then((res) => {
        console.log("data", res.data);
        setData(res.data);
      });
      setLoading(false);
    };
    getOrders();
  }, []);
  return (
    <Box>
      <MyText variant="h6">Корзина</MyText>
      {loading ? (
        <CircularProgress sx={{ mt: 2 }} />
      ) : (
        <>
          {data.length > 0 ? (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 2.3,
                  mb: 1,
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <MyText variant="body2" sx={{ color: "grey" }}>
                  {count_product} товаров на сумму {general_price} ₽
                </MyText>
                <MenuItem
                  sx={{ color: "#FE5860" }}
                  onClick={() => API.deleteOrdersAll(dispatch)}
                >
                  Очистить корзину <CloseIcon sx={{ ml: 1 }} />
                </MenuItem>
              </Box>
              {data.map((item: any, index: number) => (
                <Box key={index}>
                  {item.items.map((item: any, index: number) => (
                    <BasketCard key={index} price={item.price} />
                  ))}
                </Box>
              ))}
              <Box sx={{ display: "flex", justifyContent: "end" }}>
                <MyText variant="h6" sx={{ color: "gray", mr: 1 }}>
                  Итого:
                </MyText>
                <MyText variant="h6" sx={{ mr: 2 }}>
                  {general_price}₽
                </MyText>
                <MyButton onClick={() => navigate(ROUTES.BASKET_FORM)}>
                  Оформить заказ
                </MyButton>
              </Box>
            </>
          ) : (
            "Нету"
          )}
        </>
      )}
      <ProductCardsSlider title="Может пригодиться" data={product_data} />
      <ProductCardsSlider title="Рекомендуем" data={product_data} />
    </Box>
  );
};

export default Basket;
