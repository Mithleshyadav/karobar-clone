// components/PartiesSidebar.jsx
import { useState } from "react";
import { FiSearch, FiPlus } from "react-icons/fi";
import PartyCard from "../PartiesCard";
import { Button } from "@/components/ui/button.jsx";
import { FaArrowDownShortWide } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import AddNewParty from "./AddNewParty/index.jsx";;

const PartiesSidebar = ({
  parties,
  selectedParty,
  onSelectParty,
  onAddParty,
}) => {

  const [addNewPartyOpen, setAddNewPartyOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);

  const filteredParties = parties.filter((party) =>
    party.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="bg-transparent w-full h-full flex flex-col ">
      {/* Header */}
      <div className="p-4 mb-4 flex flex-col gap-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">
            Parties ({filteredParties.length})
          </h2>
          
          <div className="relative inline-block">

          <Button 
            onClick={() => setAddNewPartyOpen((prev) => !prev)}
          className="bg-btnblue hover:bg-btnblue/90 text-base font-semibold px-3 py-5">
            <FiPlus size={20} />
            Add Party
            <MdKeyboardArrowDown
                className={`bg-btnblue/90 transition-transform ${open ? "rotate-180" : ""} `}
              />
          </Button>
          <AddNewParty
          open={addNewPartyOpen}
          setOpen={setAddNewPartyOpen}
          />
          </div>
        </div>

        <div className="flex items-center px-4 bg-white/5 py-2 rounded-lg">
          <FiSearch size={22} className="text-white/70 text-xs font-bold" />
          <input
            type="text"
            placeholder="Search parties..."
            className="bg-transparent ml-2 outline-none text-base w-full placeholder-white/40"
          />
          <span className="text-xs text-white/70 ml-6 font-bold whitespace-nowrap">
            <FaArrowDownShortWide size={16} />
          </span>
        </div>

        <div className="mt-6 flex items-center gap-2">
          <Button className="bg-transparent px-3 py-5 border border-white/10">
            Customer
          </Button>

          <Button className="bg-transparent px-3 py-5 border border-white/10">
            Supplier
          </Button>

          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 px-3 p-2 rounded-xl bg-transparent border border-white/10 hover:bg-white/10 transition"
            >
              All Payment
              <MdKeyboardArrowDown
                className={`transition-transform ${open ? "rotate-180" : ""} `}
              />
            </button>

            {/* Dropdown Menu */}
            {open && (
              <div className="absolute right-0 mt-2 w-44 bg-backgrounddeep p-2 text-white text-14 font-medium border border-white/10 rounded-xl shadow-xl overflow-hidden z-50">
                {["All Payment", "To Receive", "To Give","Settled"].map((item) => (
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

      {/* Parties List */}
      <div className="flex-1 overflow-y-auto p-2  scrollbar">
        {filteredParties.length > 0 ? (
          filteredParties.map((party) => (
            <PartyCard
              key={party.id}
              party={party}
              isSelected={selectedParty?.id === party.id}
              onClick={() => onSelectParty(party)}
            />
          ))
        ) : (
          <div className="text-center py-8 text-white/40 text-sm">
            No parties found
          </div>
        )}
      </div>
    </div>
  );
};

export default PartiesSidebar;
