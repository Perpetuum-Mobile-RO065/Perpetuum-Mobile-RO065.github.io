import React from "react";
import {Outlet} from "react-router-dom";
import {Footer} from "./footer/Footer";
import NavigationBar from "./navbar/NavigationBar";

export default function Layout() {
    const bodyStyle = {
        minHeight: "59.5vh",
        margin: "8vh 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }

    return (
        <>
            <NavigationBar/>
            <div style={bodyStyle}>
                <Outlet/>
            </div>
            <Footer/>
        </>

    )
}