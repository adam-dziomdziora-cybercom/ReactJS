import React from 'react';
import style from './style/home.less';
import { connect } from 'react-redux';
import { TYPES } from './redux/count.reducer';
import { PropTypes } from 'prop-types';

const mapStateToProps = (state) => {
  return {
    count: state.get('counter', 0),
    nameMapped: state.get('name', ''),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrementClick: () => dispatch({ type: TYPES.INCREMENT }),
    handleDecrementClick: () => dispatch({ type: TYPES.DECREMENT }),
    handleModifyClick: (value) =>
      dispatch({ type: TYPES.MODIFY, valueToModify: value }),
  };
};
class Home extends React.PureComponent {
  handleModifyClick = () => {
    const value = Math.random();
    this.props.handleModifyClick(value);
  };

  render() {
    return (
      <div>
        <h2>Redux power: {this.props.count}</h2>
        <button
          className="btn btn-primary"
          onClick={this.props.handleIncrementClick}
        >
          REDUX +++
        </button>
        <button
          className="btn btn-warning"
          onClick={this.props.handleDecrementClick}
        >
          REDUX ---
        </button>

        <button className="btn btn-danger" onClick={this.handleModifyClick}>
          REDUX ??? :D
        </button>
        <h3>REDUX name: {this.props.nameMapped}</h3>
        <div className={style.body}>
          <h1 aria-label="Cybercom loves&#129414;" />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  count: PropTypes.number.isRequired,
  nameMapped: PropTypes.string.isRequired,
  handleIncrementClick: PropTypes.func.isRequired,
  handleDecrementClick: PropTypes.func.isRequired,
  handleModifyClick: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
