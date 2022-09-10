import React from "react";
import {Outlet} from "react-router-dom";
import './Layout.css';
import {Footer} from "./Footer";
import NavigationBar from "./NavigationBar";

export default function Layout() {
    return (
        <>
            <NavigationBar/>
            <div className="main-body">
                <Outlet/>
            </div>
            <Footer/>
        </>

    )
}