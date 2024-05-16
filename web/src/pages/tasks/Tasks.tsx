import React, { useState, useEffect } from 'react';
import { Table, Select, Button } from 'antd';
import axios from 'axios';
import styled from 'styled-components';

const { Option } = Select;

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const CustomTable = styled(Table)`
  .ant-table-thead > tr > th {
    background-color: #f0f0f0;
  }

  .ant-table-tbody > tr.ant-table-row {
    background-color: #ffffff;
  }

  .ant-table-tbody > tr.ant-table-row.completed {
    background-color: lightgreen;
  }
`;

function App() {
  const [dataSource, setDataSource] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageSize, setPageSize] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    fetchData();
  }, [pageSize, offset]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Todo[]>(`https://jsonplaceholder.typicode.com/todos?_start=${offset}&_limit=${pageSize}`);
      setDataSource(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const handleChangePageSize = (value: number) => {
    setPageSize(value);
    setOffset(0);
    setCurrentPage(1);
  };

  const handleChangePage = (page: number) => {
    setOffset((page - 1) * pageSize);
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    handleChangePage(nextPage);
  };

  const handlePrevPage = () => {
    const prevPage = currentPage - 1;
    handleChangePage(prevPage);
  };

  const columns = [
    {
      title: 'User ID',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Completed',
      dataIndex: 'completed',
      key: 'completed',
      render: (completed: boolean) => (completed ? 'Yes' : 'No'),
    },
  ];

  return (
    <div>
      <CustomTable
        dataSource={dataSource}
        columns={columns}
        loading={loading}
        pagination={false}
        rowClassName={(record) => record.completed ? 'completed' : ''}
      />

      <Container>
        <Select defaultValue={pageSize} onChange={handleChangePageSize} style={{ marginTop: '20px', marginBottom: '10px' }}>
          <Option value={5}>5</Option>
          <Option value={10}>10</Option>
          <Option value={20}>20</Option>
          <Option value={50}>50</Option>
        </Select>

        <Button disabled={currentPage === 1} onClick={handlePrevPage}>Назад</Button>
        <span style={{ margin: '0 10px' }}>Страница: {currentPage}</span>
        <Button disabled={dataSource.length < pageSize} onClick={handleNextPage}>Вперёд</Button>
      </Container>
    </div>


  );
}

export default App;
