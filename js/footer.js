//1. Creación de una clase que hereda expresamente de HTMLElement
//https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
class footerComponent extends HTMLElement{
    constructor(){
        super();
    }


    //4. Editamos el componente
    connectedCallback(){

        this.innerHTML=
            `<footer>
            <a id="licencia" href="https://www.freepikcompany.com/es/terminos-y-condiciones#nav-freepik-license" target='_blank'>Licencia imágenes</a>
                <div>
                    <ul>
                        <li><a href='https://www.facebook.com/?locale=es_ES' target='_blank'><i class="icon-social-facebook"></i></a></li>
                        <li><a href='https://twitter.com/i/flow/login' target='_blank'><i class="icon-social-twitter"></i></a></li>
                        <li><a href='https://www.instagram.com/' target='_blank'><i class="icon-social-instagram"></i></a></li>
                        <li><a href='https://www.youtube.com/' target='_blank'><i class="icon-social-youtube"></i></a></li>
                        <li><a href='https://www.google.com/intl/es/gmail/about/' target='_blank'><i class="icon-envelope-open"></i></a></li>
                    </ul>
                </div>
             </footer>`
    }
}

window.customElements.define("footer-component", footerComponent);