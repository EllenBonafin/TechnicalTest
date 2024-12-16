import express from "express";
import cors from 'cors'

type Todo = {
  id: number;
  name: string;
  status: boolean;
};

let todos: Todo[] = []; 
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors())

app.get('/', (request, response) => {
  response.send(todos);
})

app.post("/create", (request, response) => {
  const todo = {
    id: todos.length + 1,
    name: request.body.name,
    status: false,
  };

  todos.push(todo);
  response.send(todo);
});

app.delete("/delete", (request, response) => {
  const idToRemove = request.body.id;
  todos = todos.filter((todo) => todo.id !== idToRemove)
  response.send(todos);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
