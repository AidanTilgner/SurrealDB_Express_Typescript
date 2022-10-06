import Express from "express";
import { config } from "dotenv";
import { initDB } from "./utils/surrealdb";

config();
initDB();

const app = Express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
