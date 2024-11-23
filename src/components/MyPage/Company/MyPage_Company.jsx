import { useState } from 'react';
import cn from '../../../utils/cn';
import MenuButton from '../MenuButton';
import MobileMenuButton from '../MobileMenuButton';
import TaskRegisterPage from './TaskRegister/TaskRegisterPage';
import { PiNoteBlank, PiCalendarCheck } from "react-icons/pi";

// 더미 데이터
const companyData = {
  name: "(주) 구름톤회사",
}


export default function MyPage_Company() {
  const [buttonClicked, setButtonClicked] = useState('과제 등록');
  const menuItems = [
    { icon: <PiNoteBlank />, text: "과제 등록" },
    { icon: <PiCalendarCheck />, text: "과제 진행 상황" },
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
            "hidden md:flex border-r-2 border-black flex-col justify-top items-center min-w-xs min-h-screen"
          )}
        >
          <h2 className='font-bold text-3xl text-[#8F6767] py-4'>
            {companyData.name}
          </h2>
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
          {buttonClicked === "과제 등록" && <TaskRegisterPage />}
          {buttonClicked === "과제 진행 현황" && <TaskStatus />}
        </div>
      </div>
    </div>
  )
}