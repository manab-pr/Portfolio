import React,{useContext} from "react";
import { ReactDOM } from "react-dom/client";
import { NavBtn,
    Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtnLink,
 } from "./NavBarElement"; 
 import Logo from "../Pages/logo";
 import ThemeContext from "../Theme/ThemeContext";
import AppTheme from "../Theme/color";
import ThemeToggler from "../Theme/ThemeToggler";

const NavBar=()=>{
  const theme =useContext(ThemeContext)[0];
  const currentTheme=AppTheme[theme];
  const[themeMode,setThemeMode]=useContext(ThemeContext);
    return(
        <Nav>
            <Bars/>
            <NavMenu>

                <NavLink to='/home' activestyle="true">
                 Home
                </NavLink>
                <NavLink to='/about' activestyle="true">
                 About
                </NavLink>
                <NavLink to='/portfolio' activestyle="true">
                 Portfolio
                </NavLink>
                <NavLink to='/blog' activestyle="true" >
                  Blog
                </NavLink>
                <NavLink to='/Contact' activestyle="true">
                  Contact
                </NavLink>
                <NavLink to='/email' activestyle="true">
                  Fire me an email
                </NavLink>
            </NavMenu>
            
            <NavBtn onClick={()=>{setThemeMode(themeMode==="light"?"dark":"light")}}>
          <NavBtnLink >{themeMode==="light" ? "dark mode":"light mode" }</NavBtnLink>
        </NavBtn>

        </Nav>
    )
}


export default NavBar;