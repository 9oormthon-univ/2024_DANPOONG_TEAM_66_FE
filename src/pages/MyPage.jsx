import { useState } from 'react';
import cn from '../utils/cn';
import MenuButton from '../components/MyPage/MenuButton';
import { GoStack, GoBookmark, GoFile } from "react-icons/go";

export default function MyPage() {
  const[buttonClicked, setButtonClicked] = useState('');
  return (
    <div className="flex flex-col">
      <div className={cn(
        "border-r-2 border-black flex flex-col justify-top max-w-xs min-h-screen"
      )}>
        <p className='mb-2'></p>
        <MenuButton 
          icon={<GoStack />}
          text="과제 현황"
          buttonClicked={buttonClicked}
          setButtonClicked={setButtonClicked}
        />
        <MenuButton
          icon={<GoBookmark />}
          text="뱃지"
          buttonClicked={buttonClicked}
          setButtonClicked={setButtonClicked}
        />
        <MenuButton
          icon={<GoFile />}
          text="포트폴리오" 
          buttonClicked={buttonClicked}
          setButtonClicked={setButtonClicked}
        />
      </div>
    </div>
  );
}