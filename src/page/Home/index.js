import { useState, useEffect, useRef } from "react";


import StyleHome from "./StyleHome.module.css";
import NavBar from "../../components/NavBar";
import ElementService from "../../components/ElementosPage";
import { ElementProduto } from "../../components/ElementosPage";
import { ElementSanfona } from "../../components/ElementosPage";
import { MenuMobile } from "../../components/NavBar";
import { Element } from "react-scroll";
import { ObservedElement } from "../../Mycontext/Context";

//imagens:
//Relogios
import Relogio1 from '../../asset/watch-1.png';
//import Relogio2 from '../../asset/watch-2.png';
import Relogio3 from '../../asset/watch-3.png';
import Relogio4 from '../../asset/watch-4.png';
import Relogio5 from '../../asset/watch-5.png';
import Relogio6 from '../../asset/watch-6.png';
import Relogio7 from '../../asset/watch-7.png';

//Banner
import Banner from "../../asset/about-img.jpg"

//clientesReviews
import Client1 from "../../asset/client-1.jpg";
import Client2 from "../../asset/client-2.jpg";
import Client3 from "../../asset/client-3.jpg";

export default function HomePage() {

//CarroselReview

// eslint-disable-next-line
const [Focus, setFocus]=useState("Slide1");

const[CurrentItem, setCurrentItem] = useState(0);

const ConteinerSlide = useRef();

const btn1 = useRef();
const btn2 = useRef();
const btn3 = useRef();

useEffect(()=>{

if(CurrentItem > 2){

setCurrentItem(0)

}if(CurrentItem<0){
   
setCurrentItem(2)

}

if (ConteinerSlide.current) {
    // Acessa e manipula diretamente o elemento DOM
    ConteinerSlide.current.style.transform = `translate3d(${-CurrentItem * 100}%, 0, 0)`; 
}

console.log(CurrentItem)
},[CurrentItem])

const handleClick = (slide) => {
setFocus(slide); 
};


return (
  
<>

<head>
 
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet"/>
</head>

<NavBar/>
<MenuMobile/>

<main>

<Element name="Home">
<section id={StyleHome.Home} className="Home">

<ObservedElement id="element1">
<div id={StyleHome.ConteinerHome}>

<div id={StyleHome.BoxHome}>

<div className={StyleHome.ConteinerText}>

<div className={StyleHome.BoxText}>

<h1>Best Landing Page For Online Product Marketing</h1>

<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non.</p>

<button> <i class="bi bi-cart4"></i> Order Now </button>

</div>

</div>

<div className={StyleHome.ConteinerImage}>

<div className={StyleHome.BoxImagem}>
<img src={Relogio1} alt="Relogio1"/>
</div>

</div>

</div>

</div>
</ObservedElement>

</section>
</Element>

<Element name="Sobre">
<section id={StyleHome.Sobre} >

<div name="Sobre" id={StyleHome.ConteinerSobre}>

    <div className={StyleHome.ConteinerTextSobre}>

        <div className={StyleHome.BoxTextSobre}>

        <h3>About The Watch</h3>

        <h1>Best and Fashionable Smart Watch For Easy Life.</h1>

        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat.</p>

        <ul>

            <li> <i style={{color:"#2273f8"}} class="bi bi-check-circle"></i> Attractive Interface with Many Options</li>
            <li> <i style={{color:"#2273f8"}} class="bi bi-check-circle"></i> Live Chat and Instant Notification</li>
            <li> <i style={{color:"#2273f8"}} class="bi bi-check-circle"></i> Live Chat and Instant Notification</li>

        </ul>

        </div>

    </div>

    <div className={StyleHome.ConteinerImgSobre}>

        <div className={StyleHome.BoxImgSobre}>

            <img src={Banner} alt="Imagem Sobre"/>

        </div>

    </div>

</div>

</section>
</Element>

<Element name="Servicos">
<section id={StyleHome.Servicos}>

<div id={StyleHome.ConteinerServicos}>

    <div className={StyleHome.ConteinerCabecalho}>

            <div className={StyleHome.BoxTextCabecalho}>

                <h1>Many Features are Available in The Watch</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, rerum aut! Tempore maiores ipsum sequi porro ratione officia.</p>

            </div>

    </div>

<div className={StyleHome.ConteinerService}>

    <div className={StyleHome.BoxService}>

        <ElementService icone={<i  class="bi bi-layers-fill"></i>} Title="Attractive Interface" text="Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat."/>

        <ElementService icone={<i class="bi bi-bell-fill"></i>} Title="Notification Alert
        " text="Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat"/>

        <ElementService icone={<i class="bi bi-diagram-3-fill"></i>} Title="GPS Tracking" text="Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat."/>

        <ElementService icone={<i class="bi bi-chat-right-fill"></i>} Title="User Live Chat" text="Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat."/>

        <ElementService icone={<i class="bi bi-android2"></i>} Title="iOS and Android Apps
        " text="Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat"/>

        <ElementService icone={<i class="bi bi-hypnotize"></i>} Title="Latest Technology" text="Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat."/>




    </div>

</div>

</div>

</section>
</Element>

<Element name="Produto">
<section id={StyleHome.Produto}>

<div id={StyleHome.ConteinerProduto}>

<div className={StyleHome.ConteinerCabecalhoProduto}>

    <div className={StyleHome.BoxTextProduto}>

        <h1>Our Awesome Products. Choose Best One</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, rerum aut! Tempore maiores ipsum sequi porro ratione officia.</p>

    </div>

</div>

<div className={StyleHome.ConteinerProdutos}>

    <div className={StyleHome.BoxProduto}>

        <ElementProduto Title="Casual" imagem={Relogio4} preco="$199"/>

        <ElementProduto Title="Smart" imagem={Relogio6} preco="$279"/>

        <ElementProduto Title="Glorious" imagem={Relogio7} preco="$399"/>
        
        <ElementProduto Title="Extra" imagem={Relogio5} preco="$220"/>

    </div>

</div>

</div>

</section>
</Element>

<Element name="Reviews">
<section id={StyleHome.Reviews}>

<div id={StyleHome.ConteinerReviews}>

   <div className={StyleHome.ConteinerCabecalo}>

        <div className={StyleHome.BoxText}>

            <h1>Customer Reviews</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, rerum aut! Tempore maiores ipsum sequi porro ratione officia.</p>

        </div>

   </div>

   <div className={StyleHome.ConteinerReview}>

        <div id={StyleHome.ConteinerCarrosel} ref={ConteinerSlide}>

            <div className={StyleHome.SlideReview}>

                <div className={StyleHome.BoxSlides}>

                    <div className={StyleHome.conteinerPerfil}>

                        <span><img src={Client1} alt="fotoPerfil" /></span>

                        <h3>Adam Smith</h3>

                        <h5>marketer</h5>

                    </div>

                    <div className={StyleHome.ConteinerText}>

                    <div className={StyleHome.BoxText}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quas maxime vel alias minima possimus corrupti est voluptatum, iusto excepturi, veniam similique et. Officia fugit voluptatibus.
                    </p>
                    </div>

                    </div>

                    <div className={StyleHome.ConteinerStar}>
                    <span><i class="bi bi-star-fill"></i></span> 
                    <span><i class="bi bi-star-fill"></i></span>
                    <span><i class="bi bi-star-fill"></i></span>
                    <span><i class="bi bi-star-fill"></i></span>
                    </div>

                </div>

            </div>

            <div className={StyleHome.SlideReview}>

                <div className={StyleHome.BoxSlides}>

                    <div className={StyleHome.conteinerPerfil}>

                        <span><img src={Client2} alt="fotoPerfil" /></span>

                        <h3>Adam Smith</h3>

                        <h5>marketer</h5>

                    </div>

                    <div className={StyleHome.ConteinerText}>

                    <div className={StyleHome.BoxText}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quas maxime vel alias minima possimus corrupti est voluptatum, iusto excepturi, veniam similique et. Officia fugit voluptatibus.
                    </p>
                    </div>

                    </div>

                    <div className={StyleHome.ConteinerStar}>
                    <span><i class="bi bi-star-fill"></i></span> 
                    <span><i class="bi bi-star-fill"></i></span>
                    <span><i class="bi bi-star-fill"></i></span>
                    <span><i class="bi bi-star-fill"></i></span>
                    </div>

                </div>

            </div>

            <div className={StyleHome.SlideReview}>

                <div className={StyleHome.BoxSlides}>

                    <div className={StyleHome.conteinerPerfil}>

                        <span><img src={Client3} alt="fotoPerfil" /></span>

                        <h3>Shane Kyle</h3>

                        <h5>marketer</h5>

                    </div>

                    <div className={StyleHome.ConteinerText}>

                    <div className={StyleHome.BoxText}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quas maxime vel alias minima possimus corrupti est voluptatum, iusto excepturi, veniam similique et. Officia fugit voluptatibus.
                    </p>
                    </div>

                    </div>

                    <div className={StyleHome.ConteinerStar}>
                    <span><i class="bi bi-star-fill"></i></span> 
                    <span><i class="bi bi-star-fill"></i></span>
                    <span><i class="bi bi-star-fill"></i></span>
                    <span><i class="bi bi-star-fill"></i></span>
                    </div>

                </div>

            </div>

        </div>

        <div id={StyleHome.ConteinerControler}>

                <button className={Focus === 'Slide1' ? StyleHome.focused : ''} onClick={() => { handleClick('Slide1'); setCurrentItem(0)}} ref={btn1}><span></span></button>
                <button className={Focus === 'Slide2' ? StyleHome.focused : ''} onClick={() => { handleClick('Slide2'); setCurrentItem(1)}} ref={btn2}><span></span></button>
                <button className={Focus === 'Slide3' ? StyleHome.focused : ''} onClick={() => { handleClick('Slide3'); setCurrentItem(2)}} ref={btn3}><span></span></button>

        </div>

   </div>

</div>

</section>
</Element>

<Element name="Perguntas">
<section id={StyleHome.Perguntas}>

<div id={StyleHome.ConteinerPerguntas}>

    <div id={StyleHome.ConteinerTitlePerguntas}>

        <div className={StyleHome.BoxText}>

        <h1>Frequently Asked Questions</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, rerum aut! Tempore maiores ipsum sequi porro ratione officia.</p>

        </div>

    </div>

    <div className={StyleHome.ConteienerBoxPerguntas}>

        <div id={StyleHome.BoxPerguntas}>

            <ElementSanfona/>

        </div>

        <div id={StyleHome.conteinerImg}>

            <div className={StyleHome.BoxImagem}>

                <img src={Relogio3} alt="Relogio 2"/>

            </div>

        </div>

    </div>

</div>

</section>
</Element>

<Element name="Contato">
<section id={StyleHome.Contato}>

<div id={StyleHome.ConteinerContato}>

    <div className={StyleHome.ConteinerCabecalho}>

        <div className={StyleHome.BoxText}>

            <h1>Need Help? Don't Forget to Contact With Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, rerum aut! Tempore maiores ipsum sequi porro ratione officia.</p>

        </div>

    </div>

    <div className={StyleHome.ConteinerInfo}>

        <div className={StyleHome.BoxInfo}>

            <div className={StyleHome.InfoContato}>

                <div className={StyleHome.ElementInfo}>
                     
                     <span><i class="bi bi-telephone-fill"></i></span> 
                     <div className={StyleHome.ConteinerText}> <p>+09 12345 67890</p> <p>+02 12345 67890</p> </div>
            
                </div>

                <div className={StyleHome.ElementInfo}>
                     
                     <span><i class="bi bi-envelope-at-fill"></i></span> 
                     <div className={StyleHome.ConteinerText}> <p>support@email.com</p> <p>info@email.com</p> </div>
            
                </div>

                <div className={StyleHome.ElementInfo}>
                     
                     <span><i class="bi bi-geo-alt-fill"></i></span> 
                     <div className={StyleHome.ConteinerText}> <p>67/A Lake View</p> <p>New York, USA</p> </div>
            
                </div>


            </div>
            
            <div className={StyleHome.ConteinerForm}>

            <form>

                <input type="text" placeholder="Nome" name="Nome"/>
                

               
                <input type="text" placeholder="Email" name="Email"/>
              

               
                <input type="text" placeholder="Assunto" name="assunto"/>
                

                <textarea cols="40" rows="10" maxlength="2000"/>

                <button>Enviar</button>

            </form>

            </div>

        </div>

    </div>

</div>

</section>
</Element>

</main>

<footer>

<div id={StyleHome.ConteinerFooter}>

   <h4>Follow Us</h4>

    <div className={StyleHome.BoxRedeSocial}> <span><i class="bi bi-facebook"></i></span> <span><i class="bi bi-instagram"></i></span> <span><i class="bi bi-twitter-x"></i></span> </div>

   <p>Copyright © 2024 IratoDev.com Todos os direitos reservados.</p>

</div>

</footer>

</>

);
}
