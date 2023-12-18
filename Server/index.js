require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const projectRoutes = require("./routes/projectRoutes");
const userRouter = require("./routes/authRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
connectDB();

app.use(bodyParser.json());
app.use("/projects", projectRoutes);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
