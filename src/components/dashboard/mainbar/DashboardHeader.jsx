import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const DashboardHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

      {/* LEFT → Welcome */}
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold text-white">
          Welcome, Mithlesh 👋
        </h1>
        <p className="text-white/50 text-sm mt-1">
          Here’s what’s happening with your business today.
        </p>
      </div>

      {/* RIGHT → ACTION BUTTONS */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Quick POS */}
        <button className="px-4 py-2 rounded-xl bg-[#14261e] text-white text-14 font-medium border border-green-500/20 hover:bg-green-500/20 transition">
          Quick POS
        </button>

        {/* Add Sale */}
        <button className="px-4 py-2 rounded-xl bg-btnblue text-white text-14 font-medium hover:bg-btnprimaryHover transition">
           + Add Sale
        </button>


        {/* Add Purchase */}
        <button className="px-4 py-2 rounded-xl bg-[#0091ff] text-white text-14 font-medium border border-blue-500/20 hover:bg-blue-500/20 transition">
          Add Purchase
        </button>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            Add More
            <MdKeyboardArrowDown
              className={`transition-transform ${open ? "rotate-180" : ""} `}
            />
          </button>

          {/* Dropdown Menu */}
          {open && (
            <div className="absolute right-0 mt-2 w-44 bg-backgrounddeep text-white text-14 font-medium border border-white/10 rounded-xl shadow-xl overflow-hidden z-50">
              {["Add Expense", "Add Party", "Add Item"].map((item) => (
                <div
                  key={item}
                  className="px-4 py-2 text-sm text-white/80 hover:bg-white/5 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default DashboardHeader;