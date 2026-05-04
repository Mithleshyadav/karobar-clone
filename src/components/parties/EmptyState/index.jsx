import { MdUploadFile } from "react-icons/md";
import { Button } from "@/components/ui/button.jsx";

const EmptyState = ({ title, message }) => {
  const [addNewPartyOpen, setAddNewPartyOpen] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-50 h-50 bg-white/5 rounded-full flex items-center justify-center mb-4">
        <img src={url} alt="img" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-lg font-semibold text-white mb-2">
          Let's add your First Party
        </h3>
        <p className="text-white/40 text-sm max-w-sm">
          Click on the add new party button and manage receivables & payables
          with them
        </p>
      </div>
      <div className="flex gap-2">
        <div className="relative inline-block">
          <Button
            onClick={() => setAddNewPartyOpen((prev) => !prev)}
            className="bg-btnblue hover:bg-btnblue/90 text-base font-semibold px-3 py-5"
          >
            <FiPlus size={20} />
            Add Party
            <MdKeyboardArrowDown
              className={`bg-btnblue/90 transition-transform ${open ? "rotate-180" : ""} `}
            />
          </Button>
          <AddNewParty open={addNewPartyOpen} setOpen={setAddNewPartyOpen} />
        </div>
        <Button className="bg-transparent px-3 py-4 border border-white/10">
          <MdUploadFile size={16} />
          Import Parties
        </Button>
      </div>
    </div>
  );
};

export default EmptyState;
