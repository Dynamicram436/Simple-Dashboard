import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
<<<<<<< HEAD
    setError("");
=======
    setError(""); 
>>>>>>> feature1
  };

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD

=======
    
    
>>>>>>> feature1
    if (!credentials.username.trim()) {
      setError("请输入用户名");
      return;
    }

    if (!credentials.password.trim()) {
      setError("请输入密码");
      return;
    }

<<<<<<< HEAD
    localStorage.setItem("formdata", credentials);
    console.log(JSON.stringify(credentials));

    navigate("/dashboard");
=======
    
    
    navigate('/dashboard')
>>>>>>> feature1
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-[300px] border border-gray-300 rounded p-4"
      >
        <h1 className="text-2xl font-bold">Login</h1>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
