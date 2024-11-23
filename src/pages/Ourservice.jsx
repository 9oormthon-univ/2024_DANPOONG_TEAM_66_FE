import { Link } from 'react-router-dom';

import Tree2 from '../assets/Tree2.svg';

import Logo from '../assets/Logo.svg';
import Bronze from '../assets/Badges/Bronze.svg';
import Gold from '../assets/Badges/Gold.svg';
import Normal from '../assets/Badges/Normal.svg';
import Silver from '../assets/Badges/Silver.svg';
import Blank from '../assets/Badges/Blank.svg';

import VerticalSlider from '../components/Ourservice/VerticalSlider.jsx';
import { AiFillFileUnknown } from "react-icons/ai";
import { BsPersonFillExclamation } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { SiGoogledocs } from "react-icons/si";
import { HiDesktopComputer } from "react-icons/hi";
import { TbChartTreemap } from "react-icons/tb";


const MapleLeaf = () => (
    <svg width="100" height="100" viewBox="0 0 24 24" className="fill-current">
      <path d="M12 2L14 8L20 8L15 12L17 18L12 15L7 18L9 12L4 8L10 8L12 2Z" />
    </svg>
  );


export default function Ourservice() {
    return (
        <div className="w-screen h-screen  flex flex-col">
            <div className="w-screen h-screen flex flex-col">
                <div className="w-screen h-screen relative">  {/* flex flex-col 제거 */}
                    
                    {/* 떨어지는 단풍잎들 */}
                    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute animate-fall"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: '-100px', // 시작 위치를 화면 밖으로 설정
                                    animationDelay: '0s', // 즉시 시작
                                    animationDuration: `${Math.random() * 5 + 10}s` // 떨어지는 시간
                                }}
                            >
                                <div className="text-theme-red opacity-90 animate-spin-slow" style={{
                                    transform: `scale(${Math.random() * 0.5 + 0.5})`,
                                    filter: 'drop-shadow(0 0 10px rgba(255, 0, 0, 0.5))'
                                }}>
                                    <MapleLeaf />
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    
                    {/* 배경 이미지 */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <img
                            src={Tree2}
                            alt="Background Tree"
                            className="w-full h-full object-contain md:object-cover"
                            style={{ mixBlendMode: 'multiply' }}  // 배경과 더 자연스럽게 어울리도록
                        />
                    </div>

                    {/* 내용 */}
                    <div className="relative z-10 w-full h-full flex flex-col text-center">  {/* bg 클래스 수정 */}
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-300 to-white opacity-80"></div>
                        <div className="relative z-20">  {/* 내용을 더 앞으로 */}
                            <img
                                src={Logo}
                                alt='logo'
                                className='h-20 md:h-40 w-auto mx-auto mt-20 md:mt-60'
                            />
                            <h1 className="text-[50px] md:text-[50px] font-bold pt-[50px] md:pt-[100px]">
                                단풍처럼 물들어가는 성장의 순간,<br />
                                인터넷턴에서 시작하세요!
                            </h1>
                            <p className="text-base md:text-[20px] pt-[20px] md:pt-[30px]">
                                청년의 내일을 준비하는 실무 경험의 첫걸음
                            </p>
                        </div>
                    </div>
                </div>
          </div>




            {/* 2 */}
            <div className="w-full flex flex-col justify-left pt-[100px] md:pt-[250px] px-4 md:px-[300px]">
                <h1 className="text-3xl md:text-[50px] font-bold pt-[50px] md:pt-[100px] text-center ">
                    기획 의도
                </h1>
                {/* 박스들 */}
                <div className="w-full flex flex-col md:flex-row items-center gap-6 md:gap-4 mt-[30px] md:mt-[90px]">
                    {/* 박스 1 */}
                    <div className="w-full md:w-[500px] bg-white text-black p-6 rounded-xl shadow-[0px_10px_20px_rgba(0,0,0,0.25)] transform transition duration-300 hover:scale-105 flex flex-col">
                        <div className="flex justify-center p-4 md:p-6">
                            <AiFillFileUnknown className="h-[100px] w-[100px] md:h-[150px] md:w-[150px]" />
                        </div>
                        <div className="flex flex-col justify-center items-center flex-1 text-center">
                            <p className="text-lg md:text-xl font-semibold">채용시장 문제점</p>
                            <p className="mt-4 md:mt-6">최근 채용시장에서는 경력이 있는 인재만을 원하는 경우가 많아요.</p>
                        </div>
                    </div>

                    {/* 박스 2 */}
                    <div className="w-full md:w-[500px] bg-white text-black p-6 rounded-xl shadow-[0px_10px_20px_rgba(0,0,0,0.25)] transform transition duration-300 hover:scale-105 flex flex-col">
                        <div className="flex justify-center p-4 md:p-6">
                            <BsPersonFillExclamation className="h-[100px] w-[100px] md:h-[150px] md:w-[150px]" />
                        </div>
                        <div className="flex flex-col justify-center items-center flex-1 text-center">
                            <p className="text-lg md:text-xl font-semibold">사회초년생</p>
                            <p className="mt-4 md:mt-6">사회초년생을 이러한 채용시장에서 경력을 쌓기 어려워 취업문제에 직면하고 있어요.</p>
                        </div>
                    </div>

                    {/* 박스 3 */}
                    <div className="w-full md:w-[500px] bg-white text-black p-6 rounded-xl shadow-[0px_10px_20px_rgba(0,0,0,0.25)] transform transition duration-300 hover:scale-105 flex flex-col">
                        <div className="flex justify-center p-4 md:p-6">
                            <FaHandsHelping className="h-[100px] w-[100px] md:h-[150px] md:w-[150px]" />
                        </div>
                        <div className="flex flex-col justify-center items-center flex-1 text-center">
                            <p className="text-lg md:text-xl font-semibold">인터넷턴</p>
                            <p className="mt-4 md:mt-6">인터넷턴에서 실무경험을 체험하고, 멘토와 소통하며, 경력을 쌓고 성장하는 서비스입니다!</p>
                        </div>
                    </div>
                </div>
            </div>


           {/* 3 */}
            <div className="w-full flex flex-col justify-left pt-[100px] pb-[100px] md:pt-[150px] md:pb-[150px] px-4 md:px-[300px]">
                <h1 className="text-4xl md:text-[60px] font-bold text-center pt-[100px] md:pt-[250px]">
                    인터넷<span className="text-green-900">턴</span>; Internet<span className="text-red-900">tern</span>
                </h1>

                <div className="w-full flex flex-col gap-6 md:gap-[30px] items-center mt-[30px] md:mt-[90px]">
                    {/* 박스1 */}
                    <div className="w-full md:w-[1000px] bg-white text-black rounded-xl shadow-[0px_10px_20px_rgba(0,0,0,0.25)] flex flex-col md:flex-row items-center p-4 md:p-6">
                        <div className="w-full md:w-[150px] flex justify-center items-center">
                            <SiGoogledocs className="h-[80px] w-[80px] md:h-[100px] md:w-[100px]" />
                        </div>
                        <div className="hidden md:block h-[80%] w-[2px] bg-gray-300 mx-6"></div>
                        <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
                            <p className="text-xl md:text-2xl font-semibold">Intern; 실무경험</p>
                            <p className="text-lg md:text-xl mt-2 text-gray-600">맞춤과제를 통해 취업 시 요구받는 실무 경험을 채울 수 있어요!</p>
                        </div>
                        <div className="mt-4 md:mt-0 md:ml-6">
                            <Link to="/MainPage" className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] border-4 border-blue-500 rounded-xl bg-transparent hover:bg-blue-500 transition-all duration-300 flex justify-center items-center">
                                <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-lg hover:bg-white transition-all duration-300" />
                            </Link>
                        </div>
                    </div>

                    {/* 박스2 */}
                    <div className="w-full md:w-[1000px] bg-white text-black rounded-xl shadow-[0px_10px_20px_rgba(0,0,0,0.25)] flex flex-col md:flex-row items-center p-4 md:p-6">
                        <div className="w-full md:w-[150px] flex justify-center items-center">
                            <HiDesktopComputer className="h-[80px] w-[80px] md:h-[100px] md:w-[100px]" />
                        </div>
                        <div className="hidden md:block h-[80%] w-[2px] bg-gray-300 mx-6"></div>
                        <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
                            <p className="text-xl md:text-2xl font-semibold">Internet; 온라인</p>
                            <p className="text-lg md:text-xl mt-2 text-gray-600">온라인상에서 멘토링을 통해 과제를 진행해요!</p>
                        </div>
                        <div className="mt-4 md:mt-0 md:ml-6">
                            <Link to="/Community" className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] border-4 border-blue-500 rounded-xl bg-transparent hover:bg-blue-500 transition-all duration-300 flex justify-center items-center">
                                <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-lg hover:bg-white transition-all duration-300" />
                            </Link>
                        </div>
                    </div>

                    {/* 박스3 */}
                    <div className="w-full md:w-[1000px] bg-white text-black rounded-xl shadow-[0px_10px_20px_rgba(0,0,0,0.25)] flex flex-col md:flex-row items-center p-4 md:p-6">
                        <div className="w-full md:w-[150px] flex justify-center items-center">
                            <TbChartTreemap className="h-[80px] w-[80px] md:h-[100px] md:w-[100px]" />
                        </div>
                        <div className="hidden md:block h-[80%] w-[2px] bg-gray-300 mx-6"></div>
                        <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
                            <p className="text-xl md:text-2xl font-semibold">Turn; 기회, 성장</p>
                            <p className="text-lg md:text-xl mt-2 text-gray-600">뱃지를 모으며 나만의 포트폴리오를 완성시켜요!</p>
                        </div>
                        <div className="mt-4 md:mt-0 md:ml-6">
                            <Link to="/MyPage" className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] border-4 border-blue-500 rounded-xl bg-transparent hover:bg-blue-500 transition-all duration-300 flex justify-center items-center">
                                <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-lg hover:bg-white transition-all duration-300" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>  

                        








           {/* 4. 과제 수행 섹션 */}
            <div className="flex flex-col w-full bg-[#E4FED9] p-4 md:p-5 items-center">
                <h1 className="text-3xl md:text-[50px] font-bold pt-[50px] pb-[50px] md:pt-[100px] mb:pb-[100px] text-center px-4 md:px-8 ">
                    과제를 수행하며 성장하세요!
                </h1>
                {/* 박스들 */}
                <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 pb-[20px] md:pb-[40px] px-4 md:px-0">
                    <div className="w-full max-w-[350px] md:w-[400px] bg-white text-black p-4 md:p-6 rounded-xl shadow-[0px_10px_20px_rgba(0,0,0,0.25)] transform transition duration-300 hover:scale-105 flex flex-col">
                        <div className="flex justify-center items-center p-4 md:p-6">
                            <img src={Bronze} alt='bronze' className="h-[100px] w-[100px] md:h-[150px] md:w-[150px]"/>
                        </div>
                        <div className="flex flex-col justify-center items-center flex-1 text-center">
                            <p className="text-lg md:text-xl font-semibold">일반과제</p>
                            <p className="mt-4 md:mt-6">인터넷턴이 제공하는 단순 성장 과제</p>
                        </div>
                    </div>

                    <div className="w-full max-w-[350px] md:w-[400px] bg-white text-black p-4 md:p-6 rounded-xl shadow-[0px_10px_20px_rgba(0,0,0,0.25)] transform transition duration-300 hover:scale-105 flex flex-col">
                        <div className="flex justify-center items-center p-4 md:p-6">
                            <img src={Gold} alt='gold' className="h-[100px] w-[100px] md:h-[150px] md:w-[150px]"/>
                        </div>
                        <div className="flex flex-col justify-center items-center flex-1 text-center">
                            <p className="text-lg md:text-xl font-semibold">기업과제</p>
                            <p className="mt-4 md:mt-6">기업이 제공하는 채용형 과제</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. 뱃지 성장 섹션 */}
            <div className="flex flex-col w-full bg-[#C9e9bb] p-4 md:p-5 text-left items-center">
                <h1 className="text-3xl md:text-[50px] font-bold pt-[50px] md:pt-[100px] text-center px-4 md:px-8 pb-5">
                    뱃지를 얻으며 성장하세요!
                </h1>
                <p className="text-base md:text-xl font-semibold text-center px-4">
                    20점을 모은다면 멘토자격이 주어집니다!
                </p>
                <div className="w-full max-w-[1200px] px-4 md:px-0">
                    <VerticalSlider/>
                </div>
            </div>

            {/* 6. 멘토링 섹션 */}
            <div className="flex flex-col w-full bg-[#b8dca8] p-4 md:p-5 text-left items-center text-white">
                <h1 className="text-3xl md:text-[50px] font-bold pt-[50px] md:pt-[100px] text-center px-4 md:px-8 pb-5">
                    멘토링을 진행하며 성장하세요!
                </h1>
                <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-6 md:gap-20 px-4 md:px-0">
                    <IoPerson className="h-[80px] w-[80px] md:h-[150px] md:w-[150px]" />
                    <IoPerson className="h-[80px] w-[80px] md:h-[150px] md:w-[150px]" />
                    <IoPerson className="h-[80px] w-[80px] md:h-[150px] md:w-[150px]" />
                    <IoPerson className="h-[80px] w-[80px] md:h-[150px] md:w-[150px]" />
                </div>
            </div>

            {/* 7. 시작하기 섹션 */}
            <div className="flex flex-col w-full bg-[#a4cd92] p-4 md:p-5 text-left items-center">
                <h1 className="text-3xl text-white md:text-[50px] font-bold pt-[50px] md:pt-[100px] pb-[30px] md:pb-[100px] text-center">
                    지금 바로 시작하세요!
                </h1>
                <Link 
                    to="/Login" 
                    className="w-[200px] md:w-[280px] h-[50px] md:h-[70px] border-4 border-blue-500 rounded-xl bg-transparent hover:bg-blue-500 transition-all duration-300 flex justify-center items-center mb-[30px] md:mb-[50px]"
                >
                    <p className="text-lg md:text-xl">바로가기</p>
                </Link>
            </div>





        </div> 
    );
}
