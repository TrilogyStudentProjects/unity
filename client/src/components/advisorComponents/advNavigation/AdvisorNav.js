import React from "react";
import "./index.css"
import styled from "styled-components"

export default class NavBar extends React.Component {

  render() {
    return (
      <div className="z-depth-4 animatedNav">
        {/* Desktop navbar */}
        <div className="advNav hide-on-small-and-down">
          <div className="advNavItem" onClick={() => this.props.handleTab("home")}>
            <i className="small material-icons advNavIcons">home</i>
            <span className="advNavText">Home</span>
          </div>
          <div className="advNavItem" onClick={() => this.props.handleTab("clients")}>
            <i className="small material-icons advNavIcons">people</i>
            <span className="advNavText">Client List </span>
          </div>
          <div className="advNavItem" onClick={() => this.props.handleTab("messages")}>
            <i className="small material-icons advNavIcons">mail</i>
            <span className="advNavText">Messages</span>
          </div>
          <div className="advNavItem" onClick={() => this.props.handleTab("preferences")}>
            <i className="small material-icons advNavIcons">settings</i>
            <span className="advNavText">Preferences</span>
          </div>
        </div>
        {/* mobile navbar */}
        <div className="advNav hide-on-med-and-up advMobileFlex">
          <div className="advNavItem" onClick={() => this.props.handleTab("home")}>
            <i className="small material-icons advNavIcons">home</i>
          </div>
          <div className="advNavItem" onClick={() => this.props.handleTab("clients")}>
            <i className="small material-icons advNavIcons">people</i>
          </div>
          <div className="advNavItem" onClick={() => this.props.handleTab("messages")}>
            <i className="small material-icons advNavIcons">mail</i>
          </div>
          <div className="advNavItem" onClick={() => this.props.handleTab("preferences")}>
            <i className="small material-icons advNavIcons">settings</i>
          </div>
        </div>
      </div>
    )
  }
}