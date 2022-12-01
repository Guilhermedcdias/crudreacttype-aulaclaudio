import express, { json } from "express";
import { db } from "./database/db";
import { router } from "./routes";

const cors = require("cors");

const app = express();
app.use(json());
app.use(cors())
app.use(router);

app.listen(8030, async () => {
  await db.sync();
  console.log(`App ${process.env.PROJECT_NAME} Running at 8030!`);
});
