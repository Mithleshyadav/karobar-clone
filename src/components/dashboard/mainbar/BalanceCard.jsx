import { HiChevronUpDown } from "react-icons/hi2";

const BalanceCard = () => {
  return (
    <div className="bg-transparent border border-white/10 p-5 rounded-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-white/70 text-sm">Total Balance (Cash & Bank)</h3>

        <button className="text-white/60 hover:text-white">
          <HiChevronUpDown size={20} />
        </button>
      </div>

      <h2 className="text-2xl font-semibold mt-2">Rs. 0</h2>
    </div>
  );
};

export default BalanceCard;
