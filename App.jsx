import Dashboard from "./pages/Dashboard";
import { EmployeeProvider } from "./context/EmployeeContext";

const App = () => {
  return (
    <EmployeeProvider>
      <Dashboard />
    </EmployeeProvider>
  );
};

export default App;
 