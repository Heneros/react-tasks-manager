import React from "react";
import { Container } from "@mui/material";
import { Outlet } from 'react-router-dom';


import Header from "../components/Header";
function Layout() {

    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container >
        </>
    );
}

export default Layout;
