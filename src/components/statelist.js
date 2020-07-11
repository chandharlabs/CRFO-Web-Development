import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import testCenters from '../data/testCenters';
// <<<<<<< master

// export default function StateCenterMenu(props) {
//   let {stateWiseData, onStateClick} = props;
//   const [selectedIndex, setSelectedIndex] = React.useState('');
  
// =======
// //const drawerMenuItemData = [];

export default function StateCenterMenu(props) {
  const [selectedIndex, setSelectedIndex] = React.useState('');
  //const drawerMenuItemData = testCenters;
// >>>>>>> master
  const handleClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex('');
    } else {
      setSelectedIndex(index);
    }
  };
// <<<<<<< master
  
//   return (
//     <List component="nav">
//       {stateWiseData.map((item, index) => {
// =======
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
// >>>>>>> master
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
// <<<<<<< master
//                 {item.sensors.map((sensor, index) => {
//                   return (
//                     <ListItem button>
//                       <ListItemText primary={sensor.city} onClick={()=>onStateClick(sensor)}/>
// =======
                {item.cities.map((sub, index) => {
                  return (
                    <ListItem button>
                      <ListItemText primary={sub} />
// >>>>>>> master
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
