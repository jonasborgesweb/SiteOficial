import React, { Component } from 'react'

//Import Logo
import logo from './../../assets/images/logo/simbolo.png'

//Import Icon
import iconMenu from './../../assets/images/icons/menu.png'

class Header extends Component {

    render() {
        return (
            <header className="header">
                <div className="center">
                    <div className="header__wrapper">
                        <div className="logo">
                            <img src={logo} alt="Logo JonasBorgesWeb" className="logo__image" />
                        </div>
                        <nav className="navigation">
                            <button className="navigation__button">
                                <img src={iconMenu} alt="Icone Menu" className="navigation__button--icon" />
                            </button>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;