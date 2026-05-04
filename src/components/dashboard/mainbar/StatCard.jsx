import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { FiTag } from "react-icons/fi";
import { IoMdCart } from "react-icons/io";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

const statdata = [
  { title: "To Receive", value: 5000, color: "#142a21", icon: FiArrowDown,iconColor: "#39b88c" },
  { title: "To Give", value: 2000, color: "#24151b", icon: FiArrowUp ,iconColor: "#e54666" },
  { title: "Sales (Chaitra)", value: 10000, color: "#142a21", icon: FiTag, iconColor: "#39b88c"  },
  { title: "Purchase (Chaitra)", value: 7000, color: "#141d29", icon: IoMdCart, iconColor: "#0880ea" },
  { title: "Expense (Chaitra)", value: 3000, color: "#24151b", icon: MdOutlineAccountBalanceWallet, iconColor: "#e54666" },
];

const StatCard = () => {
  return statdata.map((item) => (
      <div
      key={item.title}
      className="p-4 rounded-xl shadow-lg text-white"
      style={{ backgroundColor: item.color }}
    >
      <item.icon size={20}className="text-md font-bold " style={{ color: item.iconColor }} />
      <p className="text-sm text-white/60 mt-4">{item.title}</p>
      <h2 className="text-xl font-bold mt-2">{item.value}</h2>
    </div>
  ));
};

export default StatCard;
