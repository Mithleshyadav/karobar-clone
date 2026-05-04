import { useRef, useEffect } from "react";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

const ManagePartyList = ({ open, setOpen, onSelect }) => {
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpen]);

  const options = [
    { label: "Edit Party", icon: LuPencil },
    { label: "Delete Party", icon: RiDeleteBin6Line }
   
  ];
  if(!open) return null;
  return (
    
        <div ref={dropdownRef}
          className="absolute top-full right-0 mt-2 w-56 bg-backgrounddeep 
                      border border-white/20 rounded-xl shadow-xl z-10 p-2 space-y-1"
        >
          {options.map((item) => (
            
            <div
              key={item.label}
              onClick={() => {
                setOpen(!open);
                onSelect(item);
              }}
              className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg cursor-pointer hover:bg-white/10
        ${item.label === "Delete Party" ? "text-red-500" : "text-white/80"}
      `}>
              <item.icon size={16} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
    
  );
};

export default ManagePartyList;
