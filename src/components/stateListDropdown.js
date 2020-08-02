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
      // console.log(state);
      return state.state === event.target.value;
    });
    // console.log(centers[0].cities);
    this.setState({ centers: centers[0].cities });
    // console.log(this.state.centers);
  }

  changeCenter(event) {
    this.setState({ selectedCenter: event.target.value });
  }

  jumpToSelected() {
    if (this.state.selectedCenter === '--Choose Center--')
      alert('choose center');
    else this.props.handleStateClick(this.state.selectedCenter);
  }

  render() {
    // console.log(this.state.states);

    return (
      <div>
        <p> View Statistics for specific states</p>
        <div>
          <label>State </label>
          <Select
            placeholder="state"
            value={this.state.selectedState}
            onChange={this.changeState}
            displayEmpty
          >
            <MenuItem value="" disabled>--select state</MenuItem>
            {this.state.states.map((place) => {
              // console.log(place);
              return <MenuItem value={place.state}>{place.state}</MenuItem>;
            })}
          </Select>
        </div>
        <br />
        <div>
          <label>Center </label>
          <Select
            placeholder="center"
            value={this.state.selectedCenter}
            onChange={this.changeCenter}
            displayEmpty
          >
            <MenuItem value="" disabled>--Select Center</MenuItem>
            {this.state.centers.map((place) => {
              // console.log(place);
              return <MenuItem value={place}>{place}</MenuItem>;
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
          Select State
        </Button>
      </div>
    );
  }
}
export default Dropdown;
