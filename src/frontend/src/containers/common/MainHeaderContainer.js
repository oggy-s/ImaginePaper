import React, { Component } from 'react';
import MainHeader from 'components/common/MainHeader';
import MainDrawers from 'components/common/MainDrawers';
import {withRouter} from 'react-router-dom';

class MainHeaderContainer extends Component {
    state={
        drawerOpen: false
    }

    handleLeftClick = () => {
        console.log("====== header - handleLeftClick ======")
        this.handleToggleDrawer();
    }

    handleTitleClick = () => {
        console.log("====== header - handleTitleClick ======")
    }

    handleRightClick = () => {
        console.log("====== header - handleRightClick ======")
    }

    handleToggleDrawer = () => {
        console.log("====== header - handleToggleDrawer ======")
        const { drawerOpen } = this.state;
        // console.log("drawerOpen : ", drawerOpen )
        this.setState({
            drawerOpen: !drawerOpen,
        });
      };

    handleMoveTo = (target) => {
        const { history } = this.props;

        console.log("history : ", history)
        // history.back();
        history.push(target);
    }

    render() {
    
        const { drawerOpen } = this.state;
        const { history } = this.props;
        
        const { 
            handleLeftClick,
            handleTitleClick,
            handleRightClick,
            handleToggleDrawer,
            handleMoveTo,
        } = this;


        
        return (
            <div>
                <MainHeader
                    leftClick={handleLeftClick}
                    titleClick={handleTitleClick}
                    rightClick={handleRightClick}
                />
                <MainDrawers
                    isOpen = { drawerOpen }
                    toggle = { handleToggleDrawer}
                    handleMoveTo = {handleMoveTo}
                />
            </div>
        )
    }
}

export default withRouter(MainHeaderContainer);