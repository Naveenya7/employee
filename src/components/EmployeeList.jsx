import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = () => {
  const { employees, loading } = useContext(EmployeeContext);

  if (loading) return <p>Loading employees...</p>;

  if (employees.length === 0) return <p>No employees found.</p>;

  return (
    <div>
      {employees.map((emp) => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
};

export default EmployeeList;
