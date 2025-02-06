import "../styles/globals.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isAuthenticated = typeof window !== "undefined" && localStorage.getItem("token");

  return (
    <>
      <ToastContainer />
      <nav className="bg-gray-800 text-white p-4 flex justify-between">
        <Link href="/" className="font-bold">Home</Link>
        {isAuthenticated ? (
          <>
            <Link href="/profile">Profile</Link>
            <button onClick={() => {
              localStorage.removeItem("token");
              router.push("/login");
            }}>Logout</button>
          </>
        ) : (
          <>
            <Link href="/signup">Signup</Link>
            <Link href="/login">Login</Link>
          </>
        )}
      </nav>
      <Component {...pageProps} />
    </>
  );
}
