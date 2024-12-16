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
      )) : <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", 
        textAlign: "center",
        backgroundColor: "#f8f8ff",
      }}
    >
      <h4>
        Uh-oh! Your task list is empty... Ready to add a new one? Just click the
        button above and let the fun begin!
      </h4>
    </div>}
    </>
  );
};

export { TaskList };
