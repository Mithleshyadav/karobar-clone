import { useState } from "react";
import { Button } from "@/components/ui/button.jsx";
import { MdOutlinePictureAsPdf } from "react-icons/md";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FiSearch, FiPlus } from "react-icons/fi";
import { HiChevronUpDown } from "react-icons/hi2";
import TransactionsTable from "../TransactionsTable/index.jsx";
import TransactionsSortList from "./TransactionsSortList/index.jsx";
import TransactionsTypeList from "./TransactionTypeList/index.jsx";
import SendReminderList from "./SendReminderList/index.jsx";
import ManagePartyList from "./ManagePartyList/index.jsx";

const PartiesMainbar = () => {
  const [isTransactionsListOpen, setIsTransactionsListOpen] = useState(false);
  const [isTransactionsTypeOpen, setIsTransactionsTypeOpen] = useState(false);
  const [isReminderOpen, setIsReminderOpen] = useState(false);
  const [isManagePartyOpen, setIsManagePartyOpen] = useState(false);

  const handleTransactionsSort = (option) => {};

  const handleTransactionsTypeSelect = (option) => {};
  const handleReminderSelect = (option) => {};
  const handleManagePartySelect = (option) => {};

  return (
    <div className="flex flex-col h-full w-full">
      {/* Upper part */}
      <div className="border-b border-b-white/10 ">
        <div className="flex items-center w-full justify-between mb-4">
          <div className="flex flex-col items-left justify-center space-y-4">
            <div className="flex gap-2 ">
              <div className="w-12 h-12 rounded-lg bg-btnblue flex items-center justify-center text-white font-bold">
                M
              </div>
              <div>
                <h3 className="font-medium text-white text-lg font-semibold">
                  cg-group
                </h3>
                <p className="text-xs text-white/70 text-lg font-semibold">
                  9811112222
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-6">
              <div className="relative inline-block">
                <Button
                onClick={() => setIsManagePartyOpen((prev) => !prev)}
                className="bg-transparent p-2 border border-white/10 hover:bg-white/5">
                Manage Party
              </Button>
              <ManagePartyList
                open={isManagePartyOpen}
                setOpen={setIsManagePartyOpen}
                onSelect={handleManagePartySelect}
              />
              </div>
              <Button className="bg-transparent border border-white/10 hover:bg-white/5">
                <MdOutlinePictureAsPdf size={20} />
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-end justify-center space-y-4 text-lg font-semibold ">
            <div className="text-right">
              <h2 className=" text-white ">Rs 1000</h2>
              <h3>To Receive</h3>
            </div>
            <div  className="relative inline-block">

            <Button 
            onClick={() => setIsReminderOpen((prev) => !prev)}
            className="bg-transparent gap-2 border border-white/10 hover:bg-white/5">
              <MdOutlineNotificationsActive size={20} />
              Send Reminder
            </Button>
            <SendReminderList
              open={isReminderOpen}
              setOpen={setIsReminderOpen}
              onSelect={handleReminderSelect}
            />
            </div>
          </div>
        </div>
      </div>
      {/* Lower part */}
      <div className="flex flex-col py-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2>Transactions (5)</h2>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <div className="flex items-center px-4 bg-transparent py-2 rounded-lg border border-white/10 hover:bg-white/5">
              <FiSearch size={22} className="text-white/70 text-xs font-bold" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent ml-2 outline-none text-base w-full placeholder-white/40"
              />
            </div>
            <div className="relative inline-block">
              <Button
                onClick={() => setIsTransactionsListOpen((prev) => !prev)}
                className="bg-transparent gap-2 px-4 py-5 border border-white/10 hover:bg-white/5"
              >
                <HiChevronUpDown size={16} />
                Sort
              </Button>
              <TransactionsSortList
                open={isTransactionsListOpen}
                setOpen={setIsTransactionsListOpen}
                onSelect={handleTransactionsSort}
              />
            </div>
            <div className="relative inline-block">
              <Button
                onClick={() => setIsTransactionsTypeOpen((prev) => !prev)}
                className="bg-btnblue hover:bg-btnblue/90 text-base font-semibold px-4 py-5"
              >
                <FiPlus size={20} />
                Add Transaction
              </Button>
              <TransactionsTypeList
                open={isTransactionsTypeOpen}
                setOpen={setIsTransactionsTypeOpen}
                onSelect={handleTransactionsTypeSelect}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-background border border-white/10 rounded-lg">
          <TransactionsTable />
        </div>
      </div>
    </div>
  );
};

export default PartiesMainbar;
