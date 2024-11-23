import { useState, useRef, useEffect } from "react";
import cn from "../../../../utils/cn";

export default function BadgeHeader({
  selectedOption,
  setSelectedOption,
  BadgeData,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { score, mentoring, user, company } = BadgeData;
  const options = ["전체", "진행", "완료"];
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-row items-center border-b pb-2">
      {/* 총점 */}
      <div className="flex items-center border p-2 rounded-md bg-gray-100">
        <h2 className="font-bold text-xl">{score}</h2>
      </div>

      {/* 각 파트별 점수 */}
      <div 
        className={cn(
          "flex-1 flex flex-row ml-4 text-gray-600",
          "gap-2 sm:gap-4 md:gap-6 lg:gap-8 text-sm sm:text-base md:text-lg lg:text-xl"
        )}
      >
        <h2>멘토링: {mentoring}</h2>
        <h2>사용자: {user}</h2>
        <h2>기업: {company}</h2>
      </div>

      {/* 드롭다운 */}
      <div className="relative inline-block" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="bg-white border border-gray-300 px-4 py-2 rounded-md shadow-md flex items-center justify-between w-32"
        >
          {selectedOption}
          <span className="ml-2 text-gray-500">▼</span>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 bg-white border border-gray-300 mt-1 rounded-md shadow-lg w-32 z-5">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
                  selectedOption === option ? "bg-gray-200 font-semibold" : ""
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
