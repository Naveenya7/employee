import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";

const Dashboard = () => {
  return (
    <div className="container">
      <h1>Employee Management System</h1>
      <EmployeeForm />
      <EmployeeList />
    </div>
  );
};

export default Dashboard;
