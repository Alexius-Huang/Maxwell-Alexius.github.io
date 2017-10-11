import React from 'react'
import { Link, NavLink, IndexLink } from 'react-router-dom'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)
  }

  handleNavClick(event) {
    if (event.target.nodeName === 'A') {
      document.getElementById('toggle-nav-list').checked = false;
    }
  }

  render() {
    return (
      <nav className="navigation">
        <input type="checkbox" id="toggle-nav-list" />
        <label htmlFor="toggle-nav-list">
          <span className="nav-list-btn">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </label>
        <div onClick={this.handleNavClick} className="nav-wrapper">
          <NavLink to='/home'      activeClassName="active">About Me</NavLink>
          <NavLink to='/resumé'    activeClassName="active">Resumé</NavLink>
          <NavLink to='/portfolio' activeClassName="active">Portfolio</NavLink>
        </div>
      </nav>
    )
  }
}

// Navigation.defaultProps = {
//   navLinks: [
//     { key: 1, route: '/',          content: 'About Me' },
//     { key: 2, route: '/resumé',    content: 'Resumé' },
//     { key: 3, route: '/portfolio', content: 'Portfolio' },
//   ]
// };
