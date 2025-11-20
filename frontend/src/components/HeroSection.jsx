import React from "react";
import { isLoggedIn } from "../utils/auth";
import { Link, useNavigate } from "react-router-dom";


export default function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center mt-20 px-5">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl">
        Check If Your <span className="text-indigo-500">Resume</span>
        <br /> Matches the Job Role
      </h1>

      <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl">
        Upload your resume and job description to instantly get your match score,
        skill gaps, and personalized improvement tips.
      </p>

     <Link
  to={isLoggedIn() ? "/analyzer" : "/login"}
  className="mt-10 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-lg font-medium shadow-lg transition"
>
  Start Analyzing
</Link>
    </section>
  );
}
