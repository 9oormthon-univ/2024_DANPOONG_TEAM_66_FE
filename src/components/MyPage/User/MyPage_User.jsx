import { useState } from 'react';
import cn from '../../../utils/cn';
import MenuButton from '../MenuButton';
import MobileMenuButton from '../MobileMenuButton';
import TaskPage from './Tasks/TaskPage';
import BadgePage from './Badges/BadgePage';
import PortfolioPage from './Portfolio/PortfolioPage';
import { GoStack, GoBookmark, GoFile } from "react-icons/go";

export default function MyPage() {
  const [buttonClicked, setButtonClicked] = useState('과제 현황');
  const menuItems = [
    { icon: <GoStack />, text: "과제 현황" },
    { icon: <GoBookmark />, text: "뱃지" },
    { icon: <GoFile />, text: "포트폴리오" },
  ];

  return (
    <div className="h-screen flex flex-col">
      {/* 모바일 환경: 상단 메뉴 */}
      <div className="flex md:hidden bg-white border-b border-gray-300 shadow-sm">
        {menuItems.map((item) => (
          <MobileMenuButton
            key={item.text}
            icon={item.icon}
            text={item.text}
            buttonClicked={buttonClicked}
            setButtonClicked={setButtonClicked}
          />
        ))}
      </div>

      <div className="flex flex-1">
        {/* 데스크톱 환경: 사이드바 */}
        <div
          className={cn(
            "hidden md:flex border-r-2 border-black flex-col justify-top min-w-xs min-h-screen"
          )}
        >
          <p className="mb-2"></p>
          {menuItems.map((item) => (
            <MenuButton
              key={item.text}
              icon={item.icon}
              text={item.text}
              buttonClicked={buttonClicked}
              setButtonClicked={setButtonClicked}
            />
          ))}
        </div>

        {/* 콘텐츠 영역 */}
        <div className="flex-1">
          {buttonClicked === "과제 현황" && <TaskPage />}
          {buttonClicked === "뱃지" && <BadgePage />}
          {buttonClicked === "포트폴리오" && <PortfolioPage />}
        </div>
      </div>
    </div>
  );
}
