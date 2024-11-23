import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import cn from '../../../utils/cn';
import MenuButton from '../../Common/MenuButton';
import MobileMenuButton from '../../Common/MobileMenuButton';
import TaskPage from './Tasks/TaskPage';
import BadgePage from './Badges/BadgePage';
import PortfolioPage from './Portfolio/PortfolioPage';
import { GoStack, GoBookmark, GoFile } from "react-icons/go";

export default function MyPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // 현재 URL 경로를 기준으로 버튼 상태 설정
  const currentPath = location.pathname.split('/').pop();
  const [buttonClicked, setButtonClicked] = useState(
    currentPath === 'badges'
      ? '뱃지'
      : currentPath === 'portfolio'
      ? '포트폴리오'
      : '과제 현황'
  );

  const menuItems = [
    { icon: <GoStack />, text: '과제 현황', path: 'tasks' },
    { icon: <GoBookmark />, text: '뱃지', path: 'badges' },
    { icon: <GoFile />, text: '포트폴리오', path: 'portfolio' },
  ];

  // 버튼 클릭 시 상태 변경 및 라우팅
  const handleButtonClick = (text, path) => {
    setButtonClicked(text);
    navigate(`/mypage/${path}`);
  };

  useEffect(() => {
    // URL 변경 시 버튼 상태 업데이트
    setButtonClicked(
      currentPath === 'badges'
        ? '뱃지'
        : currentPath === 'portfolio'
        ? '포트폴리오'
        : '과제 현황'
    );
  }, [currentPath]);

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
            setButtonClicked={() => handleButtonClick(item.text, item.path)}
          />
        ))}
      </div>

      <div className="flex flex-1">
        {/* 데스크톱 환경: 사이드바 */}
        <div
          className={cn(
            'hidden md:flex border-r-2 border-black flex-col justify-top min-w-xs min-h-screen'
          )}
        >
          <p className="mb-2"></p>
          {menuItems.map((item) => (
            <MenuButton
              key={item.text}
              icon={item.icon}
              text={item.text}
              buttonClicked={buttonClicked}
              setButtonClicked={() => handleButtonClick(item.text, item.path)}
            />
          ))}
        </div>

        {/* 콘텐츠 영역 */}
        <div className="flex-1">
          <Routes>
            <Route path="tasks" element={<TaskPage />} />
            <Route path="badges" element={<BadgePage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="*" element={<TaskPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
