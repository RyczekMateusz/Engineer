import React from 'react';
import { NavLink } from 'react-router-dom'

const layoutsList = [
  { name: 'start', path: '/', exact: true },
  { name: 'search', path: '/search' },
  { name: 'add', path: '/add' },
]

const Navigation = () => {
  const menu = layoutsList.map(item => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name.toUpperCase()}
      </NavLink>
    </li>
  ))
  return (
    <nav className="main">
      <ul>
        {menu}
      </ul>
    </nav>
  );
}

export default Navigation;