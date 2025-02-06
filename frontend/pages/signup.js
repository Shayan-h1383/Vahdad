import { useState } from "react";
import { useRouter } from "next/router";
import API from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/signup", formData);
      toast.success(res.data.message);
      router.push("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Signup</h2>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="block w-full mb-2 p-2 border" />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="block w-full mb-2 p-2 border" />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="block w-full mb-2 p-2 border" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Signup</button>
      </form>
    </div>
  );
}
