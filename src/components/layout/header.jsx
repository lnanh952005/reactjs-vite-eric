import './header.css';
import {  NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <ul className='header'>
        <li><NavLink className={"home"} to="/">Home</NavLink></li>
        <li><NavLink className="users" to="/users">Users</NavLink></li>
        <li><NavLink className="products" to="/products">Products</NavLink></li>
    </ul>
  )
}

export default Header;