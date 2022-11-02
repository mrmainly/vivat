import { styled } from "@mui/system";
import Skeleton from "react-loading-skeleton";

import { HomeSlider } from "../../../constructor";

const BannerSkeleton = styled(Skeleton)(({ theme }) => ({
    height: 500,
    borderRadius: 50,
    marginBottom: 50,
    [theme.breakpoints.down("md")]: {
        height: 300,
    },
    [theme.breakpoints.down("sm")]: {
        height: 200,
    },
}));

const Banners = ({ isBannerLoading, promotion }) => {
    return <div>{isBannerLoading ? <BannerSkeleton /> : <HomeSlider data={promotion?.results} />}</div>;
};

export default Banners;
