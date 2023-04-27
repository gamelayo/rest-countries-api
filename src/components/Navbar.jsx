import React from "react";
import ThemeToggle from "./ThemeToggle";
const Navbar = () => {
  return (
    <div>
      <ul className="flex justify-between px-3 items-center h-20 py-2 bg-primary">
        <li>
          <h1 className="font-bold text-xl">Where in the world?</h1>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
