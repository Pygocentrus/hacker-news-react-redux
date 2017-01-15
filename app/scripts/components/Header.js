import React, { PropTypes, Component } from 'react';
import { isUndefined } from 'lodash';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Link } from 'react-router';
import * as routes from '../constants/routes';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isRightMenuOpen: false };
  }

  handleMenuItem = (e, child) => {
    e.preventDefault();
    if (!isUndefined(child)) {
      this.toggleMenu();
      // TODO: Navigate towards section using `child.props.primaryText`
    }
  }

  toggleMenu = () => {
    this.setState({ isRightMenuOpen: !this.state.isRightMenuOpen });
  }

  render() {
    return (
      <AppBar title="Hacker news" className="Header" iconClassNameLeft="i-hn-logo">
        <div className="Header-links">
          <IconMenu
            onItemTouchTap={this.handleMenuItem}
            onTouchTap={this.toggleMenu}
            open={this.state.isRightMenuOpen}
            className="Header-moreIcon"
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
            <MenuItem primaryText="News" />
            <MenuItem primaryText="Comments" />
            <MenuItem primaryText="Show" />
            <MenuItem primaryText="Ask" />
            <MenuItem primaryText="Jobs" />
          </IconMenu>
        </div>
      </AppBar>
    );
  }
}

Header.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default Header;
