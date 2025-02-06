import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import API from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Profile() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get("/user/profile");
        setUser(res.data);
      } catch (err) {
        toast.error("Unauthorized! Please log in.");
        router.push("/login");
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {user ? (
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-bold">Welcome, {user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
          <button onClick={() => {
            localStorage.removeItem("token");
            router.push("/login");
          }} className="bg-red-500 text-white px-4 py-2 mt-4">Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
