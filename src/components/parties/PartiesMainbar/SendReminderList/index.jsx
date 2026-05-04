import { useRef, useEffect } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { BsStopwatch } from "react-icons/bs";
import { CiShare2 } from "react-icons/ci";


const SendReminderList = ({ open, setOpen, onSelect }) => {
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
    { label: "Copy Message", icon: MdOutlineContentCopy },
    { label: "Whatsapp", icon: FaWhatsapp },
    { label: "Set Reminder", icon: BsStopwatch },
    { label: "Share Transaction Link", icon: CiShare2 }
   
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
              className="flex items-center gap-2 px-3 py-2 text-sm text-white/80 rounded-lg cursor-pointer hover:bg-white/10"
            >
              <item.icon size={16} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
    
  );
};

export default SendReminderList;
