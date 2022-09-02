const express = require("express");

const {
  getAllRegister,
  getRegister,
  createRegister,
  editRegister,
  deleteRegister,
} = require("../controllers/register.controller");

const registerRoutes = express.Router();

registerRoutes.get("/", getAllRegister);

registerRoutes.get("/:id", getRegister);

registerRoutes.post("/", createRegister);

registerRoutes.patch("/:id", editRegister);

registerRoutes.delete("/:id", deleteRegister);

module.exports = {
  registerRoutes,
};
