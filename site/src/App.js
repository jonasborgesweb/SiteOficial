import React from 'react';
import './assets/sass/main.scss';

//Import Routes
import Routes from './routes'

//Import Header & Footer
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
