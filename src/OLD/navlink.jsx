import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../logo';

class TopMenu extends React.PureComponent {
  getLinks = () => {
    const { links } = this.props;
    const res = links.map((link, index) => {
      const url = link.get('url', '');
      const label = link.get('label', '');
      return (
        <Nav.Link key={index} href={`#${url}`}>
          {label}
        </Nav.Link>
      );
    });
    return res;
  };

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img alt="" src={logo} className="d-inline-block align-top" />
          React Bootstrap
        </Navbar.Brand>
        <Nav className="mr-auto">{this.getLinks()}</Nav>
      </Navbar>
    );
  }
}

TopMenu.propTypes = {
  links: ImmutablePropTypes.list.isRequired,
};

export default TopMenu;
