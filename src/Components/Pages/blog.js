import React,{useContext} from "react";
import ThemeContext from "../Theme/ThemeContext";
import AppTheme from "../Theme/color";
import { Card,CardBody,CardImg,CardText,CardTitle,CardSubtitle,Button,
  Pagination,PaginationItem,PaginationLink,
  Container,Row,Col,ListGroup,ListGroupItem,
   Form, FormGroup, Label, Input

} from "reactstrap";
import {Heading,FooterLink} from "./FooterStyle"



import img2 from "../images/pexels-rikka-ameboshi-3358707.jpg";
import img3 from "../images/pexels-burak-the-weekender-735869.jpg";
import img4 from "../images/pexels-patrick-case-3718433.jpg";



const Blog=()=>{
  const theme =useContext(ThemeContext)[0];
  const currentTheme=AppTheme[theme];


  
    return(
        <div style={{
          padding:"1rem",
          backgroundColor:`${currentTheme.backgroundColor}`,
          color:`${currentTheme.textColor}`,
          textAlign:"center",
        }
        }>
          <p style={{
            fontSize:'50px',
            textAlign:'left'
          }}>Blog</p>









         <Container>
          <Row>
            <Col xs="6">

          {/* card1 */}
          <Card>
            <CardImg top width="100%"  src={img2}/>
            <CardBody>
              <CardTitle>Read Books</CardTitle>
              <CardText>Engaging with books stimulates the brain, enhancing cognitive function, critical thinking, and creativity, contributing to overall mental well-being.</CardText>
              <Button>Like</Button>
            </CardBody>
          </Card>
         {/* card2 */}
         <Card>
            <CardImg top width="100%"  src={img3}/>
            <CardBody>
              <CardTitle>Dine Out</CardTitle>
              <CardText>Indulging in meals outdoors occasionally can rejuvenate the mind, offering a change of environment that revitalizes the senses.</CardText>
              <Button>Like</Button>
            </CardBody>
          </Card>
    
           {/* card3 */}

           <Card>
            <CardImg top width="100%"  src={img4}/>
            <CardBody>
              <CardTitle>Cricket</CardTitle>
              <CardText>In India, cricket isn't just a sport; it's a fervent emotion that binds millions, igniting joy and camaraderie across the nation.</CardText>
              <Button>Like</Button>
            </CardBody>
          </Card>


          <Pagination size="lg" style={{justifyContent:'center'}}>
            <PaginationItem>
              <PaginationLink previous href="#"/>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink  href="#">1 </PaginationLink> 
            </PaginationItem>
            <PaginationItem>
              <PaginationLink  href="#">2 </PaginationLink> 
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next href="#"/>
            </PaginationItem>
          </Pagination>
          </Col>
          <Col xs="6">
            <Heading>Category</Heading>

            <ListGroup >
              <ListGroupItem tag="a" href="#" color="success">Cricket</ListGroupItem>
              <ListGroupItem tag="a" href="#">Books</ListGroupItem>
              <ListGroupItem tag="a" href="#">Netflix</ListGroupItem>
              <ListGroupItem tag="a" href="#">Technology</ListGroupItem>
              <ListGroupItem tag="a" href="#">Physics</ListGroupItem>
            </ListGroup>

            <div style={{
              margin:'40px',
              width:'90%'
            }}>
            <Form>
              <FormGroup>
                <Label for="emailNews">Newsletter</Label>
                <Input type="email" name="email" id="emailNews" placeholder="Enter your Email"/>
              </FormGroup>
              <Button>SUBSCRIBE</Button>
            </Form>
            </div>

          
           





          </Col>

          </Row>
          </Container>

      




        </div>
    )
};


export default Blog;