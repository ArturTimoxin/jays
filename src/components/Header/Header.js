import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../store/configureStore.js";
import logoMini from "../../assets/img/jays-logo-mini-white.png";
import logoMiniBlack from "../../assets/img/jays-logo-mini-black.png";
import menuLogoMobile from "../../assets/img/mobile-menu-logo.png";
import instIcon from "../../assets/img/fb-icon-mini.png";
import fbIcon from "../../assets/img/inst-icon-mini.png";

class Header extends Component {
  state = {
    showMenu: false,
  };

  toggleShowMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  handleActionLogoMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
    history.push("/");
  };

  render() {
    const { showMenu } = this.state;
    return (
      <header>
        <img
          src={logoMini}
          alt="jays-logo-mini"
          id="logo-mini"
          onClick={() => {
            history.push("/");
          }}
        />
        <img src={menuLogoMobile} alt="menu" id="menu-logo" onClick={this.toggleShowMenu} />
        <div className={`menuBar ${showMenu ? "open" : ""}`}>
          <div className="wrapperInfoMenuBar">
            <img
              src={logoMiniBlack}
              id="logo-mini-black"
              alt="jays-logo-mini-black"
              onClick={this.handleActionLogoMenu}
            />
            <NavLink id="menu-item" to="/philosophy" onClick={this.toggleShowMenu}>
              PHILOSOPHSY
            </NavLink>
            <NavLink id="menu-item" to="/locations" onClick={this.toggleShowMenu}>
              LOCATIONS
            </NavLink>
            <NavLink id="menu-item" to="/shop" onClick={this.toggleShowMenu}>
              SHOP
            </NavLink>
            <NavLink id="menu-item" to="/contacts" onClick={this.toggleShowMenu}>
              CONTACTS
            </NavLink>
          </div>
          <button id="closeMenuBar" onClick={this.toggleShowMenu}>
            +
          </button>
        </div>
        <div className="nav">
          <div className="wrapperNavlinks">
            <NavLink to="/philosophy">PHILOSOPHSY</NavLink>
            <NavLink to="/locations">LOCATIONS</NavLink>
            <NavLink to="/shop">SHOP</NavLink>
            <NavLink to="/contacts">CONTACTS</NavLink>
          </div>
          <div className="wrapperIconLinks">
            <img src={fbIcon} alt="fbIcon" />
            <img src={instIcon} alt="fbIcon" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
