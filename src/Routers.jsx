import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './pages/_Layout.jsx';
import MainPage from './pages/MainPage.jsx';
import Home from './pages/Home.jsx';
import Ourservice from './pages/Ourservice.jsx';
import Community from './pages/Community.jsx';
import MyPage from './pages/MyPage.jsx';
import Profile from './pages/Profile.jsx';
import Login from './pages/Login.jsx';

export default function Routers() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <MainPage /> },
        { path: '/home', element: <Home /> },
        { path: '/ourservice', element: <Ourservice />},
        { path: '/community', element: <Community />},
        { path: '/mypage/*', element: <MyPage /> },
        { path: '/profile', element: <Profile />},
        { path: '/login', element: <Login /> },
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
