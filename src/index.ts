import express, { Express, Request, Response } from "express";
import IpfsRoutes from "@/routes/IpfsRoutes"
import dirRoutes from "@/routes/dirRoutes"
import cors from "cors"
import { ErrorMiddleware } from "./helper/errorMiddleware";
import path from "path";
const app: Express = express();
const port = process.env.PORT || 4000;
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",IpfsRoutes)
app.use("/dir",dirRoutes)
app.use(express.static(path.join(__dirname,'public')))

app.use(ErrorMiddleware)
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});