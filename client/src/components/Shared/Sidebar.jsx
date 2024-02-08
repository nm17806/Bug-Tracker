import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare, FiFolder } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Tickets", link: "/", icon: FiMessageSquare },
    { name: "Create a Ticket", link: "/", icon: FiMessageSquare },
    { name: "Analytics", link: "/", icon: TbReportAnalytics, margin: true },
    { name: "Another Page", link: "/", icon: FiFolder },
    { name: "Users", link: "/", icon: AiOutlineUser, margin: true },
    { name: "Log Out", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);

  return (
    <div className="flex gap-6">
      <div
        className={`bg-slate-300 min-h-screen border-r-2 border-slate-400 ${open ? "w-44" : "w-16"} duration-300 text-gray-800 px-3 `}
      >
        <div className="py-3 flex justify-start">
          <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus.map((menu, i) => (
            <Link
              to={menu.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-50 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2 className={`whitespace-pre transition-opacity duration-100  ${!open && "opacity-0"}`}>{menu.name}</h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden`}
              >
                {menu.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
