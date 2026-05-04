import { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { COUNTRY_CODES } from "../../constants/authConstants";

const CountryCodeSelector = ({ selectedCountry, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dropdownRef = useRef(null);
  const listRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter countries based on search
  const filteredCountries = COUNTRY_CODES.filter(
    (c) =>
      c.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.code.includes(searchQuery)
  );

  // Reset selection when search changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  // Handle Keyboard Navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredCountries.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCountries.length) % filteredCountries.length);
    } else if (e.key === "Enter" && filteredCountries.length > 0) {
      onSelect(filteredCountries[selectedIndex]);
      setIsOpen(false);
    }
  };

  // Auto-scroll to selected index
  useEffect(() => {
    if (isOpen && listRef.current) {
      const selectedItem = listRef.current.children[selectedIndex];
      if (selectedItem) {
        selectedItem.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex, isOpen]);

  return (
    <div className="relative h-full" ref={dropdownRef}>
      {/* Selection Box */}
      <div
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) {
            setSearchQuery("");
            setSelectedIndex(0);
          }
        }}
        className="flex items-center gap-1 px-3 py-3 h-full cursor-pointer hover:bg-white/5 transition-colors rounded-l-xl"
      >
        <span className="text-xl leading-none">{selectedCountry.flag}</span>
        <span className="text-white font-medium text-sm leading-none">{selectedCountry.code}</span>
        <MdKeyboardArrowDown
          className={`text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full mt-2 left-0 w-max min-w-[260px] max-w-[320px] max-h-[400px] bg-[#1E1E23] rounded-xl shadow-[0_10px_50px_rgba(0,0,0,0.5)] overflow-hidden z-[60] flex flex-col transition-all duration-200">
          {/* Search Header */}
          <div className="p-2 bg-white/[0.04]">
            <input
              type="text"
              placeholder="Search country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full px-3 py-2 bg-white/5 border-none rounded-lg text-sm text-white focus:outline-none focus:ring-1 focus:ring-yellow-400 placeholder-white/20 transition-all font-medium"
              autoFocus
            />
          </div>

          {/* List */}
          <div
            ref={listRef}
            className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 p-2 space-y-1"
          >
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country, index) => (
                <div
                  key={`${country.iso}-${country.code}`}
                  onClick={() => {
                    onSelect(country);
                    setIsOpen(false);
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200 ${index === selectedIndex
                      ? "bg-yellow-400/10 shadow-sm"
                      : "hover:bg-white/5"
                    } ${selectedCountry.iso === country.iso && selectedCountry.code === country.code
                      ? "text-yellow-400"
                      : "text-white"
                    }`}
                >
                  <span className="text-xl leading-none">{country.flag}</span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-medium truncate">
                      {country.country}
                    </span>
                    <span className="text-xs text-white/40 leading-none mt-0.5">
                      {country.code}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-white/40 text-sm">
                No countries found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryCodeSelector;
