import React from 'react';
import testCenters from '../data/testCenters';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      states: [],
      selectedState: '--Choose State--',
      selectedCenter: '--Choose Center',
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
    this.setState({ selectedState: event.target.value });
    const centers = this.state.states.filter((state) => {
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
    this.props.handleStateClick(this.state.selectedCenter);
  }

  render() {
    // console.log(this.state.states);

    return (
      <div>
        hello world
        <div>
          <label>State</label>
          <select
            placeholder="state"
            value={this.state.selectedState}
            onChange={this.changeState}
          >
            <option>--select state</option>
            {this.state.states.map((place) => {
              // console.log(place);
              return <option>{place.state}</option>;
            })}
          </select>
        </div>
        <div>
          <label>Center</label>
          <select
            placeholder="center"
            value={this.state.selectedCenter}
            onChange={this.changeCenter}
          >
            <option>--Select Center</option>
            {this.state.centers.map((place) => {
              // console.log(place);
              return <option>{place}</option>;
            })}
          </select>
        </div>
        <button onClick={this.jumpToSelected}>Select State</button>
      </div>
    );
  }
}
export default Dropdown;
