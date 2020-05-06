import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
      <h1>Expensify</h1>
      <NavLink activeClassName="is-active" to="/" exact={true}>Home</NavLink>
      <NavLink activeClassName="is-active" to="/create">Create</NavLink>
      <NavLink activeClassName="is-active" to="/edit">Edit</NavLink>
      <NavLink activeClassName="is-active" to="/help">Help</NavLink>
      <NavLink activeClassName="is-active" to="/about">About</NavLink>
    </div>
  );


export default Header;