const express = require("express");
const router = express.Router();

const {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

const validateEmployee = require("../middleware/validateEmployee");

router.get("/", getEmployees);
router.post("/", validateEmployee, addEmployee);
router.put("/:id", validateEmployee, updateEmployee);
router.delete("/:id", deleteEmployee);

module.exports = router;
