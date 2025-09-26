import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("formdata"));

    if (!savedUser || !savedUser.username || !savedUser.password) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-gray-500">Welcome to Dashboard</p>
    </div>
  );
};

export default Dashboard;
