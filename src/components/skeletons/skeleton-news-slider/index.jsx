import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Skeleton from "react-loading-skeleton";

const SkeletonNewsSlider = () => {
    const [list, setList] = useState(4);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 1100 && window.innerWidth >= 800) {
                setList(3);
            } else if (window.innerWidth < 800 && window.innerWidth >= 500) {
                setList(2);
            } else if (window.innerWidth < 500) {
                setList(1);
            } else {
                setList(4);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
    }, []);

    return (
        <div style={{ marginTop: 50 }}>
            <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Skeleton style={{ height: 40, width: 190, marginBottom: 10 }} />
                <Skeleton style={{ height: 40, width: 130, marginBottom: 10, marginRight: 15 }} />
            </Box>
            <div style={{ display: "flex", width: "100%" }}>
                {Array(list)
                    .fill(0)
                    .map((item, index) => (
                        <Box key={index} style={{ width: list === 3 ? "33%" : list === 2 ? "50%" : list === 1 ? "100%" : "25%", height: 350, marginRight: 15 }}>
                            <Skeleton style={{ width: "100%", height: "100%" }} />
                        </Box>
                    ))}
            </div>
        </div>
    );
};

export default SkeletonNewsSlider;
