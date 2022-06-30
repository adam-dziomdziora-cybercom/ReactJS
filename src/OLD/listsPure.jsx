import React from 'react';
import PropTypes from 'prop-types';
import styles from './style/listsPure.less';

class ListPure extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { items: [1, 2, 3] };
    this.doStuff = this.doStuff.bind(this);
  }

  doNothing() {
    /*
      actually this function does nothing :) 
      */
  }

  doStuff() {
    const { items } = this.state;
    const lastItemIncreased = items[items.length - 1] + 1;
    const newItems = [...items, lastItemIncreased];
    this.setState({ items: newItems });
  }

  render() {
    console.log('I am rendering');
    const { id, valueToInject } = this.props;
    const { items } = this.state;

    return (
      <div className={styles.listPure}>
        <ul id={id}>
          My list with ID: {id} state: {items}
          {valueToInject.length > 0 && (
            <p>OK, so you want to display also {valueToInject}</p>
          )}
        </ul>
        <button className="btn btn-primary" onClick={this.doNothing}>
          do nothing
        </button>
        <button className="btn btn-secondary" onClick={this.doStuff}>
          click
        </button>
      </div>
    );
  }
}

ListPure.propTypes = {
  id: PropTypes.string.isRequired,
  valueToInject: PropTypes.string,
};

ListPure.defaultProps = {
  valueToInject: '',
};

export default ListPure;
