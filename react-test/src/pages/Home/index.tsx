import React, { useEffect, useState } from "react";
import { TaskList, Modal } from "../../components";
import "./styles";
import {
  Title,
  Icon,
  Nav,
  Content,
  AddButton,
  SearchButton,
  Input,
  Slot,
} from "./styles";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Task } from "../../types/task";
import { api } from "../../services/api";

const Home: React.FC = () => {
  const [isOpenModal, setIsModalOpen] = useState(false);
  const [todos, setTodos] = useState<Task[]>([]);
  const [searchText, setSearchText] = useState("");

  const fetchTodos = async () => {
    try {
      const response = await api.get<Task[]>('/');

      console.log(response);
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await api.delete<Task[]>(`/delete/${id}`);
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddTask = async (taskName: string) => {
    setIsModalOpen(false);
    if (!taskName.trim()) return;
    try {
      await api.post<Task>('/create', { name: taskName });
    } catch (error) {
      console.error("Error adding todo:", error);
    }

    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <Nav>
        <Slot>
          <Icon src="src/assets/beaverIcon.png" alt="IconBevaer" />
          <Title>BeaverTasks</Title>
        </Slot>
        <Slot>
          <Input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search a Task"
          />
          <SearchButton
            onClick={() =>
              searchText
                ? setTodos(
                    todos.filter((todo) => todo.name.includes(searchText)),
                  )
                : fetchTodos()
            }
          >
            <FiSearch size={24} color="white" />
          </SearchButton>
        </Slot>
        <Slot />
      </Nav>
      <Content>
        <TaskList todos={todos} handleDeleteTodo={handleDeleteTodo} />
        <Modal
          isOpen={isOpenModal}
          onClose={handleCloseModal}
          onSubmit={handleAddTask}
        />
        <AddButton onClick={handleOpenModal}>
          <FiPlus size={24} color="white" />
        </AddButton>
      </Content>
    </>
  );
};

export default Home;
