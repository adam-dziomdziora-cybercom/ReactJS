import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.less';
import List from './lists';

const HelloWorld = props => {
  const idFromVariable = '123_List_Id';

  return (
    <div>
      <h1 className="header">Hello World!</h1>
      <p>I will display &#9749;</p>
      <div id="injectHere" />
      <div id="andHere" />
      <div id="restHere" />
      <div id="orHere" />
      <div id="lastHere" />
      <List id="idFromHand" valueToInject="interesting" />
      <List id={idFromVariable} />
    </div>
  );
};

ReactDOM.render(<HelloWorld />, document.getElementById('root'));

ReactDOM.render(
  React.createElement('h2', null, 'Playing with react is cool'),
  document.getElementById('injectHere')
);

ReactDOM.render(
  React.createElement(
    'ul',
    { id: 'myList' },
    React.createElement('li', { id: 'item1' }, 'item 1 hi \u26CF;')
  ),
  document.getElementById('andHere')
);

ReactDOM.render(
  <ul id="list">
    <li>Item 2 hello &#129409;</li>
  </ul>,
  document.getElementById('restHere')
);

const listId = 'myList1';
const listItem = <li>is it possible?</li>;
ReactDOM.render(
  <ul id={listId}>
    <li>Item hello &#129410;</li>
    {listItem}
  </ul>,
  document.getElementById('orHere')
);

const listId2 = 'myList2';
// Array.from(  { length: 10 },   (_, idx) => `${++idx}`)
const listItems = [13, 42, 84].map(value => (
  <li key={value}>{`String with variable here ${value}`}</li>
));
ReactDOM.render(
  <ul id={listId2}>{listItems}</ul>,
  document.getElementById('lastHere')
);
