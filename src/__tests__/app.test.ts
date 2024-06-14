import app from '../main';
import request from 'supertest';

describe('GET /', () => {
  it('responds with "Hello, TypeScript with Express!"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, TypeScript with Express!');
  });
});

describe('GET /echo', () => {
  it('responds echoing the value passed"', async () => {
    const value = `${Math.random() * 10000}`;
    const response = await request(app).get(`/echo/${value}`);
    expect(response.status).toBe(200);
    expect(response.text).toBe(value);
  });
});
