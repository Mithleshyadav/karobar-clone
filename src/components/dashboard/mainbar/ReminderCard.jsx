const ReminderCard = () => {
  return (
    <div className="bg-transparent p-5 rounded-xl border border-white/10">
      
      {/* TOP HEADING (LEFT) */}
      <h2 className="text-xl text-bold text-white/70">
        Upcoming Reminders (0)
      </h2>

      {/* CENTER CONTENT */}
      <div className="flex flex-col items-center text-center mt-12">
        
        {/* MAIN HEADING */}
        <h3 className="text-lg font-semibold ">
          Reminder Not Created Yet!
        </h3>

        {/* DESCRIPTION */}
        <p className="text-white/60 text-lg mt-1">
          You haven’t added any reminders yet. Start by creating one.
        </p>

        {/* BUTTON */}
        <button className="mt-4 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition">
          + Add New Reminder
        </button>

      </div>

    </div>
  );
};

export default ReminderCard;