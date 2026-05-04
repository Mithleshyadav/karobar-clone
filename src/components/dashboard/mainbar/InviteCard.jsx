import { FiGift } from "react-icons/fi";

const InviteCard = () => {
  return (
    <div className="bg-background p-6 rounded-xl text-left">
      <div className="flex ml-4 mb-3 text-yellow-400">
        <FiGift size={28} />
      </div>

      <h2 className=" text-xl font-bold mb-2">Invite Friends. Get Rewarded.</h2>

      <p className="text-sm text-white/60 mb-4">
        Share your invite link and earn <span className="text-white text-base font-bold">150 Coins</span>  when your friends join, and
         <span className="text-white text-base font-bold">1 Month Premium Free For Both</span> when your friend upgrades.
      </p>

      <button className="bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition">
        Copy Invite Link
      </button>
    </div>
  );
};

export default InviteCard;
