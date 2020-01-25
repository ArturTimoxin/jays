import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { history } from "../../store/configureStore.js";
import { connect } from "react-redux";
import {
  TOGGLE_SHOW_MENU,
  HOME_BLACK_COLOR_LINKS,
  HOME_WHITE_COLOR_LINKS,
  TOGGLE_SHOW_CART_MODAL,
} from "../../constants/constants";
import logoMiniWhite from "../../assets/img/jays-logo-mini-white.png";
import logoMiniBlack from "../../assets/img/jays-logo-mini-black.png";
import menuWhiteLogoMobile from "../../assets/img/mobile-white-menu-logo.png";
import menuBlackLogoMobile from "../../assets/img/mobile-black-menu-logo.png";
import fbIconWhite from "../../assets/img/fb-white-icon-mini.png";
import instIconWhite from "../../assets/img/inst-white-icon-mini.png";
import fbIconBlack from "../../assets/img/fb-black-icon-mini.png";
import instIconBlack from "../../assets/img/inst-black-icon-mini.png";
import cartIconBlack from "../../assets/img/shopping-cart.png";
import cartIconWhite from "../../assets/img/white-shopping-cart.png";
class Header extends Component {
  componentDidMount() {
    if (history.location.pathname !== "/") {
      this.props.homeBlackColorLinks();
    }
  }

  // when use protected route or other redirects
  componentWillReceiveProps() {
    if (history.location.pathname === "/") {
      this.props.homeWhiteColorLinks();
    }
  }

  handleActionLogoMenu = () => {
    this.props.toggleShowMenu();
    this.props.homeWhiteColorLinks();
  };

  handleActionLinksMenu = () => {
    this.props.toggleShowMenu();
    this.props.homeBlackColorLinks();
  };

  render() {
    const {
      showMenu,
      blackLinks,
      blackMenuLogo,
      linksInfo,
      toggleShowMenu,
      homeWhiteColorLinks,
      homeBlackColorLinks,
      toggleShowCartModal,
      showCartIcon,
    } = this.props;
    return (
      <header>
        <Link to="/">
          <img
            src={blackLinks ? logoMiniBlack : logoMiniWhite}
            alt="jays-logo-mini"
            id="logo-mini"
            onClick={homeWhiteColorLinks}
          />
        </Link>
        <img
          src={blackMenuLogo ? menuBlackLogoMobile : menuWhiteLogoMobile}
          alt="menu"
          id="menu-logo"
          onClick={toggleShowMenu}
        />
        <div className={`menuBar ${showMenu ? "open" : ""}`}>
          <div className="wrapperInfoMenuBar">
            <Link to="/">
              <img
                src={logoMiniBlack}
                id="logo-mini-black"
                alt="jays-logo-mini-black"
                onClick={this.handleActionLogoMenu}
              />
            </Link>
            {linksInfo.map(elem => (
              <NavLink key={elem.name} to={elem.link} id="menu-item" onClick={this.handleActionLinksMenu}>
                {elem.name}
              </NavLink>
            ))}
          </div>
          <button id="closeMenuBar" onClick={toggleShowMenu}>
            +
          </button>
        </div>
        <div className="nav">
          <div className="wrapperNavlinks">
            {linksInfo.map(elem => (
              <NavLink
                key={elem.name}
                to={elem.link}
                style={{ color: blackLinks ? "black" : "white" }}
                onClick={homeBlackColorLinks}
              >
                {elem.name}
              </NavLink>
            ))}
          </div>
          <div className="wrapperIconLinks">
            <img
              src={blackLinks ? cartIconBlack : cartIconWhite}
              className={`cartIcon ${showCartIcon ? "show" : ""}`}
              alt="cart-icon"
              onClick={toggleShowCartModal}
            />
            <a href="https://www.instagram.com/explore/locations/2102254823147526/jays-coffee-brewers/">
              <img src={blackLinks ? instIconBlack : instIconWhite} alt="instIcon" />
            </a>
            <a href="https://www.facebook.com/jayscoffeebrewers/">
              <img src={blackLinks ? fbIconBlack : fbIconWhite} alt="fbIcon" />
            </a>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = store => {
  return {
    showMenu: store.header.showMenu,
    blackLinks: store.header.blackLinks,
    blackMenuLogo: store.header.blackMenuLogo,
    linksInfo: store.header.linksInfo,
    showCartIcon: store.cartModal.showCartIcon,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleShowMenu: () => dispatch({ type: TOGGLE_SHOW_MENU }),
    homeBlackColorLinks: () => dispatch({ type: HOME_BLACK_COLOR_LINKS }),
    homeWhiteColorLinks: () => dispatch({ type: HOME_WHITE_COLOR_LINKS }),
    toggleShowCartModal: () => dispatch({ type: TOGGLE_SHOW_CART_MODAL }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
