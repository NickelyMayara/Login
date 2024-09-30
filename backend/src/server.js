import express from "express";
import cors from "cors";
import conn from "./config/conn.js";
import router from "./router/userRouter.js"
import dotenv from "dotenv"

const port = 3000;
const app = express();

dotenv.config()

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router)

conn
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Disponível em http://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error));