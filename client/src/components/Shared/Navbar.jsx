import { FaUserCircle } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const useOutsideClickHandler = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && event.target && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, callback]);
};

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const user = "Nick";

  useOutsideClickHandler(dropdownRef, () => {
    setIsDropdownOpen(false);
  });

  const handleIconClick = (event) => {
    event.stopPropagation(); // Prevent the document click event from being triggered immediately
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="h-screen-6 bg-slate-300 border-b-2 border-slate-400 flex items-center gap-6">
      <div className="flex-1 text-sm font-medium text-gray-900 rounded-md drop-shadow-lg ml-3">
        Logged in as: <span className="text-lg font-normal"> {user} </span>
      </div>
      <div className="relative flex justify-end mx-3">
        <FaUserCircle size={32} className="cursor-pointer" onClick={handleIconClick} />

        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-300 shadow-lg"
          >
            <div className="p-2 hover:bg-slate-400">Profile</div>
            <div className="p-2 hover:bg-slate-400">Settings</div>
            <div className="p-2 hover:bg-slate-400">Logout</div>
          </div>
        )}
      </div>
    </div>
  );
}
