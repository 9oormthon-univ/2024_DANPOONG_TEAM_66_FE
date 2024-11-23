import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './pages/_Layout.jsx';
import MainPage from './pages/MainPage.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import MyPage from './pages/MyPage.jsx';
import Ourservice from './pages/Ourservice.jsx';

export default function Routers() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <MainPage /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
        { path: '/mypage/*', element: <MyPage /> },
        { path: '/ourservice', element: <Ourservice />},
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
