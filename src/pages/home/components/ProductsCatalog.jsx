import { Pagination } from "@mui/material";

import { MyText } from "../../../components";
import { MainCardsConstructor } from "../../../constructor";

const ProductsCatalog = ({ products, isProductsFetching, setCurrentPage, currentPage }) => {
    let countNumber = Math.ceil(products?.count / 20);

    return (
        <div>
            <MyText variant="h5" sx={{ mb: 1, mt: 1 }}>
                Лек. средства
            </MyText>
            {products?.results.length && (
                <Pagination
                    count={countNumber}
                    page={currentPage}
                    style={{ marginBottom: 20, marginTop: 20 }}
                    onChange={(event, value) => {
                        setCurrentPage(value);
                    }}
                />
            )}
            <MainCardsConstructor data={products?.results} loading={isProductsFetching} />
            {products?.results.length && (
                <Pagination
                    count={countNumber}
                    page={currentPage}
                    style={{ marginTop: 20 }}
                    onChange={(event, value) => {
                        setCurrentPage(value);
                    }}
                />
            )}
        </div>
    );
};

export default ProductsCatalog;
