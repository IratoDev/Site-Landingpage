
import StyleNavBar from "./StyleNavbar.module.css";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { useMyContext } from "../../Mycontext/Context";

import logo from "../../asset/logo.png";
import logo2 from "../../asset/logo-scroll.png";



export default function NavBar(){


const [Nav] = useState(false);
const [scroll, setScroll] = useState(0);
const [Width, setWidth] = useState(window.innerWidth);
const { ButtonMenu, setButtonMenu, Focus, setFocus, CurrentItem, setCurrentItem } = useMyContext();

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
  
return () => {
window.removeEventListener("scroll", handleScroll);
window.removeEventListener('resize', handleWidth);
};
}, [scroll, Nav, Width,ButtonMenu]);

const handleClick = (btn) => {
setFocus(btn); 
};

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

<li ><Link style={{color: (scroll <= 0 ? "#FFF" : "#212529")}} className={`${StyleNavBar.StyleButton} ${Focus === 'btn1' ? StyleNavBar.focused : ''}`} to ="Home"  spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    onClick={() => { handleClick('btn1'); setCurrentItem(0)}}
    >home</Link></li>
<li ><Link style={{color: (scroll <= 0 ? "#FFF" : "#212529")}} className={`${StyleNavBar.StyleButton} ${Focus === 'btn2' ? StyleNavBar.focused : ''}`} to ="Sobre"  spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    onClick={() => { handleClick('btn2'); setCurrentItem(1)}}
    >sobre Nos</Link></li>
<li ><Link style={{color: (scroll <= 0 ? "#FFF" : "#212529")}} className={`${StyleNavBar.StyleButton} ${Focus === 'btn3' ? StyleNavBar.focused : ''}`} to ="Servicos"  spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    onClick={() => { handleClick('btn3'); setCurrentItem(2)}}
    >serviços</Link></li>
<li ><Link style={{color: (scroll <= 0 ? "#FFF" : "#212529")}} className={`${StyleNavBar.StyleButton} ${Focus === 'btn4' ? StyleNavBar.focused : ''}`} to ="Produto"  spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    onClick={() => { handleClick('btn4'); setCurrentItem(3)}}
    >produto</Link></li>
<li ><Link style={{color: (scroll <= 0 ? "#FFF" : "#212529")}} className={`${StyleNavBar.StyleButton} ${Focus === 'btn5' ? StyleNavBar.focused : ''}`} to ="Reviews"  spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    onClick={() => { handleClick('btn5'); setCurrentItem(4)}}
    >reviews</Link></li>
<li ><Link style={{color: (scroll <= 0 ? "#FFF" : "#212529")}} className={`${StyleNavBar.StyleButton} ${Focus === 'btn6' ? StyleNavBar.focused : ''}`} to ="Perguntas"  spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    onClick={() => { handleClick('btn6'); setCurrentItem(5)}}
    >perguntas</Link></li>
<li ><Link style={{color: (scroll <= 0 ? "#FFF" : "#212529")}} className={`${StyleNavBar.StyleButton} ${Focus === 'btn7' ? StyleNavBar.focused : ''}`} to ="Contato"  spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    onClick={() => { handleClick('btn7'); setCurrentItem(6)}}
    >contato</Link></li>

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


  const { ButtonMenu, setButtonMenu, Focus, setFocus, CurrentItem, setCurrentItem } = useMyContext();
  const [WidthMenu, setWidthMenu] = useState(window.innerWidth);
 
  
  
  useEffect(()=>{
    
  const handleWidthMenu = () => {
  setWidthMenu(window.innerWidth);
  };
  
  window.addEventListener('resize', handleWidthMenu);
  
  return () => {
    window.removeEventListener('resize', handleWidthMenu);
  };
  
  },[ WidthMenu,ButtonMenu]);

  const handleClick = (btn) => {
  setFocus(btn); 
  };
  
  const Menu = ()=>{
  
  if(ButtonMenu && WidthMenu < 880){
  
  return <div id={StyleNavBar.MenuMobile}>
  
  <div id={StyleNavBar.conteinerMenuMobile}>
  
  <div className={StyleNavBar.BoxLogo}>
  <img src={logo2} alt="Fast food Demo"/>
  </div>
  
  <nav className={StyleNavBar.ConteinerButton}>
  <Link className={`${StyleNavBar.ButtonNavBar} ${Focus === 'btn1' ? StyleNavBar.focused : ''}`} to="Home"  spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    onClick={() => { handleClick('btn1'); setCurrentItem(0)}}

    >HOME</Link>
  <Link className={`${StyleNavBar.ButtonNavBar} ${Focus === 'btn2' ? StyleNavBar.focused : ''}`} to="Sobre"  spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    onClick={() => { handleClick('btn2'); setCurrentItem(1)}}
    >SOBRE Nos</Link>
  <Link className={`${StyleNavBar.ButtonNavBar} ${Focus === 'btn3' ? StyleNavBar.focused : ''}`} to='Servicos'  spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    onClick={() => { handleClick('btn3'); setCurrentItem(2)}}
    >Serviços</Link>
  <Link className={`${StyleNavBar.ButtonNavBar} ${Focus === 'btn4' ? StyleNavBar.focused : ''}`} to='Produto'  spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    onClick={() => { handleClick('btn4'); setCurrentItem(3)}}
    >Produtos</Link>
  <Link className={`${StyleNavBar.ButtonNavBar} ${Focus === 'btn5' ? StyleNavBar.focused : ''}`} to='Reviews'  spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    onClick={() => { handleClick('btn5'); setCurrentItem(4)}}
    >Reviews</Link>
  <Link className={`${StyleNavBar.ButtonNavBar} ${Focus === 'btn6' ? StyleNavBar.focused : ''}`} to='Perguntas'  spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    onClick={() => { handleClick('btn6'); setCurrentItem(5)}}
    >Perguntas</Link>
  <Link className={`${StyleNavBar.ButtonNavBar} ${Focus === 'btn7' ? StyleNavBar.focused : ''}`} to='Contato'  spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    onClick={() => { handleClick('btn7'); setCurrentItem(6)}}
    >Contato</Link>
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