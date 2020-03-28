import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { Link } from 'react-router-dom';

class TopMenu extends React.PureComponent {
  getLinks = () => {
    const { links } = this.props;
    const res = links.map((link, index) => {
      const url = link.get('url', '');
      const label = link.get('label', '');
      return (
        <li key={index}>
          <Link to={url}>{label}</Link>
        </li>
      );
    });
    return res;
  };

  render() {
    return <ul>{this.getLinks()}</ul>;
  }
}

TopMenu.propTypes = {
  links: ImmutablePropTypes.list.isRequired,
};

export default TopMenu;
