// components/PartyCard.jsx
import { FiChevronRight } from "react-icons/fi";

const PartyCard = ({ party, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        p-3 rounded-lg w-full transition-all cursor-pointer hover:bg-white/5
        ${isSelected ? "bg-btnblue/10 " : "bg-transparent "}
      `}
    >
      <div className="flex items-center w-full justify-between">
        <div className="flex gap-2">
          <div className="w-12 h-12 rounded-lg bg-btnblue flex items-center justify-center text-white font-bold">
            M
          </div>
          <div className=" gap-2">
            <h2 className=" text-base font-medium text-white/90">{party.name}</h2>
            <h2 className="text-base text-white/70">9811112222</h2>
          </div>
        </div>
        <div className="flex flex-col text-base items-end justify-center ">
          <h2 className="font-medium text-btnblue ">Rs 1000</h2>
          <h3 className="text-white/60">To Receive</h3>
        </div>
      </div>
    </div>
  );
};

export default PartyCard;
