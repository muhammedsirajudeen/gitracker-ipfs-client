import express, { Express, Request, Response } from "express";
import IpfsRoutes from "@/routes/IpfsRoutes"
import cors from "cors"
const app: Express = express();
const port = process.env.PORT || 4000;
app.use(cors())
app.use(express.json())

app.use("/",IpfsRoutes)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});