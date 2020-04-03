import React, { Component } from 'react'

import logoFooter from './../../assets/images/logo/Logo-branco.png'

class Footer extends Component {

    render() {

        return (
            <footer className="footer">
                <div className="center">
                    <div className="footer__wrapper">
                        <div className="logo-footer">
                            <img src={logoFooter} alt="Logo Footer" className="logo-footer__image" />
                        </div>
                        <p className="footer__text">
                            2020 - Todos direitos reservados
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;