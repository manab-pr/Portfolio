import React,{useContext} from "react";
import ThemeContext from "../Theme/ThemeContext";
import AppTheme from "../Theme/color";
import { Card, Button, CardTitle, CardText, Row, Col,CardImg } from 'reactstrap';
import linkedin from "../images/linkedin.png";
import github from "../images/Github.png";

const Portfolio=()=>{
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
          fontFamily:'sans-serif'
        }}
        >Portfolio</p>

        <div style={{
          margin:'100px',
          fontFamily:'sans-serif'
        }}>
          <p style={{
            fontSize:'30px',
            fontFamily:'serif',
            fontWeight:'bold'
          }}>I HAVE CREATED</p>

<Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardImg src={linkedin}/>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button href="https://www.linkedin.com/in/manab-pratim-maity-402172208/">LINKEDIN</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardImg src={github}/>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button href="https://github.com/manab-pr">GITHUB</Button>
        </Card>
      </Col>
    </Row>





        </div>








      
        </div>
    )
};


export default Portfolio;