import React, { useState } from "react";

const QrPopUp = ({ onClose }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div
      className="fixed inset-0 bg-background/10 flex items-center justify-center z-50 m-4"
      style={{ backdropFilter: "blur(2px)" }}
    >
      <div className="bg-background w-[440px] rounded-2xl p-6 relative shadow-xl border border-white/10 animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-white text-2xl font-semibold mb-4">
          Login by Scanning QR Code
        </h2>

        {/* Instructions */}
        <div className="space-y-8 pt-4">
          <ol className="space-y-3 pl-6 list-decimal">
            <li className="text-lg text-white/80 [&>strong]:font-medium">
              Open Chalayo mobile App
            </li>
            <li className="text-lg text-white/80 [&>strong]:font-medium">
              Click on More and select Desktop Login
            </li>
            <li className="text-lg text-white/80 [&>strong]:font-medium">
              Point your phone at this screen to scan the QR Code
            </li>
          </ol>

          <div className="flex justify-center relative min-h-[180px]">
            {/* Loader Spinner */}
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-12 h-12 border-4 border-btnprimary/20 border-t-btnprimary rounded-full animate-spin"></div>
              </div>
            )}

            <div
              className={`bg-white p-3 rounded-md transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"}`}
            >
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=demo"
                alt="QR"
                onLoad={() => setLoading(false)}
                className="w-[180px] h-[180px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrPopUp;
