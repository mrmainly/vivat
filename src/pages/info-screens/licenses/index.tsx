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
                            justifyContent: "center",
                        }}
                    >
                        <img src="/img/license.jpg" alt="" />
                    </Box>
                </Box>
            </InfoBlog>
        </div>
    );
};

export default Licenses;
