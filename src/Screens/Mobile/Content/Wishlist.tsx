import React, { useState } from "react";
import { Drawer } from "antd-mobile";
import { HomeScreenHeader } from "../Header";
import WindowDimensions from "../../../components/WindowDimensions";
import DrawerContent from "./components/DrawerContent";

export const Wishlist = () => {
    const [menu, toggle] = useState(false);
    const { width } = WindowDimensions();

    const onOpenChange = () => {
        toggle(!menu);
    };

    const sidebar = (
        <div style={{ width: width * 0.75, maxWidth: 290 }}>
            <DrawerContent />
        </div>
    );

    return (
        <div
            style={{
                width: "100%",
                minHeight: "100%",
            }}
        >
            <Drawer
                className="my-drawer"
                style={{ minHeight: document.documentElement.clientHeight }}
                enableDragHandle
                // contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                sidebar={sidebar}
                open={menu}
                onOpenChange={onOpenChange}
            >
                <HomeScreenHeader
                    menu={menu}
                    toggle={toggle}
                    pageHeading="My Wishlist"
                />
                <div style={{ paddingTop: 101 }}>
                    <p>Wishlist Screen Content</p>
                </div>
            </Drawer>
        </div>
    );
};
