import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

const EmployeeCard = ({ employee }) => {
  const { deleteEmployee, setEditingEmployee } = useContext(EmployeeContext);

  return (
    <div className="card">
      <h3>{employee.name}</h3>
      <p>{employee.email}</p>
      <p>{employee.role} — {employee.department}</p>

      <div className="actions">
        <button onClick={() => setEditingEmployee(employee)}>Edit</button>
        <button className="danger" onClick={() => deleteEmployee(employee.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
