import { Component } from 'react';
import { Table, Select } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import './App.css';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface AppState {
  dataSource: Todo[];
  loading: boolean;
  hasMore: boolean;
  page: number;
  filter: 'all' | 'completed' | 'uncompleted';
}

const { Option } = Select;

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      dataSource: [],
      loading: true,
      hasMore: true,
      page: 1,
      filter: 'all',
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { page, dataSource } = this.state;
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`, {
        params: {
          _page: page,
          _limit: 40
        }
      });
      const data: Todo[] = response.data;
      if (data.length === 0) {
        this.setState({ hasMore: false, loading: false });
      } else {
        this.setState({
          dataSource: [...dataSource, ...data],
          page: page + 1,
          loading: false
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ loading: false });
    }
  };

  handleFilterChange = (value: AppState['filter']) => {
    this.setState({ filter: value });
  };

  render() {
    const { dataSource, loading, hasMore, filter } = this.state;

    const filteredDataSource = dataSource.filter(todo => {
      if (filter === 'completed') {
        return todo.completed;
      } else if (filter === 'uncompleted') {
        return !todo.completed;
      }
      return true;
    });

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
        <Select defaultValue="all" style={{ width: 120 }} onChange={this.handleFilterChange}>
          <Option value="all">All</Option>
          <Option value="completed">Completed</Option>
          <Option value="uncompleted">Uncompleted</Option>
        </Select>
        <InfiniteScroll
          dataLength={filteredDataSource.length}
          next={this.fetchData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={<p>No more data</p>}
        >
          <Table dataSource={filteredDataSource} columns={columns} loading={loading} pagination={false} />
        </InfiniteScroll>
      </div>
    );
  }
}

export default App;
