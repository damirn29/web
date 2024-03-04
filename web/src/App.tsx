import { useState, useEffect } from 'react';
import { Table, Select } from 'antd';
import axios from 'axios';
import './App.css';

const { Option } = Select;

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [dataSource, setDataSource] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageSize, setPageSize] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);

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
  };

  const handleChangePage = (page: number) => {
    setOffset((page - 1) * pageSize);
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
      <Select defaultValue={pageSize} onChange={handleChangePageSize}>
        <Option value={5}>5</Option>
        <Option value={10}>10</Option>
        <Option value={20}>20</Option>
        <Option value={50}>50</Option>
      </Select>

      <Table
        dataSource={dataSource}
        columns={columns}
        loading={loading}
        pagination={{
          pageSize: pageSize,
          total: 200,
          onChange: handleChangePage,
        }}
      />
    </div>
  );
}

export default App;
