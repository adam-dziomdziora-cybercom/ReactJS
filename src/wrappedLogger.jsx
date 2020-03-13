import React from 'react';

const withLogger = WrappedComponent =>
  class HOC extends React.PureComponent {
    componentDidMount() {
      console.log('Actual props: ', this.props);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
export default withLogger;
