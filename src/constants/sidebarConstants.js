import { RxDashboard } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { MdOutlineInventory2 } from "react-icons/md";
import { FiTag } from "react-icons/fi";
import { IoMdCart } from "react-icons/io";
// import { SiExpensify } from "react-icons/si";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { SiSmoothcomp } from "react-icons/si";
import { MdOutlineManageAccounts } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { MdOutlinePeople } from "react-icons/md";
import { LuFileInput } from "react-icons/lu";
import { MdHandyman } from "react-icons/md";
import { FiGift } from "react-icons/fi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { FaClockRotateLeft } from "react-icons/fa6";
import { LuSettings } from "react-icons/lu";

export const SIDEBAR_DATA = [
  {
    title: "Business",
    items: [
      { id: "dashboard", label: "Dashboard", icon: RxDashboard, path: "/dashboard" },
      { id: "parties", label: "Parties", icon: CgProfile, path: "/parties" },
      { id: "inventory", label: "Inventory", icon: MdOutlineInventory2 },
      { id: "sales", label: "Sales", icon: FiTag },
      { id: "purchase", label: "Purchase", icon: IoMdCart },
      { id: "expense", label: "Expense", icon: MdOutlineAccountBalanceWallet, path: "/expense" },
      { id: "other-income", label: "Other Income", icon: SiSmoothcomp },
      {
        id: "manage-accounts",
        label: "Manage Accounts",
        icon: MdOutlineManageAccounts,
      },
    ],
  },
  {
    title: "Management",
    items: [
      { id: "reports", label: "Reports", icon: TbReportAnalytics },
      { id: "manage-staffs", label: "Manage Staffs", icon: MdOutlinePeople },
      { id: "import-data", label: "Import Data", icon: LuFileInput },
      { id: "business-tools", label: "Business Tools", icon: MdHandyman },
      { id: "refer", label: "Refer & Win", icon: FiGift },
    ],
  },
  {
    title: "Others",
    items: [
      { id: "help", label: "Help & Support", icon: MdOutlineSupportAgent },
      { id: "tutorials", label: "Tutorials", icon: MdOutlineSmartDisplay },
      { id: "new", label: "What's New", icon: FaClockRotateLeft },

      { id: "settings", label: "Settings", icon: LuSettings },
    ],
  },
];

// export const SIDEBAR_DATA = [
//   {
//     title: "Business",
//     items: [
//       { id: "dashboard", label: "Dashboard", icon: "📊" },
//       { id: "parties", label: "Parties", icon: "👥" },
//       { id: "inventory", label: "Inventory", icon: "📦" },
//       { id: "sales", label: "Sales", icon: "🛒" },
//     ],
//   },
//   {
//     title: "Management",
//     items: [
//       { id: "reports", label: "Reports", icon: "📈" },
//       { id: "staff", label: "Manage Staffs", icon: "👨‍💼" },
//     ],
//   },
//   {
//     title: "Others",
//     items: [
//       { id: "settings", label: "Settings", icon: "⚙️" },
//       { id: "help", label: "Help & Support", icon: "❓" },
//     ],
//   },
// ];
