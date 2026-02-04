const { readData, writeData } = require("../utils/fileHandler");

// GET all employees
const getEmployees = (req, res) => {
  const data = readData();
  res.json(data.employees);
};

// ADD employee
const addEmployee = (req, res) => {
  const data = readData();

  const newEmployee = {
    id: Date.now(),
    ...req.body,
    status: "Active",
  };

  data.employees.push(newEmployee);
  writeData(data);

  res.status(201).json(newEmployee);
};

// UPDATE employee
const updateEmployee = (req, res) => {
  const { id } = req.params;
  const data = readData();

  const index = data.employees.findIndex(
    (emp) => emp.id === Number(id)
  );

  if (index === -1) {
    return res.status(404).json({ message: "Employee not found" });
  }

  data.employees[index] = {
    ...data.employees[index],
    ...req.body,
  };

  writeData(data);
  res.json(data.employees[index]);
};

// DELETE employee
const deleteEmployee = (req, res) => {
  const { id } = req.params;
  const data = readData();

  const filteredEmployees = data.employees.filter(
    (emp) => emp.id !== Number(id)
  );

  data.employees = filteredEmployees;
  writeData(data);

  res.json({ message: "Employee deleted" });
};

module.exports = {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
