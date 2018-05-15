import React, {Component} from 'react';
import '../assets/css/Header.css';
import logo from '../assets/images/logo.png';

class Header extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <img src={logo} alt="logo" className="logo-PE"/>
            </div>
        );
    }
}

export default Header;

