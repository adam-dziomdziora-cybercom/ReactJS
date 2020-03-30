import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { List } from 'immutable';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';

const mapStateToProps = state => {
  return {
    places: state.get('places', List()),
  };
};

class Places extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  getPlaces = () => {
    const { places } = this.props;

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

Places.propTypes = {
  places: ImmutablePropTypes.list.isRequired,
};

Places = connect(mapStateToProps)(Places);
export default Places;
