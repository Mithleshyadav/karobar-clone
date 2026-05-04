const ProfileCompletion = () => {
  const percentage = 30;

  const radius = 32;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="bg-background p-5 rounded-xl flex items-center gap-4">
      {/* ✅ LEFT (CIRCLE NOW FIRST) */}
      <div className="relative h-20 w-20">
        <svg className="w-full h-full transform -rotate-90">
          {/* BACKGROUND CIRCLE */}
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="6"
            fill="none"
          />

          {/* PROGRESS CIRCLE */}
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="#22C55E"
            strokeWidth="6"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={
              circumference - (circumference * percentage) / 100
            }
            strokeLinecap="round"
          />
        </svg>

        {/* CENTER TEXT */}
        <div className="absolute inset-0 flex items-center justify-center text-green-400 text-sm font-semibold">
          {percentage}%
        </div>
      </div>

      {/* ✅ RIGHT (TEXT CONTENT) */}
      <div className="flex-1">
        <h3 className="font-semibold">Complete your Profile</h3>
        <p className="text-sm text-white/60 mt-1">
          You can use more app features after completing your business profile
        </p>

        <button className="mt-3 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition">
          Complete Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCompletion;

