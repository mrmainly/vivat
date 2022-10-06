import { Box, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";

const LoadingWrapper = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
}));

const PageLoading = () => {
    return (
        <LoadingWrapper>
            <CircularProgress />
        </LoadingWrapper>
    );
};

export default PageLoading;
