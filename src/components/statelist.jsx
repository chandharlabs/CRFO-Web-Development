import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import testCenters from '../data/testCenters';
const drawerMenuItemData = [];

export default function stateCenterMenu() {
  const [selectedIndex, setSelectedIndex] = React.useState('');
  const drawerMenuItemData = testCenters;
  const handleClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex('');
    } else {
      setSelectedIndex(index);
    }
  };
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      {drawerMenuItemData.map((item, index) => {
        return (
          <List>
            <ListItem
              key={index}
              button
              onClick={() => {
                handleClick(index);
              }}
            >
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.state} />
              {index === selectedIndex ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={index === selectedIndex} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.submenu.map((sub, index) => {
                  return (
                    <ListItem button>
                      <ListItemText primary={sub.name} />
                    </ListItem>
                  );
                })}
              </List>
            </Collapse>
          </List>
        );
      })}
    </List>
  );
}
