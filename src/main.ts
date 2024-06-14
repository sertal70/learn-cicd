import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

app.get('/echo/:value', (req, res) => {
  res.send(`value is: ${req.params.value}`);
});

if (!process.env.TEST_ENV) {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}

export default app;
