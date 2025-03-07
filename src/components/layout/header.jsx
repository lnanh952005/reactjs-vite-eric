import './header.css';
import {  NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <ul className='header'>
        <li><NavLink className={"home"} to="/">Home</NavLink></li>
        <li><NavLink className={"user"} to="/users">Users</NavLink></li>
        <li><NavLink className={"book"} to="/books">Books</NavLink></li>
    </ul>
  )
}

export default Header;