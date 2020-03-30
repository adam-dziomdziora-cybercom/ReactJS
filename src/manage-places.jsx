import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import EditPlaceModal from './edit-modal';
import { fromJS } from 'immutable';

class ManagePlaces extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      places: fromJS([
        { id: 1, name: 'Place #1', occupied: false },
        { id: 2, name: 'Place #2', occupied: true },
        { id: 3, name: 'Place #3', occupied: false },
        { id: 4, name: 'Place #4', occupied: false },
        { id: 5, name: 'Place #5', occupied: true },
      ]),
      selectedPlace: {},
    };
  }
  getPlaces = () => {
    const { places } = this.state;
    return places.map(place => {
      const placeJS = place.toJS();
      const id = place.get('id', -1);
      const name = place.get('name', '');
      const occupied = place.get('occupied', false);
      return (
        <ListGroupItem
          key={id}
          variant={occupied ? 'danger' : 'success'}
          onClick={() => this.showEditPlaceModal(placeJS)}
        >
          {name}
        </ListGroupItem>
      );
    });
  };

  showEditPlaceModal = place => {
    this.setState({
      edit: true,
      selectedPlace: place,
    });
  };

  closeEditPlaceModal = () => {
    this.setState({
      edit: false,
      selectedPlace: {},
    });
  };

  saveEditPlaceModal = updatedPlace => {
    const { places } = this.state;

    const placeIndex = places.findIndex(
      p => p.get('id', -1) === updatedPlace.id
    );
    if (placeIndex === -1) {
      return;
    }

    const newPlaces = places.set(placeIndex, fromJS(updatedPlace));

    this.setState({
      places: newPlaces,
    });

    this.closeEditPlaceModal();
  };

  render() {
    const { selectedPlace, edit } = this.state;
    return (
      <React.Fragment>
        <h1>You can manage parking places here.</h1>
        <ListGroup>{this.getPlaces()}</ListGroup>
        <EditPlaceModal
          key={selectedPlace.id}
          show={edit}
          onClose={this.closeEditPlaceModal}
          onSave={this.saveEditPlaceModal}
          place={selectedPlace}
        />
      </React.Fragment>
    );
  }
}

export default ManagePlaces;
