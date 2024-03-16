// App.js
import React from 'react';
import { Container, Navbar, Nav, NavDropdown, InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BB.css'; // Import this if you have additional custom styles
import BBlogo from './BBlogo.svg';

import { useTranslation } from 'react-i18next';
import Header from './Header.js';
import Footer from './Footer.js';





function App() {

  const { t } = useTranslation();

  return (
    <div className="App ">
      <Header />
      <Container className="mainbody">
        <img src={BBlogo} alt="My Happy SVG" />
        <h1>{t('heading', { ns: 'main' })}</h1>
        <div style={{ 'width': '50%', 'font-size': '20px', 'font': 'extra-bold', 'fontWeight': 'bolder' }}>{t('subheading', { ns: 'main' })}</div>


      </Container>

      <Footer />
    </div>
  );
}

export default App;
