import { createContext, useEffect, useState } from "react";
import {
  fetchEmployees,
  addEmployee as addEmployeeAPI,
  updateEmployee as updateEmployeeAPI,
  deleteEmployee as deleteEmployeeAPI,
} from "../services/employeeService";

export const EmployeeContext = createContext();


export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingEmployee, setEditingEmployee] = useState(null);

  // fetch employees on load
  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const data = await fetchEmployees();
      setEmployees(data);
    } catch (error) {
      console.error("Failed to fetch employees", error);
    } finally {
      setLoading(false);
    }
  };

  const addEmployee = async (employee) => {
    const newEmployee = await addEmployeeAPI(employee);
    setEmployees((prev) => [...prev, newEmployee]);
  };

  const updateEmployee = async (id, updatedEmployee) => {
    const updated = await updateEmployeeAPI(id, updatedEmployee);
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === id ? updated : emp))
    );
  };

  const deleteEmployee = async (id) => {
    await deleteEmployeeAPI(id);
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  return (
    <EmployeeContext.Provider
  value={{
    employees,
    loading,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    editingEmployee,
    setEditingEmployee,
  }}
>

      {children}
    </EmployeeContext.Provider>
  );
};
