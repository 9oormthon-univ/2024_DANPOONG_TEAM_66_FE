import { useEffect, useState } from 'react';
import cn from '../../utils/cn';

export default function MobileMenuButton({
  icon,
  text,
  buttonClicked,
  setButtonClicked,
}) {
  const [buttonColorOn, setButtonColorOn] = useState(false);

  useEffect(() => {
    setButtonColorOn(buttonClicked === text);
  }, [buttonClicked, text]);

  return (
    <button
      onClick={() => setButtonClicked(text)}
      className={cn(
        "flex items-center justify-center w-full py-2 relative",
        buttonColorOn
          ? "bg-theme-green border-theme-green text-white"
          : "border-gray-400 bg-white text-black",
        "hover:bg-theme-green hover:border-theme-green hover:text-white",
        "transition duration-200"
      )}
    >
      <span className="text-lg lg:text-2xl flex flex-row justify-center items-center gap-1">
        {icon}
        {text}
      </span>
    </button>
  );
}
