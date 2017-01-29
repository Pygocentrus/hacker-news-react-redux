import React, { PropTypes, Component } from 'react';
import { isUndefined } from 'lodash';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import * as routes from '../constants/routes';
import * as sections from '../constants/sections';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isRightMenuOpen: false };
  }

  backToDashboard = () => {
    this.context.router.push(routes.HOME);
  }

  handleMenuItem = (e, child) => {
    e.preventDefault();
    if (!isUndefined(child)) {
      this.toggleMenu();

      switch (child.props.primaryText) {
        case sections.TOP: { this.props.getTopStories(); this.backToDashboard(); break; }
        case sections.NEWS: { this.props.getNewsStories(); this.backToDashboard(); break; }
        case sections.SHOW: { this.props.getShowStories(); this.backToDashboard(); break; }
        case sections.ASK: { this.props.getAskStories(); this.backToDashboard(); break; }
        case sections.JOBS: { this.props.getJobsStories(); this.backToDashboard(); break; }
        default:
      }
    }
  }

  moveToSearch = () => {
    this.context.router.push(routes.SEARCH);
  }

  toggleMenu = () => {
    this.setState({ isRightMenuOpen: !this.state.isRightMenuOpen });
  }

  render() {
    return (
      <AppBar title="Hacker news" className="Header" iconClassNameLeft="i-hn-logo" onLeftIconButtonTouchTap={this.backToDashboard}>
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
            <MenuItem onTouchTap={this.moveToSearch} primaryText={sections.SEARCH} />
            <Divider />
            <MenuItem primaryText={sections.TOP} />
            <MenuItem primaryText={sections.NEWS} />
            <MenuItem primaryText={sections.SHOW} />
            <MenuItem primaryText={sections.ASK} />
            <MenuItem primaryText={sections.JOBS} />
          </IconMenu>
        </div>
      </AppBar>
    );
  }
}

Header.contextTypes = {
  router: PropTypes.object.isRequired,
};

Header.propTypes = {
  getTopStories: PropTypes.func.isRequired,
  getNewsStories: PropTypes.func.isRequired,
  getShowStories: PropTypes.func.isRequired,
  getAskStories: PropTypes.func.isRequired,
  getJobsStories: PropTypes.func.isRequired,
};

export default Header;
