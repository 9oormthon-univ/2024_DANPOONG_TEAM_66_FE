import Header from "../components/Header/Header";
export default function MainPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center gap-24">
      <div className="w-[20%] p-4 bg-[#A4A9B763] bg-opacity-35 rounded-lg shadow-lg mb-60">
        {/* My Task: 사용자 */}
        <div>
          <h1 className="text-lg font-bold text-gray-800">My Task : 사용자</h1>
          <p className="text-gray-600 text-xs mt-1">&gt; 작업중인 과제 목록</p>
          {/* 카드 컨테이너 */}
          <div className="grid grid-cols-2 gap-3 mt-3">
            {/* 각 카드 */}
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-[#C4C4C4] rounded-lg shadow-md flex flex-col h-28 justify-end"
                >
                  <div className="bg-white h-12 rounded-b-lg"></div>
                </div>
              ))}
          </div>
          <div className="flex justify-center mt-3">
            <button className="text-gray-500 text-xs">더보기</button>
          </div>
        </div>

        {/* My Task: 기업 */}
        <div className="mt-8">
          <h1 className="text-lg font-bold text-gray-800">My Task : 기업</h1>
          <p className="text-gray-600 text-xs mt-1">&gt; 과제 등록 페이지</p>
          <p className="text-gray-600 text-xs">&gt; 과제 진행 현황 확인</p>
        </div>
      </div>



    <div className="min-h-screen bg-white px-10 py-24">
      {/* 제목과 더보기 */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-bold">맞춤 과제 추천</div>
          <button className="text-gray-600 text-sm">더보기 &gt;</button>
        </div>
      <div className="grid grid-cols-5 gap-12">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="bg-[#C4C4C4] rounded-lg shadow-md flex flex-col justify-end h-44 w-36"
            >
              {/* 카드 내용 */}
              <div className="bg-white h-20 rounded-b-lg p-2">
                <h1 className="text-md font-bold text-gray-800">(주) awsi</h1>
                <p className="text-gray-600 text-sm mt-1">
                  awsi 브랜드 로고 디자인 및 기획서 제안
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
    </div>
  );
}
