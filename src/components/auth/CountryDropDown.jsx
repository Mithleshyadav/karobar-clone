import { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const LANGUAGES = [
  { id: "en", label: "English", flag: "🇬🇧" },
  { id: "np", label: "Nepali", flag: "🇳🇵" },
  { id: "hi", label: "Hindi", flag: "🇮🇳" },
  { id: "ar", label: "Arabic", flag: "🇸🇦" },
  { id: "es", label: "Spanish", flag: "🇪🇸" },
  { id: "zh", label: "Chinese", flag: "🇨🇳" },
];

const CountryDropDown = () => {
  const [language, setLanguage] = useState(LANGUAGES[0]); // Default to English
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Selected */}
      <div
        onClick={() => setIsLangOpen(!isLangOpen)}
        className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg border border-white/10 cursor-pointer hover:bg-white/20 transition-all duration-200"
      >
        <span className="text-xl leading-none">{language.flag}</span>
        <span className="text-sm font-medium text-white">{language.label}</span>
        <MdKeyboardArrowDown
          className={`ml-1 text-lg text-white transition-transform duration-300 ${
            isLangOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown */}
      {isLangOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-backgrounddeep border border-white/10 rounded-xl shadow-2xl overflow-hidden z-[100] transition-all animate-in fade-in slide-in-from-top-1 duration-200">
          <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 p-1">
            {LANGUAGES.map((lang) => (
              <div
                key={lang.id}
                onClick={() => {
                  setLanguage(lang);
                  setIsLangOpen(false);
                }}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${
                  language.id === lang.id
                    ? "bg-btnprimary/10 text-btnprimary"
                    : "text-white/80 hover:bg-white/5"
                }`}
              >
                <span className="text-xl leading-none">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDropDown;

