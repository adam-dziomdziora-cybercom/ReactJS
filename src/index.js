import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.less';

const HelloWorld = props => {
  return (
    <div>
      <h1 className="header">Hello World!</h1>
      <p>I will display &#9749;</p>
      <div id="injectHere" />
      <div id="andHere" />
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
