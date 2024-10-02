import React, { Fragment, Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.scss'
import { Routingdata } from './common/routingdata'
import Underconstruction from './components/Pages/Extension/UnderConstruction/Underconstruction.jsx';

const App = lazy(() => import('./layouts/App'))
const Authenticationlayout = lazy(() => import('./layouts/Authenticationlayout'))
const Loaderimage = lazy(() => import('./layouts/loader/loader'))
const Auth = lazy(()=>import('./layouts/firebase/firebaseauth/auth')) 
const Authlogin = lazy(()=>import('./layouts/firebase/firebaseauth/authlogin')) 
const Signup = lazy(()=>import('./layouts/firebase/firebaseauth/signup')) 
const Switcherpage = lazy(()=>import('./layouts/Switcherpage')) 
const Customswitcher = lazy(()=>import( './components/pages/switcherpage/switcherpage'))
const ScrollToTop = lazy(()=>import('./layouts/scrollTop/scrollTop')) 

// Authentication 

const Login = lazy(() => import('./components/authentication/login/login')) 
const Register = lazy(() => import('./components/Authentication/Register/Register'))
const ForgotPassword = lazy(() => import('./components/Authentication/ForgotPassword/ForgotPassword'))
const Lockscreen = lazy(() => import('./components/Authentication/Lockscreen/Lockscreen'))
const Error400 = lazy(() => import('./components/Authentication/ErrorPages/Error400/Error400'))
const Error401 = lazy(() => import('./components/authentication/errorpages/error401/error401'))
const Error403 = lazy(() => import('./components/authentication/errorpages/error403/error403'))
const Error404 = lazy(() => import('./components/authentication/errorpages/error404/error404'))
const Error500 = lazy(() => import('./components/authentication/errorpages/error500/Error500'))
const Error503 = lazy(() => import('./components/authentication/errorpages/error503/Error503'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Fragment>
 
    <BrowserRouter>
      <Suspense fallback={<Loaderimage />}>
        <ScrollToTop/>
        <Routes>

          <Route path={`${import.meta.env.BASE_URL}`} element={<Auth />} >
            <Route index element={<Authlogin />} />
            <Route path={`${import.meta.env.BASE_URL}firebaseauth/authlogin`} element={<Authlogin />} />
            <Route path={`${import.meta.env.BASE_URL}firebaseauth/signup`} element={<Signup />} />
          </Route>

          {Routingdata.map((idx) => (
            <Route path={`${import.meta.env.BASE_URL}`} element={<App />} key={Math.random()}>
              <Route path={idx.path} element={idx.element} />
            </Route>
          ))}

          <Route path={`${import.meta.env.BASE_URL}`} element={<Switcherpage />}>
            <Route path={`${import.meta.env.BASE_URL}pages/switcherpage`} element={<Customswitcher />} />
          </Route>

        
          <Route path={`${import.meta.env.BASE_URL}`} element={<Authenticationlayout />}>

            <Route path={`${import.meta.env.BASE_URL}authentication/login`} element={<Login />} />
            <Route path={`${import.meta.env.BASE_URL}authentication/register`} element={<Register />} />
            <Route path={`${import.meta.env.BASE_URL}authentication/forgotpassword`} element={<ForgotPassword />} />
            <Route path={`${import.meta.env.BASE_URL}authentication/lockscreen`} element={<Lockscreen />} />
            <Route path={`${import.meta.env.BASE_URL}authentication/errorpages/error400`} element={<Error400 />} />
            <Route path={`${import.meta.env.BASE_URL}authentication/errorpages/error401`} element={<Error401 />} />
            <Route path={`${import.meta.env.BASE_URL}authentication/errorpages/error403`} element={<Error403 />} />
            <Route path={`${import.meta.env.BASE_URL}authentication/errorpages/error404`} element={<Error404 />} />
            <Route path={`${import.meta.env.BASE_URL}authentication/errorpages/error500`} element={<Error500 />} />
            <Route path={`${import.meta.env.BASE_URL}authentication/errorpages/error503`} element={<Error503 />} />
            <Route path={`${import.meta.env.BASE_URL}pages/extension/underconstruction`} element={<Underconstruction />} />
            <Route path={'*'} element={<Error400 />} />
          </Route>
        </Routes>

      </Suspense>

    </BrowserRouter>

  </Fragment>
)
