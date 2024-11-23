import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './pages/_Layout.jsx';
import MainPage from './pages/MainPage.jsx';
import Login from './pages/Login.jsx';
import MyPage from './pages/MyPage.jsx';
import Ourservice from './pages/Ourservice.jsx';
import Profile from './pages/Profile.jsx';

export default function Routers() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <MainPage /> },
        { path: '/login', element: <Login /> },
        { path: '/mypage/*', element: <MyPage /> },
        { path: '/ourservice', element: <Ourservice />},
        { path: '/profile', element: <Profile />},
      ],
    },
    {
      path: '*',
      element: (
        <h3>
          <b>NOT FOUND PAGE</b>
        </h3>
      ),
    },
  ])
  return <RouterProvider router={router} />
}
