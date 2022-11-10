import { useState } from "react";
import { Tab, Tabs, Box } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";

import { CatalogSlider } from "../../../constructor";
import { SkeletonCatalogSlider } from "../../../components";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`full-width-tabpanel-${index}`} aria-labelledby={`full-width-tab-${index}`} {...other}>
            {value === index && <Box>{children}</Box>}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    };
}

const CatalogSliders = ({ data, loading }) => {
    const [currentTab, setCurrentTab] = useState(0);

    const theme = useTheme();

    if (loading) {
        return <SkeletonCatalogSlider />;
    }

    const handleChange = (event, newValue) => {
        setCurrentTab(newValue);
    };
    return (
        <Box style={{ marginTop: 50 }}>
            <Tabs value={currentTab} onChange={handleChange} variant="scrollable" allowScrollButtonsMobile aria-label="scrollable force tabs example" style={{ marginBottom: 20 }}>
                {data?.results?.map((item, index) => (
                    <Tab label={item.title} key={index} />
                ))}
            </Tabs>
            <SwipeableViews index={currentTab} onChangeIndex={handleChange} axis={theme.direction === "rtl" ? "x-reverse" : "x"}>
                {data?.results?.map((item, index) => (
                    <TabPanel>
                        <CatalogSlider data={item} key={index} />
                    </TabPanel>
                ))}
            </SwipeableViews>
        </Box>
    );
};

export default CatalogSliders;
