
import StyleNavBar from "./StyleNavbar.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


import logo from "../../asset/logo.png";
import logo2 from "../../asset/logo-scroll.png";

export default function NavBar(){

const [scroll, setScroll] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  window.addEventListener("scroll", handleScroll);
  
  
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [scroll]);


const NavBarStyle={

backgroundColor: ( scroll > 0 ? "#fff" : "transparent"),
color:( scroll > 0 ? "#212529" : "transparent"),

}

const Logo =() =>{

return (<img alt="logo" src={scroll === 0 ? logo : logo2} />);

}

return(

<>

<header style={NavBarStyle}>

<div id={StyleNavBar.ConteinerCabecalho}>

<div id={StyleNavBar.ConteinerLogo}>

<Logo/>

</div>

<nav className={StyleNavBar.ConteinerNavegacao}>

<ul>

<li ><Link style={{color: (scroll <= 0 ? "#FFF" : "#212529")}} className={StyleNavBar.StyleButton} to ="/">home</Link></li>
<li ><Link style={{color: (scroll <= 0 ? "#FFF" : "#212529")}} className={StyleNavBar.StyleButton} to ="/">sobre Nos</Link></li>
<li ><Link style={{color: (scroll <= 0 ? "#FFF" : "#212529")}} className={StyleNavBar.StyleButton} to ="/">serviços</Link></li>
<li ><Link style={{color: (scroll <= 0 ? "#FFF" : "#212529")}} className={StyleNavBar.StyleButton} to ="/">produto</Link></li>
<li ><Link style={{color: (scroll <= 0 ? "#FFF" : "#212529")}} className={StyleNavBar.StyleButton} to ="/">reviews</Link></li>
<li ><Link style={{color: (scroll <= 0 ? "#FFF" : "#212529")}} className={StyleNavBar.StyleButton} to ="/">perguntas</Link></li>
<li ><Link style={{color: (scroll <= 0 ? "#FFF" : "#212529")}} className={StyleNavBar.StyleButton} to ="/">contato</Link></li>

</ul>

</nav>


</div>

</header>

</>

)

}