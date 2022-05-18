import React from "react";

import { ProductCardsSlider } from "../../constructor";
import product_data from "../../local_data/product_data";

const Home = () => {
    return (
        <div>
            <ProductCardsSlider title="Популярные товары" data={product_data} />
            <ProductCardsSlider title="Товары дня" data={product_data} />
        </div>
    );
};

export default Home;
