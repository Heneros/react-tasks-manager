import React from "react";
import Form from "./components/Form";
import { Container } from "@mui/material";
import { useTasks } from "./contexts/TasksContext";
import Header from "./components/Header";
import Tasks from "./components/Tasks";



function App() {
  const { tasks } = useTasks();
  return (
    <>
      <Header />
      <Container>
        <Form />
        <div className="tasks"
          style={{ displat: "flex", flex: "1", justifyContent: "center" }}
        >

          {tasks.map(task => (
            <Tasks
              key={task.id}
              name={task.name}
              description={task.description}
            />
          ))}

        </div>

      </Container>
    </>
  );
}

export default App;
