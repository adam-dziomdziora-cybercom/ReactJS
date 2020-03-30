import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, FormGroup, FormControl } from 'react-bootstrap';

class EditPlaceModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.place };
  }

  handleNameChange = event => {
    const { value } = event.target;
    this.setState({ name: value });
  };

  handleOccupationChange = event => {
    const { checked } = event.target;
    this.setState({ occupied: checked });
  };

  render() {
    const { show, onClose, onSave } = this.props;
    const { name, occupied } = this.state;

    return (
      <Modal
        show={show}
        onHide={onClose}
        aria-labelledby="contained-modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">Edit place</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup>
            <h2>Place name</h2>
            <FormControl
              type="text"
              value={name}
              placeholder="Enter place name"
              onChange={this.handleNameChange}
            />
          </FormGroup>
          <FormGroup>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                checked={occupied}
                onChange={this.handleOccupationChange}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Occupied
              </label>
            </div>
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => onSave(this.state)}>Save</Button>
          <Button onClick={onClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

EditPlaceModal.propTypes = {
  place: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    occupied: PropTypes.bool,
  }).isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EditPlaceModal;
