import Cloud from '../assets/cloud.svg';
import onlytree from '../assets/onlytree.svg';

export default function Home() {
  return (
    <div
        className="relative flex flex-col items-center py-10 object-cover"
        style={{
            background: "linear-gradient(to top, white 60%, #BCD9F2 90%)",
        }}
>       

        <img
            src={Cloud}
            alt='groom'
            className='absolute top-9 ml-12 object-cover hidden md:block'
          />
        <div className="w-full px-12 text-left mb-4 md:px-40">
        <h1 className="text-3xl font-bold text-gray-800">추천 과제</h1>
        <p className="text-[#637267] text-xl font-bold">과제에서 포트폴리오로, 인턴까지</p>
      </div>
      {/* 가로 스크롤 컨테이너 */}
      <div className="overflow-x-auto w-full px-6 md:px-40 z-0">
        <div className="flex space-x-6 py-6">
          {/* 카드 1 */}    
          <div className="w-[300px] h-[300px] bg-white rounded-lg shadow-md shrink-0">
            <div className="h-1/2 bg-gray-300 rounded-t-lg"></div>
            <div className="h-1/2 bg-white rounded-b-lg"></div>
          </div>

          {/* 카드 2 */}
          <div className="w-[300px] h-[300px] bg-white rounded-lg shadow-md shrink-0">
            <div className="h-1/2 bg-gray-300 rounded-t-lg"></div>
            <div className="h-1/2 bg-white rounded-b-lg"></div>
          </div>

          {/* 카드 3 */}
          <div className="w-[300px] h-[300px] bg-white rounded-lg shadow-md shrink-0">
            <div className="h-1/2 bg-gray-300 rounded-t-lg"></div>
            <div className="h-1/2 bg-white rounded-b-lg"></div>
          </div>

          {/* 카드 4 */}
          <div className="w-[300px] h-[300px] bg-white rounded-lg shadow-md shrink-0">
            <div className="h-1/2 bg-gray-300 rounded-t-lg"></div>
            <div className="h-1/2 bg-white rounded-b-lg"></div>
          </div>

          {/* 카드 5 */}
          <div className="w-[300px] h-[300px] bg-white rounded-lg shadow-md shrink-0">
            <div className="h-1/2 bg-gray-300 rounded-t-lg"></div>
            <div className="h-1/2 bg-white rounded-b-lg"></div>
          </div>

          {/* 카드 6 */}
          <div className="w-[300px] h-[300px] bg-white rounded-lg shadow-md shrink-0">
            <div className="h-1/2 bg-gray-300 rounded-t-lg"></div>
            <div className="h-1/2 bg-white rounded-b-lg"></div>
          </div>

          {/* 카드 7 */}
          <div className="w-[300px] h-[300px] bg-white rounded-lg shadow-md shrink-0">
            <div className="h-1/2 bg-gray-300 rounded-t-lg"></div>
            <div className="h-1/2 bg-white rounded-b-lg"></div>
          </div>

          {/* 카드 8 */}
          <div className="w-[300px] h-[300px] bg-white rounded-lg shadow-md shrink-0">
            <div className="h-1/2 bg-gray-300 rounded-t-lg"></div>
            <div className="h-1/2 bg-white rounded-b-lg"></div>
          </div>

          {/* 카드 9 */}
          <div className="w-[300px] h-[300px] bg-white rounded-lg shadow-md shrink-0">
            <div className="h-1/2 bg-gray-300 rounded-t-lg"></div>
            <div className="h-1/2 bg-white rounded-b-lg"></div>
          </div>
          
        </div>
      </div>
      <div className="w-full px-12 text-left mb-4 overflow-x-auto md:px-40">
          <h1 className="text-3xl font-bold text-gray-800">분야별 과제</h1>
          <div className="flex items-center space-x-16 mt-4">
            {/* 검색창 */}
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 w-[300px] h-[40px] max-w-md bg-white">
            <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1115 3a7.5 7.5 0 011.65 13.65z"
                />
            </svg>
            <input
                type="text"
                placeholder="검색"
                className="ml-2 w-full border-none focus:outline-none bg-transparent"
            />
            </div>

            {/* 버튼 1: 분야 */}
            <div className="flex items-center space-x-4 ml-auto">
                <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg bg-white">
                분야
                <svg
                    className="w-4 h-4 ml-1 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                    />
                </svg>
                </button>

                {/* 버튼 2: 기업 */}
                <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg bg-white">
                기업
                <svg
                    className="w-4 h-4 ml-1 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                    />
                </svg>
                </button>
             </div>
        </div>
      </div>
        <img
                src={onlytree}
                alt='tree'
                className='absolute bottom-0 mr-[700px] object-cover size-[800px] hidden md:block'
            />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 px-10 mt-10 z-0">
        {/* 카드 반복 */}
        {Array.from({ length: 16 }).map((_, index) => (
            <div key={index} className="bg-[#C4C4C4] rounded-lg shadow-md flex flex-col justify-end h-48 w-60">
            {/* 카드 하단 정보 */}
            <div className="bg-white h-20 rounded-b-lg p-3">
                <h1 className="text-md font-bold text-gray-800">(주) awsi</h1>
                <p className="text-gray-600 text-sm mt-1">
                awsi 브랜드 로고 디자인 및 기획서 제안
                </p>
            </div>
            </div>
        ))}
        </div>

    </div>
  );
}
