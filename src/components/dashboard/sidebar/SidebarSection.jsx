import SidebarItem from "./SidebarItem";

const SidebarSection = ({ title, items, active, setActive , handleClick}) => {
  return (
    <section className="mb-6">

      {/* SECTION TITLE */}
      <h2 className="text-xs uppercase text-white/40 mb-3 px-2 tracking-wider">
        {title}
      </h2>

      {/* ITEM LIST */}
      <ul className="space-y-1">
        {items.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
            isActive={active === item.id}
            onClick={setActive}
            handleClick={handleClick}
          />
        ))}
      </ul>
    </section>
  );
};

export default SidebarSection;