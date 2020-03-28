import React from 'react';
import Loadable from 'react-loadable';
import MyLoader from './loader';

// eslint-disable-next-line new-cap
const LoadableWelcome = Loadable({
  loader: () => import('./welcome'),
  loading: MyLoader,
});

export default LoadableWelcome;
