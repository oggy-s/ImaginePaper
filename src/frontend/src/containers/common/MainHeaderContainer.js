import React, { Component } from 'react';
import MainHeader from 'components/common/MainHeader';
import MainDrawers from 'components/common/MainDrawers';


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

    render() {
    
        const { drawerOpen } = this.state;
        const { history } = this.props;
        
        const { 
            handleLeftClick,
            handleTitleClick,
            handleRightClick,
            handleToggleDrawer
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
                />
            </div>
        )
    }
}

export default MainHeaderContainer;