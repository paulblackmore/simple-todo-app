import { expect, afterEach } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import { mockData, newTodo, updatedTodo } from './mockData';

const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}/todos`, () =>
    HttpResponse.json(mockData)
  ),
  http.post(`${import.meta.env.VITE_API_URL}/todos`, () =>
    HttpResponse.json(newTodo)
  ),
  http.put(`${import.meta.env.VITE_API_URL}/todos/yRTKiDy0-s_9zrh0zAMaK`, () =>
    HttpResponse.json(updatedTodo)
  ),
];

expect.extend(matchers);

export const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
