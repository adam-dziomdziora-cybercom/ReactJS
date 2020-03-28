import React from 'react';

import styles from './style/loader.less';

class MyLoader extends React.PureComponent {
  render() {
    return <div className={styles.loader} />;
  }
}

export default MyLoader;
