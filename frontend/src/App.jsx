import { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaUserCircle, FaCheck } from "react-icons/fa"; // Import User Icon
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : [];
  });
  const [isEditIndex, setIsEditIndex] = useState(null);
  const [updateTodo, setUpdateTodo] = useState("");

  const handleAdd = () => {
    axios
      .post("http://localhost:5000", { todo, user })
      .then((response) => {
        const updatedUser = response.data;
        setUser([updatedUser]);
        localStorage.setItem("user", JSON.stringify([updatedUser]));
        setTodo("");
        toast.success("Todo added successfully!");
      })
      .catch((error) =>
        toast.warn(error.response?.data?.message || "Error occurred")
      );
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());

    axios
      .post("http://localhost:5000/auth/register", formObject)
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((error) =>
        toast.warn(error.response?.data?.message || "Registration failed")
      );
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());

    axios
      .post("http://localhost:5000/auth/login", formObject)
      .then((response) => {
        setUser([response.data]);
        localStorage.setItem("user", JSON.stringify([response.data]));
        toast.success(response.data.message);
      })
      .catch((error) =>
        toast.warn(error.response?.data?.message || "Login failed")
      );
  };

  const signOut = () => {
    axios
      .delete(`http://localhost:5000/auth/login`, {
        params: { user },
      })
      .then((response) => {
        toast.success(response.data.message);
        setUser([]);
        localStorage.removeItem("user");
      })
      .catch((error) =>
        toast.warn(error.response?.data?.message || "Sign-out failed")
      );
  };

  const handleDeleteOneTodo = (todo) => {
    axios
      .delete("http://localhost:5000/", { params: { todo, user } })
      .then((response) => {
        const updatedUser = response.data;
        setUser([updatedUser]);
        localStorage.setItem("user", JSON.stringify([updatedUser]));
        toast.success("Todo deleted successfully!");
      })
      .catch((error) =>
        toast.warn(error.response?.data?.message || "Failed to delete todo")
      );
  };

  const handleUpdateOneTodo = (selectedTodo) => {
    axios
      .put("http://localhost:5000/updateTodo", { selectedTodo, user, updateTodo })
      .then((response) => {
        setIsEditIndex(null);
        const updatedUser = response.data;
        setUser([updatedUser]);
        localStorage.setItem("user", JSON.stringify([updatedUser]));
        toast.success(response.data.message);
      })
      .catch((error) =>
        toast.warn(error.response?.data?.message || "Failed to update todo")
      );
  };

  const handleClearAll = () => {
    axios
      .delete("http://localhost:5000/clearAll", { params: { user } })
      .then((response) => {
        const updatedUser = response.data;
        setUser([updatedUser]);
        localStorage.setItem("user", JSON.stringify([updatedUser]));
        toast.success("All todos cleared!");
      })
      .catch((error) =>
        toast.warn(error.response?.data?.message || "Failed to clear todos")
      );
  };

  return (
    <div className="flex flex-col bg-gray-900 text-gray-200 h-screen">
      <ToastContainer/>
      {/* Top Section: Login and Signup */}
      {user.length === 0 && (
        <div className="flex justify-around items-center py-6 bg-gray-800">
          {/* Login Box */}
          <form
            onSubmit={handleLogin}
            className="flex flex-col items-center bg-gray-700 p-4 rounded-lg shadow-md w-60"
          >
            <h2 className="text-white text-lg font-bold mb-4">Login</h2>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="p-2 mb-3 w-full rounded-lg bg-gray-600 text-gray-200"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="p-2 mb-4 w-full rounded-lg bg-gray-600 text-gray-200"
            />
            <button
              type="submit"
              className="bg-blue-500 p-2 px-4 rounded-lg text-white font-bold"
            >
              Login
            </button>
          </form>

          {/* Signup Box */}
          <form
            onSubmit={handleRegister}
            className="flex flex-col items-center bg-gray-700 p-4 rounded-lg shadow-md w-60"
          >
            <h2 className="text-white text-lg font-bold mb-4">Signup</h2>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="p-2 mb-3 w-full rounded-lg bg-gray-600 text-gray-200"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-2 mb-3 w-full rounded-lg bg-gray-600 text-gray-200"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="p-2 mb-4 w-full rounded-lg bg-gray-600 text-gray-200"
            />
            <button
              type="submit"
              className="bg-green-500 p-2 px-4 rounded-lg text-white font-bold"
            >
              Signup
            </button>
          </form>
        </div>
      )}

      {/* Main Section: Todo List */}
      {user.length > 0 && (
        <div className="flex flex-col justify-center items-center flex-grow gap-5">
          <div className="flex justify-end w-full px-8 gap-4 items-center">
            <FaUserCircle className="text-white text-3xl" />
            <h1 className="text-white font-bold text-xl">{user[0]?.user?.username}</h1>
            <button
              onClick={signOut}
              className="bg-red-500 text-white font-bold p-1 rounded-md"
            >
              Sign Out
            </button>
          </div>
          <div>
            <h1 className="text-white text-center text-5xl font-bold mb-4">Todo List</h1>
            <div className="flex items-center gap-2 container">
              <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className="p-2 rounded-lg bg-gray-600 text-gray-200 w-screen container opacity-8 "
                placeholder="Enter a new todo"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAdd(); // Call the handleAdd function when Enter is pressed
                  }
                }}
              />
              <button
                className="bg-blue-500 p-2 px-4 rounded-lg text-white font-bold"
                onClick={handleAdd}
              >
                Add
              </button>
              <button
                className="bg-red-400 p-2 px-4 text-nowrap rounded-lg text-white font-bold"
                onClick={handleClearAll}
              >
                Clear All
              </button>
            </div>
          </div>

          <div className="w-full px-8">
            {user[0]?.user?.todos?.length > 0 ? (
              user[0].user.todos.map((item, index) => (
                <div key={index} className="text-white flex justify-between items-center bg-gray-700 p-2 rounded-lg mb-2">
                  {
                    isEditIndex === index ?
                    <input type="text" value={updateTodo} className="w-full mx-3 bg-transparent border-none"  
                    onChange={(e)=> setUpdateTodo(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleUpdateOneTodo(item); // Call the handleAdd function when Enter is pressed
                      }
                    }}/>
                      :
                      <h1
                        key={index}

                      >
                        {index + 1}. {item}
                      </h1>
                  }
                  <div className="flex  gap-4">
                    {
                      isEditIndex === index ?
                        <FaCheck onClick={() => handleUpdateOneTodo(item)} className="cursor-pointer text-blue-500" />
                        :
                        <FaEdit onClick={() =>{
                          setIsEditIndex(index)
                          setUpdateTodo(item)
                        } } className="cursor-pointer text-blue-500" />
                    }
                    <FaTrash onClick={() => handleDeleteOneTodo(item)} className="cursor-pointer text-red-500" />
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-gray-400 text-center text-3xl font-bold opacity-20">No todos yet</h1>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
