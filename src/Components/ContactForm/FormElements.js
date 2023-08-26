import styled from "styled-components";


export const FormContainer=styled.div`
display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`;

export const Label =styled.label`
font-weight:bold;
margin-bottom:8px;
`;

export const  Input =styled.input`
padding: 8px;
margin-bottom:16px;
`;

export const Button=styled.button`
padding:8px 16px;
background-color:blue;
&:hover{
    background-color:#4ce322;
}
color:white;
border:none;
cursor:pointer;
`; 

