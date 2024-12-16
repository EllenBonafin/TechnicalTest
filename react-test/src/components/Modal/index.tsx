import React, { useEffect, useState } from "react";
import {
  Overlay,
  ModalContainer,
  ModalHeader,
  CloseButton,
  Input,
  AddButton,
  ModalContent,
} from "./styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (taskName: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [taskName, setTaskName] = useState<string>("");

  useEffect(() => {
    setTaskName("");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <ModalHeader>
          <h3>New Task</h3>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalContent>
          <Input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Enter task name"
          />
          <AddButton onClick={() => onSubmit(taskName)}>Add Task</AddButton>
        </ModalContent>
      </ModalContainer>
    </Overlay>
  );
};

export { Modal };
