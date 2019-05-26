import React from 'react';
import './MainHeader.css';


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// const MainHeader = ( {leftClick, titleClick, rightClick}) => {
//     return (
//         <div className='main-header'>
//             <div className='main-header-left' onClick={leftClick}>
//                 이쿠
//             </div>
//             <div className='main-header-title' onClick={titleClick}>
//                 MainHeader
//             </div>
//             <div className='main-header-right' onClick={rightClick}>
//                 에쿠
//             </div>
//         </div>
//     )
// }


const styles = {
    root: {
      flexGrow: 1,
    },
    bg: {
      backgroundColor: '#3e3e3e'
    },
    grow: {
      flexGrow: 1,
      textAlign: 'left'
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };
  
const MainHeader = (props) => {
    const { classes, leftClick, titleClick, rightClick, } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.bg}>
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={leftClick}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow} onClick={titleClick}>
                        상상도화지
                    </Typography>
                    {/* <Button color="inherit" onClick={rightClick}>Home</Button> */}
                </Toolbar>
            </AppBar>
        </div>
    );
}
  
MainHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
  export default withStyles(styles)(MainHeader);
