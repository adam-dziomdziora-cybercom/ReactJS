import React from 'react';
import List from './lists';
import ListPure from './listsPure';
import withLogger from './wrappedLogger';
import ListComponent from './listsComponent';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { TYPES } from './redux/count.reducer';

const mapStateToProps = state => {
  return {
    count: state.counter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleIncrementClick: () => dispatch({ type: TYPES.INCREMENT }),
    handleDecrementClick: () => dispatch({ type: TYPES.DECREMENT }),
  };
};

class HelloWorld extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { date: '', items: [4, 5, 6] };
    this.updateListWithLogger = this.updateListWithLogger.bind(this);
  }

  handleIncrementClick = () => {
    this.props.handleIncrementClick();
  };

  handleDecrementClick = () => {
    this.props.handleDecrementClick();
  };

  updateListWithLogger = () => {
    const date = new Date().toLocaleTimeString();
    this.setState({ date });
  };

  onChange = lastValue => {
    const newValue = lastValue + 1;
    const items = [...this.state.items, newValue];
    const update = `Last update at ${new Date().toLocaleTimeString()} -> inserted value: ${newValue}`;
    this.setState({ update, items });
  };

  render() {
    const idFromVariable = '123_List_Id';
    const idPureFromVariable = '456_ListPure_Id';
    const valueToInject = 'what now?';
    const ListWithLogger = withLogger(ListComponent);

    return (
      <div>
        <h1 className="header">Hello World!</h1>
        <p>I will display &#9749;</p>
        <h2>Redux power: {this.props.count}</h2>
        <button onClick={this.handleIncrementClick}> REDUX +++</button>
        <button onClick={this.handleDecrementClick}> REDUX ---</button>
        <List id="idFromHand" valueToInject="interesting" />
        <List id={idFromVariable} />
        <ListPure id={idPureFromVariable} valueToInject={valueToInject} />
        <ListWithLogger
          id="556"
          valueToInject={this.state.date}
          onChange={this.onChange}
          items={this.state.items}
        />
        <p>{this.state.update}</p>
        <button onClick={this.updateListWithLogger}> lets update! </button>
      </div>
    );
  }
}

HelloWorld.propTypes = {
  count: PropTypes.number.isRequired,
  handleIncrementClick: PropTypes.func.isRequired,
  handleDecrementClick: PropTypes.func.isRequired,
};

HelloWorld = connect(mapStateToProps, mapDispatchToProps)(HelloWorld);

export default HelloWorld;
