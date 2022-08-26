import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import bodyParser from 'body-parser';
import superHeroRoutes from "./routes/superheros"

dotenv.config();

const app: Express = express();
const PORT: string | number = process.env.PORT || 8080;

app.use(cors());
app.use(express.json())
app.use("/api/superheros", superHeroRoutes);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`);
});