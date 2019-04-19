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


const MainDrawers = ({isOpen, toggle}) => {

  
  const sideList = (
    <div >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );




  return (
    <div>
        <Button onClick={toggle}>Open Left</Button>
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