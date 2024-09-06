
import { useState,useEffect, useRef, useMemo } from "react";

import StyleElement from "./StyleElements.module.css";

export default function ElementService({icone,Title,text}){

return(

<>

<div className={StyleElement.ElementService}>

    <div className={StyleElement.ConteinerElement}>

        <div className={StyleElement.BoxElementService}>


                <div className={StyleElement.BoxIcone}>{icone}</div>

                <h2>{Title}</h2>

                <p>{text}</p>

        </div>

    </div>

</div>

</>

)

}

export function ElementProduto({Title, imagem, preco}){

return(

<>

<div className={StyleElement.ElementProduto}>

    <div className={StyleElement.ConteinerProduto}>
         
        <div className={StyleElement.BoxProduto}>

            <h3>{Title}</h3>

            
            <span><img src={imagem} alt="Produto"/></span>

            <p>{preco}</p>

            <button><i class="bi bi-cart4"></i> Buy Now</button>

        </div>

    </div>

</div>

</>

)

}

export function ElementSanfona(){

const [Focus, setFocus]=useState(null);

const element1Ref = useRef();
const element2Ref = useRef();
const element3Ref = useRef();
const element4Ref = useRef();

const elementRefs = useMemo(() => ({
  Element1: element1Ref,
  Element2: element2Ref,
  Element3: element3Ref,
  Element4: element4Ref,
}), []);

function handleClick(element) {
    // Se o elemento já está com foco, remove o foco ao clicar novamente
    setFocus((prevFocus) => (prevFocus === element ? null : element));
}

useEffect(()=>{

Object.keys(elementRefs).forEach((key) => {
const ref = elementRefs[key].current;
if (ref) {
ref.style.display = key === Focus ? "flex" : "none";
}
});


},[Focus, elementRefs])

return(

<>

<div id={StyleElement.ModalSanfona}>

    <div className={StyleElement.ConteinerSanfona}>

        <div onClick={() => handleClick("Element1")} className={StyleElement.ElementSanfona}>

            <div className={StyleElement.ConteinerTitle}>
                
            <h1>How can I buy the watch?</h1>

            <span>{(!Focus ? <i class="bi bi-chevron-down"></i> : <i class="bi bi-chevron-up"></i>)}</span>

            </div>

            <div className={StyleElement.ConteinerText} ref={elementRefs.Element1}>

                <div className={StyleElement.BoxText}>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
                </div>

            </div>

        </div>

        <div onClick={() => handleClick("Element2")} className={StyleElement.ElementSanfona}>

            <div className={StyleElement.ConteinerTitle}>
                
            <h1>How can I order the watch?</h1>

            <span>{(!Focus ? <i class="bi bi-chevron-down"></i> : <i class="bi bi-chevron-up"></i>)}</span>

            </div>

            <div className={StyleElement.ConteinerText} ref={elementRefs.Element2}>

                <div className={StyleElement.BoxText}>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
                </div>

            </div>

        </div>

        <div onClick={() => handleClick("Element3")} className={StyleElement.ElementSanfona}>

            <div className={StyleElement.ConteinerTitle}>
                
            <h1>How much price of the watch?</h1>

            <span>{(!Focus ? <i class="bi bi-chevron-down"></i> : <i class="bi bi-chevron-up"></i>)}</span>

            </div>

            <div className={StyleElement.ConteinerText} ref={elementRefs.Element3}>

                <div className={StyleElement.BoxText}>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
                </div>

            </div>

        </div>

        <div onClick={() => handleClick("Element4")} className={StyleElement.ElementSanfona}>

            <div className={StyleElement.ConteinerTitle}>
                
            <h1>How can I get refund?</h1>

            <span>{(!Focus ? <i class="bi bi-chevron-down"></i> : <i class="bi bi-chevron-up"></i>)}</span>

            </div>

            <div className={StyleElement.ConteinerText} ref={elementRefs.Element4}>

                <div className={StyleElement.BoxText}>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
                </div>

            </div>

        </div>
    

    </div>

</div>

</>

)

}