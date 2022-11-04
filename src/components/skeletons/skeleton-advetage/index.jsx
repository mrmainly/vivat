import Skeleton from "react-loading-skeleton";
import { Grid } from "@mui/material";

const SkeletonCatalogSlider = () => {
    return (
        <div>
            <Skeleton style={{ height: 30, width: 150, marginBottom: 20 }} />
            <Grid container spacing={2}>
                <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
                    <Skeleton
                        style={{
                            width: "100%",
                            borderRadius: "10px",
                            height: 250,
                        }}
                    />
                </Grid>
                <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
                    <Skeleton
                        style={{
                            width: "100%",
                            borderRadius: "10px",
                            height: 250,
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default SkeletonCatalogSlider;
