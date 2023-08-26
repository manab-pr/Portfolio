import React,{useContext} from "react";
import ThemeContext from "../Theme/ThemeContext";
import AppTheme from "../Theme/color";
import ContactForm from "../ContactForm/contactForm";
import explore from "../images/pexels-amar-preciado-14111067.jpg";
import styled from "styled-components";

const RoundedRectangleImage = styled.img`
  width: 700px;
  height: 400px;
  border-radius: 10px 30px 10px 30px; /* Top-left, top-right, bottom-right, bottom-left */
`;



const Contact=()=>{
  const theme =useContext(ThemeContext)[0];
  const currentTheme=AppTheme[theme];
    return(
        <div style={{
          padding:"1rem",
          backgroundColor:`${currentTheme.backgroundColor}`,
          color:`${currentTheme.textColor}`,
          textAlign:"center"
        }
        }>
          <p style={{
          fontSize:'50px',
          textAlign:'left',
          }}
          >Contact</p>
          <div>
            <p style={{
              fontSize:'20px',
              fontWeight:'bold'

            }}
            >I AM AN EXPLORER!</p>
          <RoundedRectangleImage src={explore}/>
            
          </div>




          <p style={{
            fontSize:'40px',
          }}
          >Get in touch</p>

    
          
          <ContactForm/>
          
        </div>
    )
};


export default Contact;