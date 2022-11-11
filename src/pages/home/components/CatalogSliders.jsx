import { useState, useEffect } from "react";
import { Tab, Tabs, Box, Typography } from "@mui/material";
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

const CatalogSliders = ({ data, loading }) => {
    const [currentTab, setCurrentTab] = useState(0);
    const [mobileView, setMobileView] = useState(false);

    const theme = useTheme();

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 994 ? setMobileView(true) : setMobileView(false);
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    if (loading) {
        return <SkeletonCatalogSlider />;
    }

    const handleChange = (event, newValue) => {
        setCurrentTab(newValue);
    };
    return (
        <Box style={{ marginTop: 50 }}>
            {mobileView ? (
                data?.results?.map((item, index) => (
                    <Box style={{ marginTop: 30 }} key={index}>
                        <Typography style={{ marginBottom: 10, fontWeight: 600, fontSize: 18 }}>{item.title}</Typography>
                        <CatalogSlider data={item} />
                    </Box>
                ))
            ) : (
                <>
                    <Tabs value={currentTab} onChange={handleChange} variant="scrollable" allowScrollButtonsMobile aria-label="scrollable force tabs example" style={{ marginBottom: 20 }}>
                        {data?.results?.map((item, index) => (
                            <Tab label={item.title} key={index} />
                        ))}
                    </Tabs>
                    <SwipeableViews index={currentTab} onChangeIndex={handleChange} axis={theme.direction === "rtl" ? "x-reverse" : "x"}>
                        {data?.results?.map((item, index) => (
                            <TabPanel key={index}>
                                <CatalogSlider data={item} />
                            </TabPanel>
                        ))}
                    </SwipeableViews>
                </>
            )}
        </Box>
    );
};

export default CatalogSliders;
