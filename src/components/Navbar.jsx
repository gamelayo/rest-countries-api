import React from "react";
import ThemeToggle from "./ThemeToggle";
const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between px-3 md:px-8 items-center h-20 py-2 bg-primary">
        <div>
          <h1 className="font-bold text-xl">Where in the world?</h1>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
