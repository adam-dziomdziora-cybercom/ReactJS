import React from 'react';
import PropTypes from 'prop-types';
import styles from './style/listsComponent.less';

class ListComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.doStuff = this.doStuff.bind(this);
    this.doNothing = this.doNothing.bind(this);
  }

  doNothing() {
    this.forceUpdate();
  }

  doStuff() {
    const { onChange, items } = this.props;
    const lastItem = items[items.length - 1];
    onChange(lastItem);
  }

  render() {
    console.log('I am rendering 2');
    const { id, valueToInject, items } = this.props;

    return (
      <div className={styles.listPure}>
        I am full react component
        <ul id={id}>
          My list with ID: '{id}' state: {items}
          {valueToInject.length > 0 && (
            <p>OK, so you want to display also '{valueToInject}'</p>
          )}
        </ul>
        <button className="btn btn-success" onClick={this.doNothing}>
          do nothing
        </button>
        <button className="btn btn-warning" onClick={this.doStuff}>
          click
        </button>
      </div>
    );
  }
}

ListComponent.propTypes = {
  id: PropTypes.string.isRequired,
  valueToInject: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

ListComponent.defaultProps = {
  valueToInject: '',
};

export default ListComponent;
