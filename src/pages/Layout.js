import React from "react";

import { Container } from "@mui/material";
import Header from "../components/Header";
import { Outlet } from 'react-router-dom';


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
