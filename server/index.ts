import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import superPowerRoutes from "./routes/superpowers"

dotenv.config();

const app: Express = express();
const PORT: string | number = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use(superPowerRoutes);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`);
});