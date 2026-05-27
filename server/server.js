const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const leadRoutes = require("./routes/leadRoutes");
const clientRoutes = require("./routes/clientRoutes");
const cadRoutes = require("./routes/cadRoutes");
const orderRoutes = require("./routes/orderRoutes");
const accountRoutes = require("./routes/accountRoutes");
const calculatorRoutes =
  require("./routes/calculatorRoutes");
 require("dotenv").config();
const quotationRoutes = require("./routes/quotationRoutes");
 

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/cads", cadRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/accounts", accountRoutes);

app.use("/api/calculator", calculatorRoutes);
app.get("/", (req, res) => {
  res.send("Backend API Running...");
});

app.use("/api/quotations", quotationRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});