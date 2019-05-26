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

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};


const MainDrawers = ({isOpen, toggle, handleMoveTo}) => {



  const testFunc = (e) => {
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
    <div >
      <div>
        뿌잉뿌잉<br></br>
        왕좌의 게임 <br></br>
        2019년 4월 11일 23:00시 본방 <br></br>
        11시라서 운동갈수있따~<br></br>
        6시 퇴근하고 저녁먹구 <br></br>
        빠르게 운동하고 <br></br>
        편의점들려서 간식사구 <br></br>
        왕좌의게임 본방 사수!! <br></br>
        헷~<br></br>
        결론은 커스터마이징 가능! <br></br>
        리덕스로 로그인상태 가져와서 <br></br>
        메뉴 목록을 바꿔주도록 하자~ <br></br>
      </div>
      <List>
        {/* 로그인 10-0 */}
        {['로그인/회원가입',].map((text, index) => (
          <div id={'10-'+index} key={index}>
            <ListItem button key={text} onClick={testFunc}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </div>
        ))}
      </List>
      <Divider />
      <List>
        {/* 마이페이지 20-0, 내글 20-1 즐겨찾기 20-2 */}
        {['마이페이지', '내글', '즐겨찾기'].map((text, index) => (
          <div id={'20-'+index} key={index}>
            <ListItem button key={text} onClick={testFunc}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </div>
        ))}
      </List>
      <Divider />
      <List>
        {/* 마이페이지 30-0 */}
        {['상상도화지', ].map((text, index) => (
          <div id={'30-'+index} key={index}>
            <ListItem button key={text} onClick={testFunc}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
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