import styled, { keyframes } from "styled-components";

export const Title = styled.h1`
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
`;
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const Icon = styled.img`
  width: 38px;
  height: 38px;
  margin-right: 5px;
  &:hover {
    animation: ${pulse} 1.5s infinite ease-in-out;
  }
`;

export const Slot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 33%;
`;

export const Nav = styled.nav`
  border: none;
  border-radius: 5px;
  background-color: darkolivegreen;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  padding: 5px;
  

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
    align-items: center;
  }
`;
export const Content = styled.div`
  font-family: "Roboto", sans-serif;
  padding: 10px;
  border-radius: 5px;
  background-color: #f8f8ff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;
export const AddButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: darkolivegreen;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition:
    background-color 0.2s ease-in-out,
    transform 0.2s ease-in-out;

  &:hover {
    background-color: #27ae60;
    transform: scale(1.1);
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: white;
    border-radius: 2px;
  }

  &::before {
    width: 30%;
    height: 4px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
  }

  &::after {
    width: 4px;
    height: 30%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
  }
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  &:hover {
    opacity: 0.8;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
`;
