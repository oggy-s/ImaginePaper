import React from 'react';
import './MainDrawers.css';


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

// icons
import logo from 'assets/img/logo/ip_logo.png'
import Home from '@material-ui/icons/AccountBalance';
import LoginBox from '@material-ui/icons/AccountBox';
import MyList from '@material-ui/icons/Assignment';
import MyInfo from '@material-ui/icons/AssignmentInd';
import Favo from '@material-ui/icons/Favorite';
import IpList from '@material-ui/icons/Dashboard';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};


const MainDrawers = ({isOpen, toggle, handleMoveTo}) => {



  const clickFunc = (e) => {
    console.log("====== testFunc ======")
    const type = e.target.parentNode.parentNode.parentNode.id;
    console.log("clicked ", type);

    // const { history } = this.props;
    // const { history } = this.props;

    switch(type) {
      case "10-0":
        // 로그인 페이지
        handleMoveTo('/login');
      break;
      case "20-0":
        // 마이페이지
        handleMoveTo('/mypage');
      break;
      case "20-1":
        // 내글
        handleMoveTo('/mylist');
      break;
      case "20-2": 
        // 즐겨찾기
        handleMoveTo('/favolist');
      break;
      case "30-0":
        // 상상도화지
        handleMoveTo('/list');
      break;
      default:
    }
  

  }
  
  const sideList = (
    <div className="drawer-wrapper">
      <div className='drawer-top-section'>
        <div className='drawer-top-title'>
          <img src={logo} alt='logo' className="drawer-logo" />
          <div >
            상상도화지
          </div>
        </div>
        
        <div className='drawer-top-text'>
          Draw Anything You Think.
        </div>
        
        
        
      </div>
      <Divider />

      <div>
        # 로그인이 아닐경우 
        
        <List>
          {/* 로그인 10-0 */}
          {['로그인/회원가입',].map((text, index) => (
            <div id={'10-'+index} key={index}>
              <ListItem button key={text} onClick={clickFunc}>
                <ListItemIcon><LoginBox /></ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </div>
          ))}
        </List>
      </div>



      <Divider />
      <div>
        # 로그인 성공시<br></br>
        <div>
          이미지 <br></br>
          닉네임 
        </div>
        <List>
          {/* 마이페이지 20-0, 내글 20-1 즐겨찾기 20-2 */}
          {['마이페이지', '내글', '즐겨찾기'].map((text, index) => (
            <div id={'20-'+index} key={index}>
              <ListItem button key={text} onClick={clickFunc}>
                <ListItemIcon>{
                    index === 0 ?
                    <MyInfo /> :
                    index === 1 ?
                    <MyList /> :
                    <Favo/>
                  }</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </div>
          ))}
        </List>

      </div>

      {/* import MyList from '@material-ui/icons/Assignment';
    import MyInfo from '@material-ui/icons/AssignmentInd';
    import Favo from '@material-ui/icons/Favorite'; */}

      
      
      
      <Divider />
      <List>
        {/* 상상도화지 목록 30-0 */}
        {['상상도화지', ].map((text, index) => (
          <div id={'30-'+index} key={index}>
            <ListItem button key={text} onClick={clickFunc}>
              <ListItemIcon><IpList/></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </div>
        ))}
      </List>
    </div>
  );




  return (
    <div>
        
        <Drawer open={isOpen} onClose={toggle}>
          <div
            tabIndex={0}
            role="button"
            onClick={toggle}
            onKeyDown={toggle}
          >
            {sideList}
          </div>
        </Drawer>
       
    </div>
  )
}

const TemporaryDrawer = {
  propTypes : {
    classes: PropTypes.object.isRequired,
  }
};

export default  withStyles(styles)(MainDrawers)