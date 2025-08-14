import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import SignIn from '@/views/sign-in';
import SignInSSOCallback from '@/views/sign-in/sso-callback';
import SignUp from '@/views/sign-up';
import SignUpSSOCallback from '@/views/sign-up/sso-callback';
import Dashboard from "@/views/dashboard";
import EmailVerified from "@/views/email-verified";
import ForgotPassword from "@/views/forgot-password";
import RestPassword from "@/views/reset-password";
import Network from '@/views/network';
import MyDevices from '@/views/my-devices';
import Referrals from '@/views/referrals';
import Profile from '@/views/profile';

interface IRouteConfig {
  path: string;
  element?: JSX.Element;
  name?: string;
  children?: IRouteConfig[];
}

const routes: IRouteConfig[] = [
  {
    path: '/sign-in',
    element: <SignIn />,
    name: 'Sign In',
  },
  {
    path: '/sign-in/sso-callback',
    element: <SignInSSOCallback />,
    name: 'Sign In SSO Callback',
  },
  {
    path: '/sign-up',
    element: <SignUp />,
    name: 'Sign Up',
  },
  {
    path: '/sign-up/sso-callback',
    element: <SignUpSSOCallback />,
    name: 'Sign Up SSO Callback',
  },
  {
    path: '/',
    element: <Dashboard />,
    name: 'Dashboard',
  },
  {
    path: '/email-verified',
    element: <EmailVerified />,
    name: 'Email Verified',
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
    name: 'Forgot Password',
  },
  {
    path: '/reset-password',
    element: <RestPassword />,
    name: 'Rest Password',
  },
  {
    path: '/network',
    element: <Network />,
    name: 'Network',
  },
  {
    path: '/my-Devices',
    element: <MyDevices />,
    name: 'MyDevices',
  },
  {
    path: '/referrals',
    element: <Referrals />,
    name: 'Referrals',
  },
  {
    path: '/profile',
    element: <Profile />,
    name: 'Profile',
  },
];
const renderRoutes = (routes: IRouteConfig[]): React.ReactNode => {
  return routes.map((route) => (
    <Route key={route.path} path={`${route.path}`} element={route.element}>
      {route.children && renderRoutes(route.children)}
    </Route>
  ));
};

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      {renderRoutes(routes)}
    </Routes>
  );
};

export default AppRoutes;