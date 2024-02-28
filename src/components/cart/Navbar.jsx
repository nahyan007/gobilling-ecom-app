import React from "react";

const Navbar = ({ navItem }) => {
  return (
    <div>
      <button
        type="button"
        className="  bg-[#E1EAF9] text-[#3674D9]   hover:text-[#E1EAF9] border border-[#3674D9] hover:bg-[#3674D9] rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 
      flex items-center w-full"
      >
        {navItem.icon}
        {navItem.title}
      </button>
    </div>
  );
};

export default Navbar;
