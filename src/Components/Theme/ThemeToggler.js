import React,{ useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemeToggler =()=>{
 const[themeMode,setThemeMode]=useContext(ThemeContext);
 return(
    <div onClick={()=>{setThemeMode(themeMode==="light"?"dark":"light")}}
    >
    <button
     style={{
        backgroundColor:"26ae60",
        padding:"10px 150px",
        fontSize:"20px",
    }}>
     {themeMode==="light" ? "dark mode":"light mode" }
    </button>
    </div>
 )


};


export default ThemeToggler;