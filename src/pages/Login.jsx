import Logo from '../assets/Logo.svg';
import Kakaotalk from '../assets/kakaotalk.png';

export default function Login() {
  const REST_API_KEY = '백엔드한테 달라하자1';
  const REDIRECT_URI = '백엔드한테 달라하자2';
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        {/* 로고 및 제목 */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center bg-theme-green px-4 py-3 rounded-lg mb-4">
            <img src={Logo} alt="로고" className="w-16 h-16 mr-2" />
            <h1 className="text-3xl font-bold text-white font-kreon">
              Internet<span className="text-red-800">tern</span>
            </h1>
          </div>
          <h2 className="text-2xl font-bold mb-2">로그인</h2>
          <p className="text-gray-500">로그인 후 이용해주세요.</p>
        </div>

        {/* 로그인 버튼 */}
        <button
          type="button"
          onClick={loginHandler}
          className="w-full flex items-center justify-center bg-[#f9e000] text-black text-lg font-bold py-3 rounded-lg hover:bg-[#f7d700] transition duration-200 mb-4"
        >
          <img
            alt="카카오톡"
            src={Kakaotalk}
            className="w-6 h-6 mr-2"
          />
          카카오 계정으로 로그인
        </button>

        <p className="text-center text-sm text-gray-500">
          임시 로그인(개발 테스트용)
        </p>
      </div>
    </div>
  );
}
