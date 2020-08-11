import React from 'react';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import testCenters from '../data/testCenters';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      states: [],
      selectedState: '--Choose State--',
      selectedCenter: '--Choose Center--',
      centers: [],
    };
    this.changeState = this.changeState.bind(this);
    this.changeCenter = this.changeCenter.bind(this);
    this.jumpToSelected = this.jumpToSelected.bind(this);
    this.stateReset = this.stateReset.bind(this);
  }

  componentDidMount() {
    const statelist = [
      ...new Set(testCenters.map((locations) => locations.state)),
    ];
    const drawerMenuItemData = [];

    statelist.forEach((place) => {
      const cities = [];
      testCenters.forEach((obj) => {
        if (obj.state === place) cities.push(obj.city);
      });
      const statecityindex = {
        state: place,
        cities,
      };
      drawerMenuItemData.push(statecityindex);
    });
    this.setState({ states: drawerMenuItemData });
  }

  changeState(event) {
    const { states } = this.state;
    this.setState({ selectedState: event.target.value });
    const centers = states.filter((state) => {
      return state.state === event.target.value;
    });
    this.setState({
      centers: centers[0].cities,
      selectedCenter: '--Choose Center--',
    });
  }

  changeCenter(event) {
    this.setState({ selectedCenter: event.target.value });
  }

  jumpToSelected() {
    const { selectedCenter } = this.state;
    const { handleStateClick } = this.props;
    if (selectedCenter === '--Choose Center--') alert('Please select center');
    else handleStateClick(selectedCenter);
  }

  stateReset() {
    console.log('State Reset');
    const { handleStateReset } = this.props;
    this.setState({
      selectedState: '--Choose State--',
      selectedCenter: '--Choose Center--',
      centers: [],
    });
    handleStateReset();
  }

  render() {
    const { selectedCenter, selectedState, states, centers } = this.state;
    return (
      <div>
        <h5> View data for specific states</h5>
        <div>
          <span>State: </span>

          <Select
            defaultValue="--Choose State--"
            value={selectedState}
            onChange={this.changeState}
          >
            <MenuItem key="s" value="--Choose State--" disabled>
              Select State
            </MenuItem>
            {states.map((place) => {
              return (
                <MenuItem key={`s${place.state}`} value={place.state}>
                  {place.state}
                </MenuItem>
              );
            })}
          </Select>
        </div>
        <br />
        <div>
          <span>Center: </span>
          <Select
            defaultValue="--Choose Center--"
            value={selectedCenter}
            onChange={this.changeCenter}
            displayEmpty
          >
            <MenuItem value="--Choose Center--" disabled key="a">
              Select Center
            </MenuItem>
            {centers.map((place) => {
              return (
                <MenuItem value={place} key={`s${place}`}>
                  {place}
                </MenuItem>
              );
            })}
          </Select>
        </div>
        <br />
        <Button
          contained
          color="primary"
          variant="contained"
          onClick={this.jumpToSelected}
        >
          Go to Location
        </Button>
        <Button onClick={this.stateReset}>Reset</Button>
      </div>
    );
  }
}
export default Dropdown;
