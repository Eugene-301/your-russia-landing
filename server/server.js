const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Привет, это GET запрос!");
});

app.post("/", (req, res) => {
  const data = req.body;
  res.json({ message: "Привет, это POST запрос!", receivedData: data });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
