import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import testCenters from '../data/testCenters';
//const drawerMenuItemData = [];

export default function StateCenterMenu(props) {
  const [selectedIndex, setSelectedIndex] = React.useState('');
  //const drawerMenuItemData = testCenters;
  const handleClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex('');
    } else {
      setSelectedIndex(index);
    }
  };
  const statelist = [
    ...new Set(testCenters.map((locations) => locations.state)),
  ];
  let drawerMenuItemData = [];
  statelist.forEach((place) => {
    let cities = [];
    testCenters.forEach((obj) => {
      // console.log(obj);
      //console.log(place);
      if (obj.state === place) cities.push(obj.city);
    });
    let statecityindex = {
      state: place,
      cities: cities,
    };
    drawerMenuItemData.push(statecityindex);
  });
  return (
    <List component="nav">
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
              <ListItemText primary={item.state} />
              {index === selectedIndex ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={index === selectedIndex} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.cities.map((sub, index) => {
                  return (
                    <ListItem button>
                      <ListItemText primary={sub} />
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
