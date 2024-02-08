import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [inputs, setInputs] = useState({ email: "", username: "", password: "" });
  const navigate = useNavigate();

  console.log(inputs);

  const handlechange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-200">
      <div className="flex flex-col w-200 p-6 rounded-md bg-slate-300 text-grey-800 mb-9 border border-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register</h1>
          <p className="text-sm text-gray-800">Provide your details below to create an account</p>
        </div>
        <form action="" className="space-y-12" onChange={handlechange}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-300 text-grey-900"
              />
            </div>
            <div>
              <label htmlFor="text" className="block mb-2 text-sm">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-300 text-grey-900"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-slate-300 text-grey-900"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                onClick={handlesubmit}
                type="button"
                className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600"
              >
                Create Account
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
