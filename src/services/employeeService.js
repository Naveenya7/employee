const API_URL = "http://localhost:5000/employees";

export const fetchEmployees = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const addEmployee = async (employee) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
  return res.json();
};

export const updateEmployee = async (id, employee) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
  return res.json();
};

export const deleteEmployee = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return res.json();
};
