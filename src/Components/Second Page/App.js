import './App.css';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from './thank-you.svg'

const Secondpage = () => {
    const navigate = useNavigate();

    return  (
      <Container className='containerApp'>
          <div className='App'>
          <img className="Image" src={Logo} alt="React Logo" /><br/>
            <span className='selected'> You selected 4 out of 5</span>
            <h1 className="header">Thank you!</h1>
              <p> We appreciate you taking the time to give a rating.<br/>
                  If you ever need more support, don't hesitate to<br/>
                  get in touch!
              </p>
          </div>
        </Container>
    
      )
    }

    export default Secondpage;