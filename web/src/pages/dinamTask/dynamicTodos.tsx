import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

type CardTodoProps = {
  completed: boolean;
};

const CardTodo = styled.div<CardTodoProps>`
  padding: 10px;
  margin: 5px 0;
  background-color: #f0f0f0;
  border-left: 5px solid ${(props) => (props.completed ? "green" : "red")};
`;

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoCard: FC<{ data: ITodo }> = ({ data }) => (
  <CardTodo completed={data.completed}>
    <p>{data.title}</p>
  </CardTodo>
);

const LIMIT_TODOS = 10;
const apiUrl = "https://jsonplaceholder.typicode.com/todos";

const ListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 600px;
  overflow-y: auto;
`;

const BlockObserver = styled.div`
  height: 40px;
  background-color: black;
`;

const FilterDropdown = styled.select`
  padding: 10px;
  margin-bottom: 20px;
  width: 200px;
`;

export const DynamicTodos: FC = () => {
  const [todos, setTodos] = useState<Array<ITodo>>([]);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    setTodos([]);
    setCurrentPage(1);
  }, [filter]);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      const offset = (currentPage - 1) * LIMIT_TODOS;
      try {
        let url = `${apiUrl}?_start=${offset}&_limit=${LIMIT_TODOS}`;
        if (filter !== "all") {
          url += `&completed=${filter === "completed"}`;
        }
        const response = await axios.get(url);
        setTodos((prev) => [...prev, ...response.data]);
        setLoading(false);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
        setLoading(false);
      }
    };

    if (currentPage === 1 || inView) {
      fetchTodos();
    }
  }, [currentPage, inView, filter]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <FilterDropdown onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </FilterDropdown>
      <ListStyled>
        {todos.map((todo) => (
          <TodoCard key={todo.id} data={todo} />
        ))}
        {loading && <p>Загрузка...</p>}
        <BlockObserver ref={ref} />
      </ListStyled>
    </>
  );
};

export default DynamicTodos;
