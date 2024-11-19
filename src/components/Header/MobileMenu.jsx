import { useNavigate } from 'react-router-dom';
import cn from '../../utils/cn';

export default function MobileMenu({ openMobileMenu, setOpenMobileMenu }) {
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

        <nav className="mt-16 space-y-4 px-6">
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
              navigate('/explore');
              closeMenu();
            }}
          >
            Explore
          </button>
          <button
            className="block w-full text-left text-lg text-gray-700 hover:text-blue-500"
            onClick={() => {
              navigate('/mytasks');
              closeMenu();
            }}
          >
            My Tasks
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
              navigate('/profile');
              closeMenu();
            }}
          >
            Profile
          </button>
        </nav>
      </div>
    </div>
  );
}
