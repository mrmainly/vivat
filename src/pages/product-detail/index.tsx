import { useParams } from "react-router-dom";

import MainInfo from "./components/MainInfo";
import Tabs from "./components/Tab";
import { SkeletonProductDetail } from "../../components";
import {
    useGetProductDetailQuery,
    useGetProductAnalQuery,
} from "../../services/ProductsService";

const ProductDetail = () => {
    const params = useParams();

    const { data, isLoading, isFetching } = useGetProductDetailQuery({
        id: params.id,
    });
    const { data: dataAnalog, isFetching: isFetchingAnalog } =
        useGetProductAnalQuery({ id: params.id });

    if (isLoading) {
        return <SkeletonProductDetail />;
    }

    return (
        <>
            <MainInfo data={data} isFetching={isFetching} />
            <Tabs
                instructions={data.esgood[0]}
                analData={dataAnalog?.results ? dataAnalog?.results : []}
                loading={isFetchingAnalog}
            />
        </>
    );
};

export default ProductDetail;
