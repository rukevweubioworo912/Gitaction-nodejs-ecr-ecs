// tests/app.test.js
const request = require('supertest');
const app = require('../app'); // Import the Express app without starting the server

describe('Health Check', () => {
  it('GET /api/health should return status ok', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
    expect(res.body.message).toMatch(/Space Shooter app is running/i);
  });
});

describe('Static Files', () => {
  it('GET / should return index.html content', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/<title>Space Shooter<\/title>/);
  });
});
