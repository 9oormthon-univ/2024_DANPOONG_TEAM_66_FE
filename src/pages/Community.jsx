import { useState } from "react";
import { Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import MenuButton from "../components/Common/MenuButton";
import MobileMenuButton from "../components/Common/MobileMenuButton";
import cn from "../utils/cn";
import RequestPage from "../components/Community/Request/RequestPage";
import MyMentoringPage from "../components/Community/MyMentoring/MyMentoringPage";

export default function Community() {
  const navigate = useNavigate();
  const location = useLocation();

  // 현재 URL 경로를 기준으로 버튼 상태 설정
  const currentPath = location.pathname.split('/').pop();
  const [buttonClicked, setButtonClicked] = useState(
    currentPath === "mymentoring" ? "나의 멘토링" : "멘토링 요청"
  );

  const menuItems = [
    { text: "멘토링 요청", path: "request" },
    { text: "나의 멘토링", path: "mymentoring" },
  ];

  // 버튼 클릭 시 상태 변경 및 라우팅
  const handleButtonClick = (text, path) => {
    setButtonClicked(text);
    navigate(`/community/${path}`);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* 모바일 환경: 상단 메뉴 */}
      <div className="flex md:hidden bg-white border-b border-gray-300 shadow-sm">
        {menuItems.map((item) => (
          <MobileMenuButton
            key={item.text}
            text={item.text}
            buttonClicked={buttonClicked}
            setButtonClicked={(text) => handleButtonClick(text, item.path)}
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
              text={item.text}
              buttonClicked={buttonClicked}
              setButtonClicked={(text) => handleButtonClick(text, item.path)}
            />
          ))}
        </div>

        {/* 콘텐츠 영역: Routes 사용 */}
        <div className="flex-1">
          <Routes>
            <Route path="request" element={<RequestPage />} />
            <Route path="mymentoring" element={<MyMentoringPage />} />
            <Route path="*" element={<Navigate to="request" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
