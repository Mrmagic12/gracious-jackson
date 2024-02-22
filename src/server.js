import express from "express";
import api from "./api/api.js";

const app = express();
app.use(express.json());
app.use("/", api);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
