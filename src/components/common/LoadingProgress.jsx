import { useState, useEffect } from "react";
import logoDark from "@/assets/logo-dark.png";

const LoadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const increment = Math.random() * 15 + 5;
        return prev + increment;
      });
    }, 60);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-backgrounddeep flex flex-col items-center justify-center z-[9999]">
      <img src={logoDark} alt="Logo" className="h-12 object-contain mb-8" />
      
      <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all duration-300 ease-out rounded-full"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      
      <p className="text-white/50 text-sm mt-4">Loading...</p>
    </div>
  );
};

export default LoadingProgress;