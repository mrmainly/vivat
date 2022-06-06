import React from "react";
import Skeleton from "react-loading-skeleton";

const BasicInformationSkeleton = () => {
    return (
        <div style={{ width: "100%" }}>
            <Skeleton style={{ height: 59 }} />
            <Skeleton style={{ height: 60, marginTop: 18 }} />
            <Skeleton style={{ height: 60, marginTop: 18 }} />
            <Skeleton style={{ height: 60, marginTop: 18 }} />
            <Skeleton style={{ height: 60, marginTop: 18 }} />
            <Skeleton style={{ height: 60, marginTop: 18 }} />
            <Skeleton style={{ height: 42, marginTop: 20 }} />
        </div>
    );
};

export default BasicInformationSkeleton;
