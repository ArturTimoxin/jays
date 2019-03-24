import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../store/configureStore.js";
import logoMiniWhite from "../../assets/img/jays-logo-mini-white.png";
import logoMiniBlack from "../../assets/img/jays-logo-mini-black.png";
import menuWhiteLogoMobile from "../../assets/img/mobile-white-menu-logo.png";
import menuBlackLogoMobile from "../../assets/img/mobile-black-menu-logo.png";
import fbIcon from "../../assets/img/fb-icon-mini.png";
import instIcon from "../../assets/img/inst-icon-mini.png";

class Header extends Component {
  state = {
    showMenu: false,
    blackLinks: false,
    blackMenuLogo: false,
    linksInfo: [
      { link: "/philosophy", name: "PHILOSOPHY" },
      { link: "/locations", name: "LOCATIONS" },
      { link: "/shop", name: "SHOP" },
      { link: "/contacts", name: "CONTACTS" },
    ],
  };

  componentWillMount() {
    if (history.location.pathname !== "/") {
      this.setState({ blackLinks: true, blackMenuLogo: true });
    }
  }

  toggleShowMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  handleActionLogoMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
    history.push("/");
    this.setState({ blackLinks: false, blackMenuLogo: false });
  };

  handleActionLinksMenu = () => {
    this.toggleShowMenu();
    this.setState({ blackLinks: true, blackMenuLogo: true });
  };

  render() {
    const { showMenu, blackLinks, blackMenuLogo, linksInfo } = this.state;
    return (
      <header>
        <img
          src={blackLinks ? logoMiniBlack : logoMiniWhite}
          alt="jays-logo-mini"
          id="logo-mini"
          onClick={() => {
            history.push("/");
            this.setState({ blackLinks: false, blackMenuLogo: false });
          }}
        />
        <img
          src={blackMenuLogo ? menuBlackLogoMobile : menuWhiteLogoMobile}
          alt="menu"
          id="menu-logo"
          onClick={this.toggleShowMenu}
        />
        <div className={`menuBar ${showMenu ? "open" : ""}`}>
          <div className="wrapperInfoMenuBar">
            <img
              src={logoMiniBlack}
              id="logo-mini-black"
              alt="jays-logo-mini-black"
              onClick={this.handleActionLogoMenu}
            />
            {linksInfo.map(elem => (
              <NavLink to={elem.link} id="menu-item" onClick={this.handleActionLinksMenu}>
                {elem.name}
              </NavLink>
            ))}
          </div>
          <button id="closeMenuBar" onClick={this.toggleShowMenu}>
            +
          </button>
        </div>
        <div className="nav">
          <div className="wrapperNavlinks">
            {linksInfo.map(elem => (
              <NavLink
                to={elem.link}
                style={{ color: blackLinks ? "black" : "white" }}
                onClick={() => {
                  this.setState({ blackLinks: true, blackMenuLogo: true });
                }}
              >
                {elem.name}
              </NavLink>
            ))}
          </div>
          <div className="wrapperIconLinks">
            <img src={instIcon} alt="instIcon" />
            <img
              src={fbIcon}
              alt="fbIcon"
              onClick={() => (document.location.href = "https://www.facebook.com/jayscoffeebrewers/")}
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
