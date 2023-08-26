import React,{useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeContext from "../Theme/ThemeContext";
import AppTheme from "../Theme/color";
import myPic from "../images/IMG_20200223_082116_411.jpg";
import { Card,CardTitle,CardSubtitle,CardText,CardBody,CardImg, } from "reactstrap";

const Home=()=>{
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
          <Card >
           <CardImg src={myPic} width="100%"/>
    
          </Card>


          <p style={{
            fontSize:'50px',
            fontFamily:'serif',
            textAlign:'center',
          }}>
            WELCOME TO MY REALM
          </p>
      
      







        </div>
    )
};


export default Home;