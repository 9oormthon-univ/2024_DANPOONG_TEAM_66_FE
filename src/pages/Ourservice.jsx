import Logo from '../assets/Logo.svg';

import VerticalSlider from '../components/Ourservice/VerticalSlider.jsx';
import { AiFillFileUnknown } from "react-icons/ai";
import { BsPersonFillExclamation } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";

export default function Ourservice() {
    return (
        <div className="w-screen h-screen  flex flex-col">
           


           {/* 1 */}
            <div className="w-full h-screen flex flex-col text-center bg-gradient-to-b from-blue-300 to-white">
                
                <img /*로고*/
                    src={Logo}
                    alt='logo'
                    className= ' h-40 w-auto mt-60 '
                 />

               <h1 className="text-[50px] font-bold pt-[100px]">
                       단풍처럼 물들어가는 성장의 순간,<br />
                        인터넷턴에서 시작하세요!
               </h1>

                <p className="text-[20px] pt-[30px]">
                    청년의 내일을 준비하는 실무 경험의 첫걸음
                </p>
           </div>




            {/* 2 */}
           <div className="w-full flex flex-col justify-left pt-[250px] pl-[300px] pr-[300px]">
                {/* 박스들 */}
                <div className="w-full flex  items-center mt-[90px] pl-[90px] pr-[90px]">
                    <div className="w-[500px] h-[500px] bg-white text-black p-6 rounded-xl shadow-[0px_10px_20px_rgba(0,0,0,0.25)] transform transition duration-300 hover:scale-105 flex flex-col">
                        {/* 아이콘 */}
                        <div className="flex justify-center p-6">
                            <AiFillFileUnknown className="h-[150px] w-[150px]" />
                        </div>
                        <div className="flex flex-col justify-center items-center flex-1 text-center">
                            <p className="text-xl font-semibold">채용시장 문제점</p>
                            <p className="mt-6">최근 채용시장에서는 경력이 있는 인재만을 원하는 경우가 많아요.</p>
                        </div>
                    </div>

                    <div className="w-[500px] h-[500px] bg-white text-black p-6 rounded-xl shadow-[0px_10px_20px_rgba(0,0,0,0.25)] transform transition duration-300 hover:scale-105 flex flex-col">
                        {/* 아이콘 */}
                        <div className="flex justify-center p-6">
                            <BsPersonFillExclamation className="h-[150px] w-[150px]" />
                        </div>
                        <div className="flex flex-col justify-center items-center flex-1 text-center">
                            <p className="text-xl font-semibold">사회초년생</p>
                            <p className="mt-6">사회초년생을 이러한 채용시장에서 경력을 쌓기 어려워 취업문제에 직면하고 있어요.</p>
                        </div>
                    </div>

                    <div className="w-[500px] h-[500px] bg-white text-black p-6 rounded-xl shadow-[0px_10px_20px_rgba(0,0,0,0.25)] transform transition duration-300 hover:scale-105 flex flex-col">
                        {/* 아이콘 */}
                        <div className="flex justify-center p-6">
                            <FaHandsHelping className="h-[150px] w-[150px]" />
                        </div>
                        <div className="flex flex-col justify-center items-center flex-1 text-center">
                            <p className="text-xl font-semibold">인터넷턴</p>
                            <p className="mt-6">인터넷턴에서 실무경험을 체험하고, 멘토와 소통하며, 경력을 쌓고 성장하는 서비스입니다! </p>
                        </div>
                    </div>
                </div>
           </div> 




           {/* 3 */}
            <div className="w-full flex flex-col justify-left pt-[150px] pl-[300px] pr-[300px]">
                
                <h1 className="text-[60px] font-bold text-center  pt-[250px]">
                        인터넷<span className="text-green-900">턴</span>; Internet<span className="text-red-900">tern</span>
                </h1>

                
                <div className="w-full flex flex-col gap-[30px] items-center mt-[90px] px-[90px]">
                    {/* 박스1 */}
                    
                    <div className="w-[1000px] h-[200px] bg-white text-black rounded-xl shadow-[0px_10px_20px_rgba(0,0,0,0.25)] flex items-center p-6"> {/* 박스 영역 */}
                        <div className="w-[150px] flex justify-center items-center">{/* 아이콘 */}
                            <AiFillFileUnknown className="h-[100px] w-[100px]" />
                        </div>
                        <div className="h-[80%] w-[2px] bg-gray-300 mx-6"></div>{/* 세로선 */}
                        <div className="flex-1 "> {/* 텍스트 영역 */}
                            <p className="text-2xl text-left font-semibold">Intern; 실무경험</p>
                            <p className="text-xl mt-2 text-gray-600">맞춤과제를 통해 취업 시 요구받는 실무 경험을 채울 수 있어요!</p>
                        </div>
                        <div className="ml-6">
                            <button className="w-[70px] h-[70px] border-4 border-blue-500 rounded-full hover:bg-blue-100 hover:bg-opacity-20 transition flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                   

                    {/* 박스2 */}
                    <div className="w-[1000px] h-[200px] bg-white text-black rounded-xl shadow-[0px_10px_20px_rgba(0,0,0,0.25)] flex items-center p-6"> {/* 박스 영역 */}
                        <div className="w-[150px] flex justify-center items-center">{/* 아이콘 */}
                            <AiFillFileUnknown className="h-[100px] w-[100px]" />
                        </div>
                        <div className="h-[80%] w-[2px] bg-gray-300 mx-6"></div>{/* 세로선 */}
                        <div className="flex-1 "> {/* 텍스트 영역 */}
                            <p className="text-2xl text-left font-semibold">Internet; 온라인</p>
                            <p className="text-xl mt-2 text-gray-600">온라인상에서 멘토링을 통해 과제를 진행해요!</p>
                        </div>
                        <div className="ml-6">
                            <button className="w-[70px] h-[70px] border-4 border-blue-500 rounded-full hover:bg-blue-100 hover:bg-opacity-20 transition flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>



                    {/* 박스3 */}
                    <div className="w-[1000px] h-[200px] bg-white text-black rounded-xl shadow-[0px_10px_20px_rgba(0,0,0,0.25)] flex items-center p-6"> {/* 박스 영역 */}
                        <div className="w-[150px] flex justify-center items-center">{/* 아이콘 */}
                            <AiFillFileUnknown className="h-[100px] w-[100px]" />
                        </div>
                        <div className="h-[80%] w-[2px] bg-gray-300 mx-6"></div>{/* 세로선 */}
                        <div className="flex-1"> {/* 텍스트 영역 */}
                            <p className="text-2xl text-left font-semibold">Turn; 기회, 성장</p>
                            <p className="text-xl mt-2 text-gray-600">뱃지를 모으며 나만의 포트폴리오를 완성시켜요!</p>
                        </div>
                        <div className="ml-6">
                            <button className="w-[70px] h-[70px] border-4 border-blue-500 rounded-full hover:bg-blue-100 hover:bg-opacity-20 transition flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>                    
             </div>  

            







             {/* 4 */}
           <div className="w-full flex flex-col justify-left pt-[250px] pl-[300px] pr-[300px]">
                {/* 박스들 */}
                <div className="w-full flex  items-center mt-[90px] pl-[90px] pr-[90px]">
                    <div className="w-[1000px] h-[500px] bg-white text-black p-6 rounded-xl shadow-[0px_10px_20px_rgba(0,0,0,0.25)] transform transition duration-300 hover:scale-105 flex flex-col">
                        {/* 아이콘 */}
                        <div className="flex justify-center p-6">
                            <AiFillFileUnknown className="h-[150px] w-[150px]" />
                        </div>
                        <div className="flex flex-col justify-center items-center flex-1 text-center">
                            <p className="text-xl font-semibold">채용시장 문제점</p>
                            <p className="mt-6">최근 채용시장에서는 경력이 있는 인재만을 원하는 경우가 많아요.</p>
                        </div>
                    </div>

                    <div className="w-[500px] h-[500px] bg-white text-black p-6 rounded-xl shadow-[0px_10px_20px_rgba(0,0,0,0.25)] transform transition duration-300 hover:scale-105 flex flex-col">
                        {/* 아이콘 */}
                        <div className="flex justify-center p-6">
                            <BsPersonFillExclamation className="h-[150px] w-[150px]" />
                        </div>
                        <div className="flex flex-col justify-center items-center flex-1 text-center">
                            <p className="text-xl font-semibold">사회초년생</p>
                            <p className="mt-6">사회초년생을 이러한 채용시장에서 경력을 쌓기 어려워 취업문제에 직면하고 있어요.</p>
                        </div>
                    </div>
                </div>
           </div> 


           <div className="flex flex-col items-center   bg-white p-4">
                 <VerticalSlider />
            </div>

          


           






        </div> 
    );
}
