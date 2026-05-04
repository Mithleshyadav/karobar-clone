import { useRef, useEffect } from "react";
import { FiTag } from "react-icons/fi";
import { IoMdCart } from "react-icons/io";
import { TbMoneybagMove } from "react-icons/tb";
import { TbMoneybagMoveBack } from "react-icons/tb";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { TbFileInvoice } from "react-icons/tb";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const TransactionsTypeList = ({ open, setOpen, onSelect }) => {
  const dropdownRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpen]);

  /**
   * Navigate to the given route path.
   * @param {string|undefined} path - The route path to navigate to; if `undefined`, navigation is a no-op in the router.
   */
  function handleclick(path){
    navigate(path);
  }

  const options = [
    { label: "Sales", icon: FiTag, path: "/transactionform" },
    { label: "Purchase", icon: IoMdCart },
    { label: "Payment In", icon: TbMoneybagMoveBack },
    { label: "Payment Out", icon: TbMoneybagMove },
    { label: "Sales Return", icon: FiTag },
    { label: "Quotation", icon: TbFileInvoice },
    { label: "Purchase Return", icon: MdOutlineShoppingCartCheckout },
    { label: "Adjust Balance", icon: FaArrowRightArrowLeft },
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
                handleclick(item.path)
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

export default TransactionsTypeList;
