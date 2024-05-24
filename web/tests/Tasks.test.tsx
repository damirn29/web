import React from 'react';
import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { describe, it, expect } from 'vitest';
import App from '../src/pages/tasks/Tasks';

const mock = new MockAdapter(axios);

const mockData = [
    { userId: 1, id: 1, title: 'Test Todo 1', completed: false },
    { userId: 1, id: 2, title: 'Test Todo 2', completed: true },

];

mock.onGet('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10').reply(200, mockData);

describe('App component', () => {
    it('measures render time', async () => {
        const start = performance.now();
        const { getByText } = render(<App />);
        await waitFor(() => expect(getByText('Test Todo 1')).toBeInTheDocument());
        const end = performance.now();
        const renderTime = end - start;
        console.log(`Render time: ${renderTime}ms`);


        expect(renderTime).toBeLessThan(1000);
    });
});
