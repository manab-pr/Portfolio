import React,{useContext} from "react";
import ThemeContext from "../Theme/ThemeContext";
import AppTheme from "../Theme/color";
import typing from "../images/LaptopTyping.jpg";
import { CardTitle,Button,CardText,CardBody,Progress, Card ,CardHeader,CardFooter, CardSubtitle, CardLink,Container,Row,Col} from "reactstrap";

const About=()=>{
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
            fontFamily:'serif',
            textAlign:'left'
          }}
          >About Me</p>

          <div style={{
            marginTop:'200px',
            marginBottom:'200px',
            backgroundColor:'aqua',
            display: 'flex',          
            flexDirection: 'column',  
            alignItems: 'center',   
            justifyContent: 'center',
          }}>
          
          
          <Card style={{width:'70%',height:'85%',margin:'50px'}}>
            <CardHeader>ABOUT MYSELF</CardHeader>
            <CardBody>
              <CardText>I am a web dev,mainly focusing on creating responsive web applications.</CardText>
              <Button>DOWNLOAD RESUME</Button>
            </CardBody>
            <CardFooter>
              <div className="text-center" style={{fontFamily:'serif' ,fontSize:'25px'}}>WEB DEVELOPER</div>
              <Progress value={50}/>
              <div className="text-center" style={{fontFamily:'serif' ,fontSize:'25px'}}>DSA</div>
              <Progress value={75}/>
              <div className="text-center" style={{fontFamily:'serif' ,fontSize:'25px'}}>PYTHON</div>
              <Progress value={75}/>
              <div className="text-center" style={{fontFamily:'serif' ,fontSize:'25px'}}>REACT.JS</div>
              <Progress value={100}/>
              <div className="text-center" style={{fontFamily:'serif' ,fontSize:'25px'}}>MongoDB</div>
              <Progress value={50}/>
              <div className="text-center" style={{fontFamily:'serif' ,fontSize:'25px'}}>NEXT.JS</div>
              <Progress value={75}/>
              <div className="text-center" style={{fontFamily:'serif' ,fontSize:'25px'}}>C</div>
              <Progress value={75}/>
              <div className="text-center" style={{fontFamily:'serif' ,fontSize:'25px'}}>CORE JAVA</div>
              <Progress value={75}/>
            </CardFooter>
          </Card>
          </div>

          {/* experience */}
          <div>  
          <p style={{
            fontSize:'50px',
            fontFamily:'serif',
            textAlign:'left'
          }}
          >Experience</p>

          <hr/>

          <card >
            <CardTitle>Web Developer </CardTitle>
            <CardSubtitle>June 2022- Present</CardSubtitle>
            <CardBody>
              <CardText>Since June 2022, I've been immersing myself in the world of web development, continuously evolving and honing my skills.</CardText>
              <CardLink href="#">Certificate</CardLink>
            </CardBody>
          </card>
          <hr/>
          <card >
            <CardTitle>DSA </CardTitle>
            <CardSubtitle>Solving LeetCode</CardSubtitle>
            <CardBody>
              <CardText>Diving into LeetCode problem-solving, I'm mastering vital aspects of data structures and algorithms for an enhanced coding journey.</CardText>
              <CardLink href="leetcode.com">leetCode</CardLink>
            </CardBody>
          </card>
          <hr/>
          <card >
            <CardTitle>Leadership </CardTitle>
            <CardSubtitle>Since 2001</CardSubtitle>
            <CardBody>
              <CardText>I was Captain of my School Cricket Team and Leader of many events held at Schools and College and I have been elected as the  prefect of Hostel.</CardText>
            </CardBody>
          </card>
          <hr/>
          {/* <card >
            <CardTitle>Web Developer </CardTitle>
            <CardSubtitle>June 2022- Present</CardSubtitle>
            <CardBody>
              <CardText>Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.</CardText>
              <CardLink href="#">lorep ipsum</CardLink>
            </CardBody>
          </card>
          <hr/> */}



        {/* before education */}

        <div style={{
          marginTop:'200px',
          marginBottom:'200px',
          backgroundColor:'blueviolet',
          height:'1000px'
        }}>
          <Container>
          <Row>
            <Col>
            <img src={typing} style={{
              width:'400px',
              height:'400px',
              marginTop:'100px'
            }}/>
            </Col>

            <Col>
            <p style={{
            fontSize:'50px',
            fontFamily:'serif',
            textAlign:'left',
            marginTop:'100px'}}>I am just trying to be the best on my field and keep improving day by day.</p>
            </Col>



          </Row>

          </Container>


        </div>

          </div>

          {/* education */}
          <div>  
          <p style={{
            fontSize:'50px',
            fontFamily:'serif',
            textAlign:'left'
          }}
          >Education</p>

          <hr/>

          <card >
            <CardTitle> Secondary Education</CardTitle>
            <CardSubtitle>Kulanjara Deshbandhu Vidyabhaban (2016)</CardSubtitle>
            <CardBody>
              <CardText> completed my Secondary Education back in 2016  </CardText>
              <CardLink href="#">Certificate</CardLink>
            </CardBody>
          </card>
          <hr/>
          <card >
            <CardTitle>Higher Secondary </CardTitle>
            <CardSubtitle>Nachinda J.K. High School (july 2016- mar 2018)</CardSubtitle>
            <CardBody>
              <CardText>Completed my Hs in Physics,Chemistry,Mathematics,Biology </CardText>
              <CardLink href="#">Certificate</CardLink>
            </CardBody>
          </card>
          <hr/>
          <card >
            <CardTitle> Under Graduate</CardTitle>
            <CardSubtitle>Panskura Banamali College(Autonomous) (2019-2022)</CardSubtitle>
            <CardBody>
              <CardText>Graduated in Physics </CardText>
              <CardLink href="#">Certificate</CardLink>
            </CardBody>
          </card>
          <hr/>
          <card >
            <CardTitle>Post Graduate</CardTitle>
            <CardSubtitle>University of North Bengal (Nov 2022-Jul 2024)</CardSubtitle>
            <CardBody>
              <CardText>Post Graduated in Computer Application </CardText>
              <CardLink href="#">Certificate</CardLink>
            </CardBody>
          </card>
          <hr/>

          </div>


         



        </div>
    )
};


export default About;