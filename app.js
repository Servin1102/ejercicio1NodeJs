const express = require("express");

//Routers
const { registerRoutes } = require("./routes/register.routes");

const app = express();

app.use(express.json());

app.use("/api/v1/registers", registerRoutes);

app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `Method ${req.method} and URL: ${req.url} dont exist`,
  });
});

module.exports = { app };
