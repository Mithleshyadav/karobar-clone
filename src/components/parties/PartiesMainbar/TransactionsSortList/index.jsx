import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";

const TransactionsSortList = ({ open, setOpen, onSelect }) => {
  const ref = useRef();

   useEffect(() => {
    const handleClickOutside = (e) =>{
       if(ref.current && !ref.current.contains(e.target)){
        setOpen(false);
       }
      }
      document.addEventListener("mousedown", handleClickOutside);

      return () => document.removeEventListener("mousedown", handleClickOutside);

   },[setOpen])
  // Close on outside click

  const sortOptions = [
    "Latest",
    "Oldest",
    "Amount: Low to High",
    "Amount: High to Low",
  ];

  const filterOptions = [
    "All Transactions",
    "Sales",
    "Purchase",
    "Payment In",
    "Payment Out",
    "Sales Return",
    "Purchase Return",
    "Quotation",
    "Add Balance",
    "Reduce Balance",
  ];

  if(!open) return null;

  return (
    <div
    ref={ref}
      className="  bg-backgrounddeep
       w-60 h-[400px] absolute top-full left-0 mt-2 overflow-y-auto scrollbar border border-white/20 rounded-xl 
       shadow-xl z-10 p-3 space-y-4"
    >
      {/* Sort By */}
     <div>
        <h3 className="text-xs text-white/50 mb-2 uppercase tracking-wide">
          Sort By
        </h3>
        <div className="space-y-1">
          {sortOptions.map((item) => (
            <div
             key={item}
            onClick={ ()=> {
              setOpen(false);
              onSelect(item);
            }}
             
              className="px-3 py-2 text-sm text-white/80 rounded-lg cursor-pointer hover:bg-white/10"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Filter By */}
      <div>
        <h3 className="text-xs text-white/50 mb-2 uppercase tracking-wide">
          Filter By
        </h3>
        <div className="space-y-1">
          {filterOptions.map((item) => (
            <div
              key={item}
            onClick={ ()=> {
              setOpen(false);
              onSelect(item);
            }}
             
              className="px-3 py-2 text-sm text-white/80 rounded-lg cursor-pointer hover:bg-white/10"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionsSortList;
