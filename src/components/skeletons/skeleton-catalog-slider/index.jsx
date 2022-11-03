import Skeleton from "react-loading-skeleton";

const SkeletonCatalogSlider = () => {
    return (
        <div style={{ marginTop: 50 }}>
            <Skeleton style={{ height: 30, width: 150, marginBottom: 20 }} />
            <div style={{ overflow: "hidden", display: "flex" }}>
                <Skeleton style={{ height: 400, width: 210, marginRight: 20 }} />
                <Skeleton style={{ height: 400, width: 210, marginRight: 20 }} />
                <Skeleton style={{ height: 400, width: 210, marginRight: 20 }} />
                <Skeleton style={{ height: 400, width: 210, marginRight: 20 }} />
                <Skeleton style={{ height: 400, width: 210, marginRight: 20 }} />
                <Skeleton style={{ height: 400, width: 210, marginRight: 20 }} />
            </div>
        </div>
    );
};

export default SkeletonCatalogSlider;
