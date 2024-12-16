import { PrismaClient, Todo } from '@prisma/client';

const prisma = new PrismaClient();

async function createTodo(name: string): Promise<Todo> {
  try {
    const todo = await prisma.todo.create({
      data: { name },
    });
    return todo;
  } catch (error) {
    console.error('Error creating Todo:', error);
    throw error;
  }
}

async function getTodos(): Promise<Todo[]> {
  try {
    const todos = await prisma.todo.findMany();
    return todos;
  } catch (error) {
    console.error('Error fetching Todos:', error);
    throw error;
  }
}

async function getTodoById(id: number): Promise<Todo | null> {
  try {
    const todo = await prisma.todo.findUnique({
      where: { id },
    });
    if (!todo) {
      throw new Error(`Todo with ID ${id} not found.`);
    }
    return todo;
  } catch (error) {
    console.error('Error fetching Todo:', error);
    throw error;
  }
}

async function updateTodo(id: number, data: Partial<Todo>): Promise<Todo> {
  try {
    const todo = await prisma.todo.update({
      where: { id },
      data,
    });
    return todo;
  } catch (error) {
    console.error('Error updating Todo:', error);
    throw error;
  }
}

async function deleteTodo(id: number): Promise<Todo> {
  try {
    const todo = await prisma.todo.delete({
      where: { id },
    });
    return todo;
  } catch (error) {
    console.error('Error deleting Todo:', error);
    throw error;
  }
}

export { createTodo, getTodos, getTodoById, updateTodo, deleteTodo };
