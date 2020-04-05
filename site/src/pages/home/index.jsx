import React, { Component } from 'react'

//Import Partial Home
import Banner from './partial/banner'
import About from './partial/about'
import Service from './partial/service'
import Portfolio from './partial/portfolio'
import Testimonial from './partial/testimonial'
import Blog from './partial/blog'
import Contact from './partial/contact'

class Home extends Component {

    render() {
        return (
            <>
                <Banner />
                <About />
                <Service />
                <Portfolio />
                <Testimonial />
                <Blog />
                <Contact />
            </>
        )
    }
}

export default Home;