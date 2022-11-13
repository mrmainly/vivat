import Skeleton from "react-loading-skeleton";

const SkeletonCatalogSlider = () => {
    return (
        <div style={{ marginTop: 50 }}>
            {window.innerWidth > 990 ? <Skeleton style={{ height: 60, width: 480, marginBottom: 10 }} /> : <Skeleton style={{ height: 35, width: 200, marginBottom: 10 }} />}
            <div style={{ overflow: "hidden", display: "flex" }}>
                <Skeleton style={{ height: 400, width: 220, marginRight: 10 }} />
                <Skeleton style={{ height: 400, width: 220, marginRight: 10 }} />
                <Skeleton style={{ height: 400, width: 220, marginRight: 10 }} />
                <Skeleton style={{ height: 400, width: 220, marginRight: 10 }} />
                <Skeleton style={{ height: 400, width: 220, marginRight: 10 }} />
                <Skeleton style={{ height: 400, width: 220, marginRight: 10 }} />
            </div>
        </div>
    );
};

export default SkeletonCatalogSlider;
