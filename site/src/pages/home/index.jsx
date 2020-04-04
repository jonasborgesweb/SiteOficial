import React, { Component } from 'react'

//Import Partial Home
import Banner from './partial/banner'
import About from './partial/about'

class Home extends Component {

    render() {
        return (
            <>
                <Banner />
                <About />
            </>
        )
    }
}

export default Home;