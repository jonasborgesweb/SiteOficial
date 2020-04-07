import React, { Component } from 'react'

class Banner extends Component {

    render() {
        return (
            <section className="banner">
                <div className="center">
                    <div className="banner__content">
                        <h2 className="banner__subtitle subtitle title--green">
                            Jonas Borges
                        </h2>
                        <h1 className="banner__title title title--white">
                            Desenvolvedor
                            <span>
                                Front End
                            </span>
                        </h1>
                        <ul className="banner__list">
                            <li className="banner__item">
                                <span className="banner__bool"></span>
                                <span className="banner__text">HTML</span>
                            </li>
                            <li className="banner__item">
                                <span className="banner__bool"></span>
                                <span className="banner__text">CSS</span>
                            </li>
                            <li className="banner__item">
                                <span className="banner__bool"></span>
                                <span className="banner__text">ReactJS</span>
                            </li>
                            <li className="banner__item">
                                <span className="banner__bool"></span>
                                <span className="banner__text">React Native</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="banner__icon">
                    <svg className="banner__icon--svg" id="Capa_1" enable-background="new 0 0 551.13 551.13" height="512" viewBox="0 0 551.13 551.13" width="512" xmlns="http://www.w3.org/2000/svg">
                        <path className="banner__icon--path" d="m275.565 361.679-223.897-223.896h-51.668l275.565 275.565 275.565-275.565h-51.668z" />
                    </svg>
                </div>
            </section>
        )
    }
}

export default Banner;