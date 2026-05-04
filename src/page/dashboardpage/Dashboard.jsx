import DashboardHeader from "@/components/dashboard/mainbar/DashboardHeader"; // ✅ NEW
import StatCard from "@/components/dashboard/mainbar/StatCard";
import CashflowChart from "@/components/dashboard/mainbar/CashflowChart";
import BalanceCard from "@/components/dashboard/mainbar/BalanceCard";
import ProfileCompletion from "@/components/dashboard/mainbar/ProfileCompletion";
import ReminderCard from "@/components/dashboard/mainbar/ReminderCard";
import InviteCard from "@/components/dashboard/mainbar/InviteCard";


const Dashboard = () => {
  return (
    <div className="space-y-6 p-6">
      <DashboardHeader />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className=" lg:col-span-2 ">
          <CashflowChart />
        </div>

        <div className="space-y-6">
          <BalanceCard />
          <ProfileCompletion />
          <ReminderCard />
          <InviteCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

