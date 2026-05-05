import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AuthPage from "./components/auth/AuthPage";
import Dashboard from "./pages/dashboardpage/Dashboard";
import DashboardLayout from "./components/common-layout/CommonLayoutView";
import LoadingProgress from "./components/common/LoadingProgress";
import PartiesPage from "./pages/partiespage/index.jsx";
import AddTransactionForm from "./components/parties/AddTransactionForm/TransactionForm/index.jsx"


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen text-white relative">
      {isLoading && <LoadingProgress />}

      <div className={`relative z-10 ${isLoading ? "hidden" : ""}`}>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/parties" element={<PartiesPage />} />
            <Route path="/transactionform" element={<AddTransactionForm />} />
          
          </Route>

          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
