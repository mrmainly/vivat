import { CatalogSlider } from "../../../constructor";
import { SkeletonCatalogSlider } from "../../../components";

const CatalogSliders = ({ data, loading }) => {
    if (loading) {
        return <SkeletonCatalogSlider />;
    }
    return (
        <div>
            {data?.results?.map((item, index) => (
                <CatalogSlider data={item} key={index} />
            ))}
        </div>
    );
};

export default CatalogSliders;
