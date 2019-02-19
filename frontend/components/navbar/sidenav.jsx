import React, { Component } from 'react';

class SideNav extends Component {
  render() {
    const { showNav } = this.props;
    let classes = ["sidenav-container"]
    classes.push(showNav ? "opened" : "closed");
    return (
      <>
        <div className={classes.join(" ")}>
        </div>
      </>
    )
  }
}

export default SideNav;
