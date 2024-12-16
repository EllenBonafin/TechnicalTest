import express from "express";
import cors from "cors";
import { createTodo, getTodos, getTodoById, updateTodo, deleteTodo } from "../src/services/todos.service";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/", async (request, response) => {
  try {
    const todos = await getTodos();
    response.json(todos);
  } catch (error) {
    response.status(500).json({ error: "Failed to fetch todos." });
  }
});

app.post("/create", async (request, response) => {
  const { name } = request.body;
  try {
    const todo = await createTodo(name);
    response.status(201).json(todo);
  } catch (error) {
    response.status(500).json({ error: "Failed to create todo." });
  }
});

app.get("/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const todo = await getTodoById(Number(id));
    response.json(todo);
  } catch (error) {
    response.status(404).json({ error: error.message });
  }
});

app.put("/update/:id", async (request, response) => {
  const { id } = request.params;
  const data = request.body;
  try {
    const updatedTodo = await updateTodo(Number(id), data);
    response.json(updatedTodo);
  } catch (error) {
    response.status(500).json({ error: "Failed to update todo." });
  }
});

app.delete("/delete/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const deletedTodo = await deleteTodo(Number(id));
    response.json(deletedTodo);
  } catch (error) {
    response.status(500).json({ error: "Failed to delete todo." });
  }
});

app.listen(PORT, () => {
  console.log("App listening on port ${PORT}");
});
