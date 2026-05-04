const SidebarItem = ({ item, isActive, handleClick }) => {
  return (
    <li>
      <button
        onClick={() => handleClick(item.path, item.id)}
        className={`
          w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
          transition-all duration-200

          ${isActive
            ? "bg-btnprimary text-black shadow-md"
            : "text-white/80 hover:bg-white/5 hover:text-white"
          }
        `}
      >
        <item.icon size={20}className="text-md font-bold "/>
        <span>{item.label}</span>
      </button>
    </li>
  );
};

export default SidebarItem;