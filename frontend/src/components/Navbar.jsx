import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, clearAuth, getUser } from "../utils/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const loggedIn = isLoggedIn();
  const user = getUser();

  const handleLogout = () => {
    clearAuth();
    navigate("/");
  };

  return (
 <nav className="flex items-center justify-between px-8 py-4 bg-transparent backdrop-blur border-b border-white/10">
<Link 
  to="/" 
  className="text-[28px]  font-bold tracking-wide ml-2"
>
  RoleFit
</Link>
     
      <div className="flex items-center gap-4">
           <Link to="/" className="text-sm hover:text-indigo-300">
         <u>Home</u>
        </Link>
        <Link to="/analyzer" className="text-sm hover:text-indigo-300">
          Analyzer
        </Link>
{loggedIn && (
  <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
    <i className="fa-solid fa-user text-indigo-300 text-lg"></i>
    <span className="text-sm text-slate-300">
      {user?.name ? user.name.split(" ")[0] : "User"}
    </span>
  </div>
        )}

        {!loggedIn ? (
          <>
            <Link
              to="/login"
              className="px-3 py-1 text-sm rounded-lg border border-white/20 hover:bg-white/10"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-3 py-1 text-sm rounded-lg bg-indigo-500 hover:bg-indigo-600"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="px-3 py-1 text-sm rounded-lg bg-red-500 hover:bg-red-600"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
