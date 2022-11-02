import { CatalogSlider } from "../../../constructor";

const CatalogSliders = ({ data, loading }) => {
    return (
        <div>
            {data?.results?.map((item, index) => (
                <CatalogSlider data={item} key={index} />
            ))}
        </div>
    );
};

export default CatalogSliders;
