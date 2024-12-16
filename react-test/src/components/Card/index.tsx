import React from "react";
import { Task } from "../../types/task";
import {
  Card,
  TaskInfo,
  TaskName,
  Status,
  DeleteButton,
} from "./styles";

interface TaskCardProps {
  task: Task;
  onDelete: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onDelete }) => {
  return (
    <Card>
      <TaskInfo>
        <TaskName>{task.name}</TaskName>
        <Status isCompleted={task.status}>
          {task.status ? "Concluído" : "Pendente"}
        </Status>
      </TaskInfo>
      <DeleteButton onClick={() => onDelete(task.id)}>Deletar</DeleteButton>
    </Card>
  );
};

export { TaskCard };
