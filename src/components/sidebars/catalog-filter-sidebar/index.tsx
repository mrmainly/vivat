import React, { useState } from "react";
import { Drawer } from "@mui/material";

import Body from "./components/Body";

interface CatalogFilterSideBarProps {
    open: any;
    setOpen: any;
    formState: any;
    formDispatch: any;
}

const CatalogFilterSideBar: React.FC<CatalogFilterSideBarProps> = ({
    formState,
    formDispatch,
    open,
    setOpen,
}) => {
    const [drawerState, setDrawerState] = useState(true);

    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 900) {
                setDrawerState(true);
            }
            if (window.innerWidth > 900) {
                setDrawerState(false);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {drawerState ? (
                <Drawer
                    {...{
                        anchor: "left",
                        open: open,
                        onClose: () => setOpen(false),
                    }}
                >
                    <Body
                        formState={formState}
                        formDispatch={formDispatch}
                        open={open}
                        setOpen={setOpen}
                    />
                </Drawer>
            ) : (
                <Body
                    formState={formState}
                    formDispatch={formDispatch}
                    open={open}
                    setOpen={setOpen}
                />
            )}
        </>
    );
};

export default CatalogFilterSideBar;
