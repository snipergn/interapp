import './App.css';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from './icon-star.svg'

 function Firstpage() {  
    const navigate = useNavigate();
    let button = document.getElementsByClassName('Option1');
    let primarybutton = document.getElementsByClassName('primarybutton');


  return (

    <Container className='container'>
        <div className='App'>
          <img className="Icon" src={Icon} alt="React Logo" /><br/>
          <h1>How did we do?</h1>
            <p> Please let us now how we did with your support<br/>
                request. All feedback is appreciated to help us<br/>
                improve our offering!
            </p>
              <Button className='Option1 block'>1</Button>
              <Button className='Option2 block'>2</Button>
              <Button className='Option3 block'>3</Button>
              <Button className='Option4 block'>4</Button>
              <Button className='Option5 block'>5</Button>
               
               {/*Primary Button*/}
              <Button  onClick={() => {if ( primarybutton === true) {
                return navigate("/page2")
              }} } className='primarybutton'>Submit </Button>
              
        </div>
      </Container>
  
    )
  }
    
    export default Firstpage;
        
  
  

