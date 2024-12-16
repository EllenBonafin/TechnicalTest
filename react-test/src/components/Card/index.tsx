import React, { useState } from "react";
import { Task } from "../../types/task";
import { Card, TaskInfo, TaskName, Status, DeleteButton } from "./styles";

interface TaskCardProps {
  task: Task;
  onDelete: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onDelete }) => {
  const [isCompleted, setIsCompleted] = useState(task.status);

  const toggleStatus = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <Card>
      <TaskInfo>
        <TaskName>{task.name}</TaskName>
        <Status isCompleted={isCompleted} onClick={toggleStatus}>
          {isCompleted ? "Finished" : "Pending"}
        </Status>
      </TaskInfo>
      <DeleteButton onClick={() => onDelete(task.id)}>Deletar</DeleteButton>
    </Card>
  );
};

export { TaskCard };
