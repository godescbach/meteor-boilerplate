import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

const PrivateHeader = (props) => {
    return (
        <div className="header">
          <div className="header__content">
            <h1 className="header__title">{props.title}</h1>
            <button className="button button--link-text" onClick={() => props.handleLogout()}>Logout</button>
          </div>
        </div>
    );
};

PrivateHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  handleLogout: React.PropTypes.func.isRequired
};

export default PrivateHeader;
