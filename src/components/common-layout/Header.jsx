import { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

import { FiSearch, FiBell, FiMoon } from "react-icons/fi";
import { FaRegKeyboard } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";

const LANGUAGES = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "np", name: "Nepali", flag: "🇳🇵" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "hi", name: "Hindi", flag: "🇮🇳" },
  { code: "bn", name: "Bengali", flag: "🇧🇩" },
];

const Header = ({ isSidebarOpen, toggleSidebar }) => {
  const [hovered, setHovered] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [langSearch, setLangSearch] = useState("");
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);

  const filteredLang = LANGUAGES.filter((lang) =>
    lang.name.toLowerCase().includes(langSearch.toLowerCase())
  );

  return (
    <div className="sticky h-[70px] top-0 z-50 backdrop-blur-lg flex items-center justify-between border-b border-white/10 px-6">

      {/* LEFT */}
      <div className="flex items-center gap-4">
        {!isSidebarOpen && (
          <div
            className="cursor-pointer text-white/70"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={toggleSidebar}
          >
            {hovered ? (
              <MdKeyboardDoubleArrowLeft size={22} />
            ) : (
              <HiOutlineBars3 size={22} />
            )}
          </div>
        )}
      </div>

      {/* ✅ CENTER SEARCH (ONLY THIS MOVED) */}
      <div className="absolute left-1/2 -translate-x-1/2 flex  max-w-[90%]">
        <div className="flex items-center px-4 bg-white/5 py-2 rounded-lg">
          <FiSearch size={22} className="text-white/70 text-xs font-bold" />
          <input
            type="text"
            placeholder="Search or create anything..."
            className="bg-transparent ml-2 outline-none text-base w-full placeholder-white/40"
          />
          <span className="text-xs text-white/70 ml-6 font-bold whitespace-nowrap">
            Ctrl + K
          </span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5 ">
        {/* LANGUAGE SELECTOR */}
        <div className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setIsLangOpen(!isLangOpen)}
          >
            <span className="text-xl">{selectedLang.flag}</span>
            <RiArrowDropDownLine
              size={20}
              className={`text-white/70 transition-transform ${
                isLangOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {isLangOpen && (
            <div className="absolute right-0 top-full mt-2 w-56 bg-background border border-white/10 rounded-lg shadow-xl overflow-hidden z-50">
              <div className="p-2 border-b border-white/10">
                <input
                  type="text"
                  placeholder="Search language..."
                  value={langSearch}
                  onChange={(e) => setLangSearch(e.target.value)}
                  className="w-full bg-white/5 px-3 py-2 rounded-md outline-none text-sm placeholder-white/40"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              <div className="max-h-60 overflow-y-auto scrollbar">
                {filteredLang.map((lang) => (
                  <div
                    key={lang.code}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 cursor-pointer"
                    onClick={() => {
                      setSelectedLang(lang);
                      setIsLangOpen(false);
                      setLangSearch("");
                    }}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="text-sm">{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <FaRegKeyboard size={20} className="cursor-pointer text-white/70" />
        <FiBell size={20} className="cursor-pointer text-white/70" />
        <FiMoon size={20} className="cursor-pointer text-white/70" />

        <div className="flex items-center gap-2 hover:bg-backgroundLight px-2 py-1 rounded-lg cursor-pointer">
          <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center font-semibold">
            M
          </div>
          <span className="text-sm">Mithlesh Yadav</span>
          <RiArrowDropDownLine size={20} className="text-white/70" />
        </div>
      </div>

    </div>
  );
};

export default Header;

