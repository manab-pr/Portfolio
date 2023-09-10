import React from "react";
import {
    Box,
    Container,
    Column,
    Row,
    FooterLink,
    Heading,
    Button
}from './FooterStyle';

const Footer =()=>{
    return(
            
        <Box>
            <h3 style={{
                 textAlign: "center", 
                 marginTop: "-50px"
            }}
            >I’m a web developer, based in West Bengal. Currently a freelancer,follow me on github @manab-pr.</h3>
            <hr/>
            <Container>
                <Row>
                    <Column>
                    <Heading>DROP A LINE</Heading>
                    <h4>Your Name:</h4>
                    <h4>Email:</h4>
                    <h4>Subject:</h4>
                    <h4>Message:</h4>
                    <Button>Send Message</Button>
                    </Column>
                    <Column>
                    <Heading>CONTACT ME</Heading>
                     <FooterLink href="#">Contai,Purba Medinipur,West Bengal</FooterLink>
                     <FooterLink href="#">8597859700</FooterLink>
                     <FooterLink href="#">manabpratim@mnb.com</FooterLink>
                    </Column>
                    <Column>
                    <Heading>SOCIAL MEDIA</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
                    </Column>
                </Row>

                <h5 style={{
                  textAlign:"center"
                }}>Copyright ©2023 All rights reserved | This portfolio is made  by Manab Pratim</h5>
            </Container>
        </Box>
        
    )
}

export default Footer;