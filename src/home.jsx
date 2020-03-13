import React from 'react';
import style from './style/home.less';

class Home extends React.PureComponent {
  render() {
    return (
      <div className={style.body}>
        <h1 aria-label="Cybercom loves&#129414;" />
      </div>
    );
  }
}

export default Home;
