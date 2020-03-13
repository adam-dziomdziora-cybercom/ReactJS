import React from 'react';
import List from './lists';
import ListPure from './listsPure';
import withLogger from './wrappedLogger';
import ListComponent from './listsComponent';

class HelloWorld extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { date: '', items: [4, 5, 6] };
    this.updateListWithLogger = this.updateListWithLogger.bind(this);
  }

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

export default HelloWorld;
