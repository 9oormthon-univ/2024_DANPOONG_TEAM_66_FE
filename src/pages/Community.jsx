import { useState } from "react";
import MenuButton from "../components/Common/MenuButton";
import MobileMenuButton from "../components/Common/MobileMenuButton";
import cn from "../utils/cn";
import RequestPage from "../components/Community/Request/RequestPage";
import MyMentoringPage from "../components/Community/MyMentoring/MyMentoringPage";

export default function Community() {
  const [buttonClicked, setButtonClicked] = useState('멘토링 요청');
  const menuItems = [
    { text: "멘토링 요청" },
    { text: "나의 멘토링" },
  ];
  return (
    <div className="h-screen flex flex-col">
      {/* 모바일 환경: 상단 메뉴 */}
      <div className="flex md:hidden bg-white border-b border-gray-300 shadow-sm">
        {menuItems.map((item) => (
          <MobileMenuButton
            key={item.text}
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
          {buttonClicked === "멘토링 요청" && <RequestPage />}
          {buttonClicked === "나의 멘토링" && <MyMentoringPage />}
        </div>
      </div>
    </div>
  );
}