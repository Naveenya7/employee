const express = require("express");
const cors = require("cors");

const employeeRoutes = require("./routes/employeeRoutes");
const logger = require("./middleware/logger");

const app = express();
const PORT = 5000;

// global middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// routes
app.use("/employees", employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
