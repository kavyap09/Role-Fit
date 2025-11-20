import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 py-6 text-center text-slate-400 border-t border-white/10">
      <p>© {new Date().getFullYear()} RoleFit — Built by Kavya Pendyala</p>
    </footer>
  );
}
