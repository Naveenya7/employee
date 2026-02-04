import { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

const EmployeeForm = () => {
  const {
    addEmployee,
    updateEmployee,
    editingEmployee,
    setEditingEmployee,
  } = useContext(EmployeeContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    department: "",
  });

  // fill form when editing
  useEffect(() => {
    if (editingEmployee) {
      setFormData({
        name: editingEmployee.name,
        email: editingEmployee.email,
        role: editingEmployee.role,
        department: editingEmployee.department,
      });
    }
  }, [editingEmployee]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingEmployee) {
      updateEmployee(editingEmployee.id, formData);
      setEditingEmployee(null);
    } else {
      addEmployee(formData);
    }

    setFormData({
      name: "",
      email: "",
      role: "",
      department: "",
    });
  };

  const handleCancel = () => {
    setEditingEmployee(null);
    setFormData({
      name: "",
      email: "",
      role: "",
      department: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input name="role" value={formData.role} onChange={handleChange} placeholder="Role" required />
      <input name="department" value={formData.department} onChange={handleChange} placeholder="Department" required />

      <button type="submit">
        {editingEmployee ? "Update Employee" : "Add Employee"}
      </button>

      {editingEmployee && (
        <button type="button" className="cancel" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default EmployeeForm;
