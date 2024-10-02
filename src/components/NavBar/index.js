
import StyleNavBar from "./StyleNavbar.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useMyContext } from "../../Mycontext/Context";

import logo from "../../asset/logo.png";
import logo2 from "../../asset/logo-scroll.png";



export default function NavBar(){

const { ButtonMenu, setButtonMenu } = useMyContext();
const [Nav,setNav] = useState(false);
const [scroll, setScroll] = useState(0);
const [Width, setWidth] = useState(window.innerWidth);

const handleButtonClick = () => {
setButtonMenu(!ButtonMenu);
};

useEffect(() => {

const handleScroll = () => {
setScroll(window.scrollY);
};

const handleWidth = () => {
setWidth(window.innerWidth);
};

window.addEventListener("scroll", handleScroll);
window.addEventListener('resize', handleWidth);
  
console.log("largura:", window)
  
return () => {
window.removeEventListener("scroll", handleScroll);
window.removeEventListener('resize', handleWidth);
};
}, [scroll, Nav, Width,ButtonMenu]);


const NavBarStyle={

backgroundColor: ( scroll > 0 ? "#fff" : "transparent"),
color:( scroll > 0 ? "#212529" : "transparent"),

}

const Logo =() =>{

return (<img alt="logo" src={scroll === 0 ? logo : logo2} />);

}

const Navegacao =()=>{

if(Width >= 880){

return <header style={NavBarStyle}>

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

}else{

return <header id={StyleNavBar.conteinerNavBar} style={NavBarStyle} > 

<div className={StyleNavBar.ConteinerNavMobile}>

<div className={StyleNavBar.ConteinerLogo}>

<div className={StyleNavBar.BoxLogo}>

<Logo/>

</div>

</div>

<nav>

<div className={StyleNavBar.BoxButton}>

<button className={StyleNavBar.BtnMobile} style={{color:(Nav ? "#000": "#fff")}} onClick={handleButtonClick}>

{ButtonMenu ? <i class="bi bi-x-lg" style={{color: (scroll <= 0 ? "#FFF" : "#212529")}}></i> : <i class="bi bi-list" style={{color: (scroll <= 0 ? "#FFF" : "#212529")}}></i>}

</button>

</div>

</nav>

</div>
    
</header>

}


}

return(

<>

<Navegacao/>

</>

)

}

export function MenuMobile(){


  const { ButtonMenu, setButtonMenu } = useMyContext();
  const [WidthMenu, setWidthMenu] = useState(window.innerWidth);
  
  function TransicaoNav(){
  
  (setButtonMenu(false));
   window.scrollTo(0, 0);
  
  }
  
  useEffect(()=>{
    
  const handleWidthMenu = () => {
  setWidthMenu(window.innerWidth);
  };
  
  window.addEventListener('resize', handleWidthMenu);
  
  return () => {
    window.removeEventListener('resize', handleWidthMenu);
  };
  
  },[ WidthMenu,ButtonMenu])
  
  const Menu = ()=>{
  
  if(ButtonMenu && WidthMenu < 880){
  
  return <div id={StyleNavBar.MenuMobile}>
  
  <div id={StyleNavBar.conteinerMenuMobile}>
  
  <div className={StyleNavBar.BoxLogo}>
  <img src={logo2} alt="Fast food Demo"/>
  </div>
  
  <nav className={StyleNavBar.ConteinerButton}>
  <a className={StyleNavBar.ButtonNavBar} href='#Home'>HOME</a>
  <Link className={StyleNavBar.ButtonNavBar} to='#Sobre'>SOBRE Nos</Link>
  <Link className={StyleNavBar.ButtonNavBar} to='#Servicos'>Serviços</Link>
  <Link className={StyleNavBar.ButtonNavBar} to='#Produto'>Produtos</Link>
  <Link className={StyleNavBar.ButtonNavBar} to='#Reviews'>Reviews</Link>
  <Link className={StyleNavBar.ButtonNavBar} to='#Perguntas'>Perguntas</Link>
  <Link className={StyleNavBar.ButtonNavBar} to='#Contato'>Contato</Link>
  </nav>
  
  
  </div>
  
  </div>
  
  
  }else{
  
  return ""
  
  }
  
  }
  
  return(
  
  <>
  
  <head>
  
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"/>
  
  </head>
  
  <Menu/>
  
  </>
  
  )
  
}