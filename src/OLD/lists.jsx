import React from 'react';
import PropTypes from 'prop-types';

import styles from './style/lists.less';
const List = props => {
  return (
    <ul id={props.id} className={styles.list}>
      My list with ID: '
      <b>
        <u>
          <i>{props.id}</i>
        </u>
      </b>
      '
      {props.valueToInject.length > 0 && (
        <p>OK, so you want to display also '{props.valueToInject}'</p>
      )}
    </ul>
  );
};

List.propTypes = {
  id: PropTypes.string.isRequired,
  valueToInject: PropTypes.string,
};

List.defaultProps = {
  valueToInject: '',
};

export default List;
