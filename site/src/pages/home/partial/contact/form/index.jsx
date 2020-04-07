import React, { Component } from 'react'

class FormContact extends Component {

    render() {
        return (
            <form action="" className="form--contact">
                <div className="form__top">
                    <h2 className="form__title title title--green">Contato</h2>
                    <p className="form__description description description--white">
                        Envie-me uma mensagem e conte um pouco sobre seu negócio
                                    </p>
                </div>
                <div className="form__group">
                    <input type="text" className="form__input" placeholder="Nome" id="contact-name" />
                    <label htmlFor="contact-name" className="form__label">Nome</label>
                </div>
                <div className="form__group">
                    <input type="text" className="form__input" placeholder="E-mail" id="contact-email" />
                    <label htmlFor="contact-email" className="form__label">E-mail</label>
                </div>
                <div className="form__group">
                    <input type="text" className="form__input" placeholder="Assunto" id="contact-subject" />
                    <label htmlFor="contact-subject" className="form__label">Assunto</label>
                </div>
                <div className="form__group">
                    <textarea className="form__textarea"></textarea>
                </div>
            </form>
        )
    }
}

export default FormContact;