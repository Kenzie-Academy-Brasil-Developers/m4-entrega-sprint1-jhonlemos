import express from "express";
import router from "./Routes/users.routes";
import "dotenv/config";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("", router);

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});

export default app;
