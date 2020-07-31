import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Location from '../../functions/location/Location';
import logo from './../../assets/images/logo.png';

function Header() {

  const menuItems =[
    {
      'name':'Home', 
      'route': '/pokedex'
    },
    {
      'name':'About', 
      'route': '/pokedex/about'
    }
  ];

  return(
    <Style>
      <nav className="header">
        <div className="max-size">
          <img src={logo} className="logo" alt="logo" style={{ height: '50px' }} />
          <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
              {menuItems && menuItems.map((item, index)=>(
                <Link key={index} id={index} to={item.route}>
                  <li className={`${ Location(item.route) && 'active' }`}>
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
      </nav>
    </Style>
  )
} 

const Style = styled.nav`
font-family: 'Open Sans', sans-serif;
.header {
  background-color: #fff;
  box-shadow: 0px 0px 4px 0 rgba(0,0,0,.1);
  display: inline-block;
  width: 100%;
  z-index: 300;
  margin-bottom: 10px;
  font-weight: bold;
}

.max-size {
  margin: auto;
  max-width: 1366px;
}

.active {
  color: #979797 !important;
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: #fff;
}

ul {
  margin: 10px 0px;
  position: relative;
}
ul li {
  display: inline;
  list-style: none;
  padding: 20px 20px 22px;
}

.header li a {
  display: block;
  padding: 20px 20px;
  border-right: 1px solid #f4f4f4;
  text-decoration: none;
}

.header li a:hover,
.header .menu-btn:hover {
  background-color: #f4f4f4;
}

.header .logo {
  display: block;
  float: left;
  font-size: 2em;
  padding: 10px 20px;
  text-decoration: none;
}

/* menu */

.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height .2s ease-out;
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.header .menu-icon .navicon {
  background: #333;
  display: block;
  height: 2px;
  position: relative;
  transition: background .2s ease-out;
  width: 18px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #333;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu button */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 240px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}


@media (min-width: 500px) {
  .header li {
    float: left;
  }
  .header li {
    padding: 24px 30px;
    color: #000;
    &:hover {
        color: #979797;
    }
  }
  .header .menu {
    clear: none;
    float: right;
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }
  ul li {
        display: flex;
    }
}

@media (max-width: 500px){
    ul li {
        display: block;
        color: #000000;
    }
    a {
        text-decoration: none;
    }
}

`;

export default Header;