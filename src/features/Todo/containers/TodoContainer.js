import React, { useEffect, useState } from "react";
import { TODO_STATUS } from "../constants";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Container, Fab } from "@mui/material";
import { Add } from "@mui/icons-material";
import CustomDialog from "../../../components/CustomDialog";
import "./TodoContainer.css";
import { postTodo, updateTodo, getTodos } from "../../../services/todo.service";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const [isDialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    getAllTodos();
  }, []);

  //  get all todods from the server
  const getAllTodos = () => {
    getTodos().then((res) => {
       setTodos(res.todos);
    });
  };

  // post new todo to the server
  const onAddTodo = (value) => {
    setDialogOpen(false);
    const newtODO = {
      content: value,
      status: TODO_STATUS.TODO,
    };

     //uncomment these when using API calls
    // postTodo(newtODO).then((res) => {
    //   getAllTodos();
    // });

    //comment this line when using API calls
    setTodos([...todos, newtODO]);
  };

  //update status of an item
  const handleChange = (newStatus, todo) => {

    //uncomment these when using API calls
    // const newtODO = {
    //   content: todo.content,
    //   status: newStatus,
    // };

    // updateTodo(newtODO, todo.id).then((res) => {
    //   getAllTodos();
    // });
    
    //comment this line when using API calls
   let lastTodo = todos.find((todo) => todo.content === todo.content);
   lastTodo.status = newStatus;
   setTodos([...todos]);
  };
  
  //display available tasks with respective status
  return (
    <Container fixed>
      <div>
        <br />
        <br />
        My To-do List
      </div>

      
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Task Name</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo) => (
              <TableRow
                key={todo.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{todo.content}</TableCell>
                <TableCell align="right">
                  <ToggleButtonGroup
                    color="primary"
                    value={todo.status}
                    exclusive
                    onChange={(event, value) => {
                      handleChange(value, todo);
                    }}
                  >
                    <ToggleButton value={TODO_STATUS.TODO}>Todo</ToggleButton>
                    <ToggleButton value={TODO_STATUS.INPROGRESS}>
                      In Progress
                    </ToggleButton>
                    <ToggleButton value={TODO_STATUS.COMPLETED}>
                      Done
                    </ToggleButton>
                  </ToggleButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Fab
        color="primary"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => setDialogOpen(true)}
        aria-label="add"
        className="add-todo-button"
      >
        <Add />
      </Fab>
      <CustomDialog
        isOpen={isDialogOpen}
        onClose={onAddTodo}
        label="Todo content"
        type="text"
        heading="enter the todo"
      />
    </Container>
  );
};

export default TodoContainer;
