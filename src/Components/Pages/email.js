import React,{useContext} from "react";
import ThemeContext from "../Theme/ThemeContext";
import AppTheme from "../Theme/color";
import { Card,CardBody,CardText,CardTitle,Button,CardLink } from "reactstrap";

const Email =()=>{
    const theme =useContext(ThemeContext)[0];
    const currentTheme=AppTheme[theme];
    return (
        <div style={{
            padding:"1rem",
            backgroundColor:`${currentTheme.backgroundColor}`,
            color:`${currentTheme.textColor}`,
            textAlign:"center",
            height:'500px'
          }
  
          }>
        <Card>
            <CardTitle style={{fontSize:'25px',fontFamily:'serif',fontWeight:'bold'}}>Fire me a mail for query</CardTitle>
            <CardBody>
                <CardText style={{fontFamily:'serif',fontWeight:'bold'}}>If you do need any kind of help or suggestion fire me an email</CardText>
            </CardBody>
            <Button href="#" >SENT</Button>
        </Card>

    </div>

    )
}

export default Email;