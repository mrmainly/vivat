import InfoBlog from "../components/InfoBlog";

import { Box } from "@mui/material";

const Licenses = () => {
    return (
        <div>
            <InfoBlog title="Лицензии">
                <Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                        }}
                    >
                        <img src="/img/licens1.png" alt="" />
                        <img src="/img/licens2.png" alt="" style={{ marginTop: "-100px" }} />
                    </Box>
                </Box>
            </InfoBlog>
        </div>
    );
};

export default Licenses;
