import { useState, useRef, useEffect } from 'react';

export default function Dropdown({ options, selectedOption, setSelectedOption }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev); // 토글 상태
  };

  const handleSelect = (option) => {
    setSelectedOption(option.taskName); // 선택된 옵션 업데이트
    setIsOpen(false);
  };

  // 드롭다운 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block w-full" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="bg-white border border-gray-400 px-4 py-2 rounded-lg shadow-md flex items-center justify-between w-full text-gray-800"
      >
        {selectedOption}
        <span className="ml-2 text-gray-500">▼</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 bg-[#D7C9B3] border border-gray-300 mt-1 rounded-md shadow-lg w-full z-10">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option)}
              className={`w-full px-4 py-3 text-left flex justify-between items-center hover:bg-[#CAB9A3] ${
                selectedOption === option.taskName ? 'bg-[#CAB9A3] font-semibold' : ''
              }`}
            >
              <span>{option.taskName}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
