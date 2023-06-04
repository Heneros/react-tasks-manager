import React from "react";
import Form from "./components/Form";
import { Container } from "@mui/material";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Form />
      </Container>
    </>
  );
}

export default App;
