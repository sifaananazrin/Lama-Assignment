import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineUser,
  AiOutlineClose,
} from "react-icons/ai";
import { login, register } from "../../api-helpers/api-helpers";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ isOpen, onClose }) => {
  const Navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      let response;
      if (isRegistering) {
        response = await register(name, email, password);
        toast.success("Registration successful!");

        setIsRegistering(false);
        setEmail("");
        setPassword("");
        setName("");
      } else {
        response = await login(email, password);
        toast.success("Login successful!");

        const token = response.data.token;
        localStorage.setItem("token", token);

        Navigate("/");
        onClose();
      }
    } catch (error) {
      toast.error("There was an error!");
    }
  };

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  if (!isOpen) return null;

  return (
    <>
    <ToastContainer/>
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-5">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-sm w-full relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-1 text-gray-600 hover:text-gray-900"
        >
          <AiOutlineClose size={24} />
        </button>
        <div className="p-4">
          <form onSubmit={handleLogin} className="mt-4">
            <h1 className="text-gray-700 mb-8">
              {isRegistering ? "Register" : "Login"}
            </h1>
            {isRegistering && (
              <div className="flex items-center border-2 border-gray-300 bg-white rounded-full py-2 px-3 mb-4">
                <AiOutlineUser className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Name*"
                  className="appearance-none bg-transparent border-none w-full text-gray-700 ml-2 leading-tight focus:outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div className="flex items-center border-2 border-gray-300 bg-white rounded-full py-2 px-3 mb-4">
              <AiOutlineMail className="text-gray-400" />
              <input
                type="email"
                placeholder="Email*"
                className="appearance-none bg-transparent border-none w-full text-gray-700 ml-2 leading-tight focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex items-center border-2 border-gray-300 bg-white rounded-full py-2 px-3 mb-4">
              <AiOutlineLock className="text-gray-400" />
              <input
                type="password"
                placeholder="Password*"
                className="appearance-none bg-transparent border-none w-full text-gray-700 ml-2 leading-tight focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full transition duration-200"
            >
              {isRegistering ? "Register" : "Sign In"}
            </button>

            <p className="text-sm text-center text-gray-600 mt-6">
              {isRegistering ? (
                <>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={toggleForm}
                    className="text-purple-500 hover:underline"
                  >
                    Login here
                  </button>
                </>
              ) : (
                <>
                  Not registered yet?{" "}
                  <button
                    type="button"
                    onClick={toggleForm}
                    className="text-purple-500 hover:underline"
                  >
                    Create an Account
                  </button>
                </>
              )}
            </p>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginModal;
