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
  color: #696969;
  margin: 0 0 5px;
  text-transform: capitalize;
`;

export const Status = styled.p<{ isCompleted: boolean }>`
    cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${(props) => (props.isCompleted ? "green" : "gray")};
  color: white;
  width: 80px;
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
