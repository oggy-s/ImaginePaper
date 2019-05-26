import React, { Component } from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import { MainPage, LoginPage, MyPage, MyList, FavoListPage, PaperListPage, PaperWritePage, PaperPage, NotFoundPage } from 'pages'
import  MainHeaderContainer  from 'containers/common/MainHeaderContainer'
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        
        
        {/* test */}
        
        <div className='app-navi-wrap'>
          {/* <div className='app-navi-desc'> Page Test Navigation </div> */}
          <div className='app-navi'><NavLink exact to="/" activeClassName="menu-active"> 홈 </NavLink></div>
          {/* <div className='app-navi'><NavLink exact to="/main" activeClassName="menu-active"> 메인</NavLink></div> */}
          <div className='app-navi'><NavLink exact to="/login" activeClassName="menu-active"> 로그인 </NavLink></div>
          <div className='app-navi'><NavLink exact to="/mypage" activeClassName="menu-active"> 마이페이지  </NavLink></div>
          <div className='app-navi'><NavLink exact to="/mylist" activeClassName="menu-active"> 내글  </NavLink></div>
          <div className='app-navi'><NavLink exact to="/favolist" activeClassName="menu-active">즐겨찾기 </NavLink></div>
          <div className='app-navi'><NavLink exact to="/list" activeClassName="menu-active"> 목록 </NavLink></div>
          <div className='app-navi'><NavLink exact to="/write" activeClassName="menu-active"> 쓰기 </NavLink></div>
          <div className='app-navi'><NavLink exact to="/paper" activeClassName="menu-active"> 읽기 </NavLink></div>
        </div>

        {/* Main Header 공용으로 할까?  */}
        <div className='app-main-header'>
          <MainHeaderContainer/>
        </div>

        <Switch >
          <Route exact path="/" component={MainPage} />
          <Route exact path="/main" component={MainPage} />

          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/myList" component={MyList} />
          <Route exact path="/favolist" component={FavoListPage} />

          <Route exact path="/list" component={PaperListPage} />
          <Route exact path="/write" component={PaperWritePage} />
          <Route exact path="/paper" component={PaperPage} />
           
          <Route  component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
