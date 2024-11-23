import { useState } from 'react';
import cn from '../utils/cn';
import MenuButton from '../components/MyPage/MenuButton';
import TaskPage from '../components/MyPage/Tasks/TaskPage';
import BadgePage from '../components/MyPage/Badges/BadgePage';
import PortfolioPage from '../components/MyPage/Portfolio/PortfolioPage';
import { GoStack, GoBookmark, GoFile } from "react-icons/go";

export default function MyPage() {
  const[buttonClicked, setButtonClicked] = useState('과제 현황');
  return (
    <div className="flex flex-row h-screen">
      <div className={cn(
        "border-r-2 border-black flex flex-col justify-top min-w-xs min-h-screen"
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
      <div className="flex-1 ">
        {(buttonClicked === "과제 현황") && <TaskPage />}
        {(buttonClicked === "뱃지") && <BadgePage />}
        {(buttonClicked === "포트폴리오") && <PortfolioPage />}
      </div>
    </div>
  );
}