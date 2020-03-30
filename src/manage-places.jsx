import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import EditPlaceModal from './edit-modal';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import * as actionsWithAlias from './places.actions';

const mapStateToProps = state => {
  return {
    places: state.get('places', List()),
  };
};

const mapDispatchToProps = dispatch => ({
  superPlacesActions: bindActionCreators(actionsWithAlias, dispatch),
  directEditPlaceMethod: place => dispatch(actionsWithAlias.editPlace(place)),
});
class ManagePlaces extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      selectedPlace: {},
    };
  }
  getPlaces = () => {
    const { places } = this.props;
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
    this.props.directEditPlaceMethod(updatedPlace);
    // OR
    // this.props.superPlacesActions.editPlace(updatedPlace);

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

ManagePlaces.propTypes = {
  places: ImmutablePropTypes.list.isRequired,
  directEditPlaceMethod: PropTypes.func.isRequired,
  superPlacesActions: PropTypes.shape({
    editPlace: PropTypes.func.isRequired,
  }).isRequired,
};

ManagePlaces = connect(mapStateToProps, mapDispatchToProps)(ManagePlaces);
export default ManagePlaces;
