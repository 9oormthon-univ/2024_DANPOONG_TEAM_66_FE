import { useNavigate } from 'react-router-dom';
import cn from '../../utils/cn';
import DefaultProfile from '../../assets/icons/ProfileLg.svg';

export default function MobileMenu({ openMobileMenu, setOpenMobileMenu, ProfileData }) {
  const navigate = useNavigate();

  const closeMenu = () => setOpenMobileMenu(false);

  return (
    <div
      className={`fixed inset-0 z-40 bg-black bg-opacity-50 ${
        openMobileMenu ? 'block' : 'hidden'
      }`}
      onClick={closeMenu}
    >
      <div
        className={cn(
          'fixed right-0 top-0 h-full w-64 bg-white shadow-lg', 
          'transform transition-transform duration-1000',
          openMobileMenu ? 'translate-x-0' : 'translate-x-full'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-red-500 text-2xl"
          onClick={closeMenu}
        >
          ✕
        </button>
        
        <div className="flex flex-col items-center justify-center space-y-4 mt-8">
          <img
            src={ProfileData.profile || DefaultProfile}
            alt="profile"
            className="w-12 h-12 rounded-full mr-1"
            onClick={() => navigate('/profile')}
          />
          <h2 className='font-bold text-2xl'>{ProfileData.name}님</h2>
        </div>
        <nav className="mt-4 space-y-4 px-6">
          <button
            className="block w-full text-left text-lg text-gray-700 hover:text-blue-500"
            onClick={() => {
              navigate('/');
              closeMenu();
            }}
          >
            Home
          </button>
          <button
            className="block w-full text-left text-lg text-gray-700 hover:text-blue-500"
            onClick={() => {
              navigate('/ourservice');
              closeMenu();
            }}
          >
            Our Service
          </button>
          <button
            className="block w-full text-left text-lg text-gray-700 hover:text-blue-500"
            onClick={() => {
              navigate('/community');
              closeMenu();
            }}
          >
            Community
          </button>
          <button
            className="block w-full text-left text-lg text-gray-700 hover:text-blue-500"
            onClick={() => {
              navigate('/mypage');
              closeMenu();
            }}
          >
            My Page
          </button>
        </nav>
      </div>
    </div>
  );
}
