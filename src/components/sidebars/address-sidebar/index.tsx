import React from "react";

import { Box, MenuItem } from "@mui/material";
import { styled } from "@mui/system";

import { MyText } from "../..";
import ThemeMain from "../../../theme";

const Main = styled(Box)(({ theme }) => ({
    background: "white",
    borderRadius: 12,
    minHeight: 780,
    paddingTop: 10,
    paddingBottom: 10,
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
}));

const CusMenuItem = styled(MenuItem)(({ theme }) => ({
    height: 60,
}));

const Title = styled(Box)(({ theme }) => ({
    padding: 15,
}));

interface AddressSideBarInterface {
    data: any;
    dispatchMapCenter?: any;
}

const AddressSideBar: React.FC<AddressSideBarInterface> = ({
    data,
    dispatchMapCenter,
}) => {
    return (
        <Main>
            <Title>
                <MyText variant="h6">
                    Аптеки в{" "}
                    <span style={{ color: ThemeMain.palette.primary.main }}>
                        якутске
                    </span>
                </MyText>
            </Title>
            {data.map((item: any, index: number) => (
                <CusMenuItem
                    onClick={() => dispatchMapCenter(item.location)}
                    key={index}
                >
                    <MyText
                        variant="h6"
                        sx={{
                            color: "#20B12E",

                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {item.address}
                    </MyText>
                </CusMenuItem>
            ))}
        </Main>
    );
};

export default AddressSideBar;
