import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//Import image
// import imgAbout from './../../../../assets/images/img-about.jpg'

class About extends Component {

    render() {
        return (
            <section className="about">
                <div className="center">
                    <div className="about__wrapper">
                        <div className="about__left">
                            <div className="about__img"></div>
                        </div>
                        <div className="about__right">
                            <div className="about__content">
                                <h2 className="about__title title title--pink">
                                    Antes de tudo,
                                    <span className="about__title--span">
                                        gostaria de me apresentar.
                                    </span>
                                </h2>
                                <p className="about__description description description--blue">
                                    Eu sou um apaixonado por tecnologia e carros do interior do estado do Rio de Janeiro, Brasil.
                                    Gosto de transformar problemas complexos em projetos simples, bonitos e intuitivos.
                                    Quando não estou codificando ou desenhando telas, você me encontrará consumindo
                                    tecnologia e conteúdos automotivos, além disso sou colecionador de hotwheels.
                                </p>
                            </div>
                            <div className="about__bottom">
                                <Link to='/about' className="about__buttom button button--green">
                                    Saiba mais
                                </Link>
                                <Link to='/' className="about__buttom button button--blue">
                                    Contrate-me
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;