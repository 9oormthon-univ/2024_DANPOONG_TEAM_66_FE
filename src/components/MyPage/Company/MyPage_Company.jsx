import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import cn from '../../../utils/cn';
import MenuButton from '../../Common/MenuButton';
import MobileMenuButton from '../../Common/MobileMenuButton';
import TaskRegisterPage from './TaskRegister/TaskRegisterPage';
import TaskStatus from './TaskStatus/TaskStatusPage';
import { PiNoteBlank, PiCalendarCheck } from "react-icons/pi";

// 더미 데이터
const companyData = {
  name: "(주) 구름톤회사",
};

export default function MyPage_Company() {
  const navigate = useNavigate();
  const location = useLocation();

  // 현재 URL 경로를 기준으로 버튼 상태 설정
  const currentPath = location.pathname.split('/').pop();
  const [buttonClicked, setButtonClicked] = useState(
    currentPath === 'task-status' ? '과제 진행 현황' : '과제 등록'
  );

  const menuItems = [
    { icon: <PiNoteBlank />, text: '과제 등록', path: 'task-register' },
    { icon: <PiCalendarCheck />, text: '과제 진행 현황', path: 'task-status' },
  ];

  // 버튼 클릭 시 상태 변경 및 라우팅
  const handleButtonClick = (text, path) => {
    setButtonClicked(text);
    navigate(`/mycompany/${path}`);
  };

  useEffect(() => {
    // URL 변경 시 버튼 상태 업데이트
    setButtonClicked(
      currentPath === 'task-status' ? '과제 진행 현황' : '과제 등록'
    );
  }, [currentPath]);

  return (
    <div className="h-screen flex flex-col">
      {/* 모바일 환경: 상단 메뉴 */}
      <div className="flex md:hidden bg-white border-b border-gray-300 shadow-sm mb-4">
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
            'hidden md:flex border-r-2 border-black flex-col justify-top items-center min-w-xs min-h-screen'
          )}
        >
          <h2 className="font-bold text-3xl text-[#8F6767] py-4">
            {companyData.name}
          </h2>
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
            <Route path="task-register" element={<TaskRegisterPage />} />
            <Route path="task-status" element={<TaskStatus />} />
            <Route path="*" element={<TaskRegisterPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
