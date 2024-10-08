import React, { Fragment } from 'react'

import { Outlet } from 'react-router-dom'

import Footer from './footer/footer'
import Header from './header/header'
import Rightsidebar from './rightsidebar/rightsidebar'
import Switcher from './switcher/switcher'
import Sidebar from './sidebar/sidebar'
import { Provider } from 'react-redux'
import store from '../common/redux/store'  
import Newsticker from './ticker/newsticker'  
import BacktoTop from './backtotop/backtotop'

const Togglefuction = () => {
  document.querySelector(".app")?.classList.remove("sidenav-toggled");
    //rightsidebar
    document.querySelector(".sidebar-right").classList.remove("sidebar-open");
    document.querySelector('.demo_changer').classList.remove('active');
    document.querySelector(".demo_changer").style.right = "-275px";
}
function App() {
  document.body.classList.remove('bg-account')
  return (
    <Fragment>
      <Provider store={store}>
      <div className="horizontalMenucontainer" >
        <Switcher />
        <div className="page"  style={{backgroundColor: 'white'}}>
          <div className="page-main">
            <Header />
            <Newsticker/>
            <Sidebar />
            <div className="main-content app-content" onClick={() => Togglefuction()}>
              <div className="side-app">
                <div className="main-container container-fluid">
                  <Outlet />
                </div>
              </div>
            </div>x
          </div>
          <Rightsidebar />
          <Footer />
        </div>
       
      </div>
     
      <BacktoTop/>
      </Provider>
    </Fragment>

  )
}

export default App
