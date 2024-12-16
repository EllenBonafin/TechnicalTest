import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin: 10px auto;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;
export const TaskInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TaskName = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  color: #333;
  margin: 0 0 5px;
`;

export const Status = styled.p<{ isCompleted: boolean }>`
  font-size: 14px;
  color: ${(props) => (props.isCompleted ? "#2ecc71" : "#e74c3c")};
  font-weight: bold;
`;

export const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #c0392b;
  }
`;
