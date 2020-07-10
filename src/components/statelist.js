import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import testCenters from '../data/testCenters';

export default function StateCenterMenu(props) {
  let {stateWiseData, onStateClick} = props;
  const [selectedIndex, setSelectedIndex] = React.useState('');
  
  const handleClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex('');
    } else {
      setSelectedIndex(index);
    }
  };
  
  return (
    <List component="nav">
      {stateWiseData.map((item, index) => {
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
                {item.sensors.map((sensor, index) => {
                  return (
                    <ListItem button>
                      <ListItemText primary={sensor.city} onClick={()=>onStateClick(sensor)}/>
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
