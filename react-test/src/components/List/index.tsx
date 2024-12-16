import React from "react";
import { TaskCard } from "../Card";
import { Task } from "../../types/task";

interface TaskListProps {
  todos: Task[];
  handleDeleteTodo: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ todos, handleDeleteTodo }) => {
  return (
    <>

      {todos.length ? todos.map((todo: Task) => (
        <TaskCard key={todo.id} task={todo} onDelete={handleDeleteTodo} />
      )) : <h4 style={{ textAlign: "center" }}>
      Uh-oh! Your task list is empty... Ready to add a new one? Just click the button above and let the fun begin!
    </h4>}
    </>
  );
};

export { TaskList };
