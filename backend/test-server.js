import express from "express";
import cors from "cors";

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Test server working");
});

app.get("/api/test", (req, res) => {
  res.json({ status: "Test working" });
});

app.listen(port, "127.0.0.1", () => {
  console.log(`Test server running at http://127.0.0.1:${port}`);
});
