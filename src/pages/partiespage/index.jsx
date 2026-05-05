// PartiesPage.jsx
import { useState } from "react";
import PartiesSidebar from "@/components/parties/PartiesSidebar/index.jsx";
import PartiesMainbar from "@/components/parties/PartiesMainbar/index.jsx";


const PartiesPage = () => {
  const [selectedParty, setSelectedParty] = useState(null);


  const parties = [
    {
      id: 1,
      name: "cg-group",
      address: "kathmandu",
      totalAmount: 1000,
      paymenttype: "To Receive",
      
    },
    {
      id: 2,
      name: "Agro-Group",
      address: "Bhaktapur",
      totalAmount: 2000,
      paymenttype: "Settled",
      
    },
    {
      id: 3,
      name: "cg-group",
      address: "kathmandu",
      totalAmount: 1000,
      paymenttype: "To Receive",
      
    },
    {
      id: 4,
      name: "Agro-Group",
      address: "Bhaktapur",
      totalAmount: 2000,
      paymenttype: "Settled",
      
    },
    {
      id: 5,
      name: "cg-group",
      address: "kathmandu",
      totalAmount: 1000,
      paymenttype: "To Receive",
      
    },
    {
      id: 6,
      name: "Agro-Group",
      address: "Bhaktapur",
      totalAmount: 2000,
      paymenttype: "Settled",
      
    },
    {
      id: 7,
      name: "cg-group",
      address: "kathmandu",
      totalAmount: 1000,
      paymenttype: "To Receive",
      
    },
    {
      id: 8,
      name: "Agro-Group",
      address: "Bhaktapur",
      totalAmount: 2000,
      paymenttype: "Settled",
      
    },
    
  ];

  const handleAddParty = (newParty) => {
    // API call to add party
    console.log("New party:", newParty);
    setIsAddModalOpen(false);
  };

  return (
    <div className="h-screen bg-backgrounddeep flex">
      <div className="flex flex-col lg:flex-row gap-6 h-full w-full">
        {/* Sidebar - Parties List */}
        <div className="lg:w-[400px] h-full border-r border-white/10 flex-shrink-0">
          <PartiesSidebar
            parties={parties}
            selectedParty={selectedParty}
            onSelectParty={setSelectedParty}
            onAddParty={() => setIsAddModalOpen(true)}
          />
        </div>
        <div className="p-4 flex-1 h-full "> 
          <PartiesMainbar />
        </div>
      </div>
    </div>
  );
};

export default PartiesPage;
