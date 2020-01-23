import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.less';

const HelloWorld = props => {
  return <h1 className="header">Hello World!</h1>;
};

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
