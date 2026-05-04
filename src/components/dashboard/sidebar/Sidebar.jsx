import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import SidebarSection from "./SidebarSection";
import { SIDEBAR_DATA } from "@/constants/sidebarConstants";
import { HiChevronUpDown } from "react-icons/hi2";
import logoDark from "@/assets/logo-dark.png";

const Sidebar = ({ toggleSidebar }) => {
  const [active, setActive] = useState("dashboard");
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

 const handleClick = (path, itemId) => {
  navigate(path);
  setActive(itemId);
};

  return (
    <nav className="w-64 h-screen bg-background border-r border-white/10 flex flex-col py-6 overflow-y-auto scrollbar">
      {/* LOGO */}
      <div className="mb-8 px-3 flex items-center justify-between">
        <img src={logoDark} alt="Logo" className="h-8 w-auto object-contain" />

        <div
          className="cursor-pointer text-white/70"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={toggleSidebar}
        >
          {hovered ? (
            <MdKeyboardDoubleArrowLeft size={22} />
          ) : (
            <HiOutlineBars3 size={22} />
          )}
        </div>
      </div>

      {/* BUSINESS SELECTOR */}
      <div className="flex items-center justify-between bg-white/5 mx-3 py-2 rounded-lg mb-6 cursor-pointer">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            S
          </div>
          <span className="text-sm">stationery</span>
        </div>
        <HiChevronUpDown size={18} />
      </div>

      {/* NAV SECTIONS */}
      <div className="flex-1 px-3">
        {SIDEBAR_DATA.map((section) => (
          <SidebarSection
            key={section.title}
            title={section.title}
            items={section.items}
            active={active}
            setActive={setActive}
            handleClick={handleClick}
          />
        ))}
      </div>
    </nav>


  );
};

export default Sidebar;
