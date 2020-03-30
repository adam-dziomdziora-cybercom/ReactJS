import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { fromJS } from 'immutable';

class Places extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      places: fromJS([
        { id: 1, name: 'Place #1', occupied: false },
        { id: 2, name: 'Place #2', occupied: true },
        { id: 3, name: 'Place #3', occupied: false },
        { id: 4, name: 'Place #4', occupied: false },
        { id: 5, name: 'Place #5', occupied: true },
      ]),
    };
  }

  getPlaces = () => {
    const { places } = this.state;

    return places.map(place => {
      const id = place.get('id', -1);
      const name = place.get('name', '');
      const occupied = place.get('occupied', false);
      return (
        <ListGroupItem key={id} variant={occupied ? 'danger' : 'success'}>
          {name}
        </ListGroupItem>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Parking places:</h1>
        <ListGroup>{this.getPlaces()}</ListGroup>
      </React.Fragment>
    );
  }
}

export default Places;
