import React,{useState} from "react";
import { Button,
    Input,
    Label,
    FormContainer,
 } from "./FormElements";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faMobileAlt } from "@fortawesome/free-solid-svg-icons";


 const ContactForm =()=>{
  const[formData,setFormData]=useState({
    name:'',
    email:'',
    subject:'',
    message:'',
  });
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormData((prevData)=>({
        ...prevData,
        [name]:value,
    }));
    };

 const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
  };


  return(
    <FormContainer >
        <Label htmlFor="name">Name</Label>
        <Input
        type="text"
        id="name"
        name="name"
        placeholder="Enter Name:"
        value={formData.name}
        onChange={handleChange}
        />

        <Label htmlFor="email">Email</Label>
        <Input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter Email:"
        />

        <Label htmlFor="subject">Subject</Label>
        <Input
        type="text"
        id="subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Enter Subject"
        />

        <Label htmlFor="message">Message</Label>
        <Input
        type="text"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Enter the Message"
        style={{
            height:'80px'
        }}

        />



      <Button onClick={handleSubmit}>SEND</Button>
      

      <div>
      <p><FontAwesomeIcon icon={faHome} /> <span style={{fontWeight:'bold'}}>Contai,Purba Medinipur</span><br/>West Bengal,721427</p>
      <p><FontAwesomeIcon icon={faMobileAlt} /> <span style={{fontWeight:'bold'}}>+91 6298763565</span>  <br/> Mon to Fri 10am to 8pm</p>
      <p><FontAwesomeIcon icon={faEnvelope} /> <span style={{fontWeight:'bold'}}>supportmanab@mnb.com</span>  <br/> Send us your query anytime!</p>

      </div>


    </FormContainer>
  );


 };

 export default ContactForm;