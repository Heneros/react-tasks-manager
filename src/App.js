import React from "react";
import Form from "./components/Form";
import { Container } from "@mui/material";
import { useTasks } from "./contexts/TasksContext";
import Header from "./components/Header";
// import Tasks from "./components/Tasks";
import Buttons from "./components/Buttons";



function App() {
  // const { tasks } = useTasks();
  return (
    <>
      <Header />
      <Container>
        <Form />
        <Buttons />
      </Container >
    </>
  );
}

export default App;
