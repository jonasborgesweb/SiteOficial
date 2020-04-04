import React, { Component } from 'react'

//Import Partial Home
import Banner from './partial/banner'
import About from './partial/about'
import Testimonial from './partial/testimonial'

class Home extends Component {

    render() {
        return (
            <>
                <Banner />
                <About />
                <Testimonial />
            </>
        )
    }
}

export default Home;