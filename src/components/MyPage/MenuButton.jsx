import { useState, useEffect } from 'react';
import cn from '../../utils/cn';

export default function MenuButton({ icon, text, buttonClicked, setButtonClicked}) {
  const[buttonColorOn, setButtonColorOn] = useState(false);
  useEffect(() => {
    if(buttonClicked === text) {
      setButtonColorOn(true);
    } else {
      setButtonColorOn(false);
    }
  }, [buttonClicked, text]);

  return (
    <button 
        onClick={() => setButtonClicked(text)}
        className={cn(
          "relative rounded-lg border-2 p-2 mx-6 my-4 w-48 lg:w-56",
          buttonColorOn ? "bg-theme-green border-theme-green text-white" : "border-gray-400 bg-white text-black",
          "hover:bg-theme-green hover:border-theme-green hover:text-white",
          "transition duration-200 flex items-center justify-center"
      )}
    >
      {/* 아이콘: 좌측 고정 */}
      <span className="text-xl lg:text-2xl absolute left-4 flex items-center">
        {icon}
      </span>
      {/* 텍스트: 중앙 정렬 */}
      <span className='text-lg lg:text-xl'>
        {text}
      </span>
    </button>
  );
}
