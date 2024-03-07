//1. Creación de una clase que hereda expresamente de HTMLElement
//https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
class navigationComponent extends HTMLElement{
    constructor(){
        super();
        //shadowRoot blinda/no blinda el componente de styling exerno
        /* this.root=this.attachShadow({mode:'closed'}) */
        //9. Creamos la variable que guardará los valores necesario, como los atributos pasado por html
        this.tienda;
        this.contactanos;
        this.aboutUs;
        this.proyecto;
        this.colaboraciones;
        this.recomendaciones;
    }

    //7. Es posible añadir a la etiqueta atributos
    static get observedAttributes(){
        //nombres de los atributos
        return ['tienda', 'contactanos', 'aboutUs', 'proyecto', 'colaboraciones', 'recomendaciones'];
    }

    //7. Sincroniza atributos con propiedades todo el rato
    set tienda(value){
        this.setAttribute('tienda', value);
    }
    get tienda(){
        return this.getAttribute('tienda');
    }

    set contactanos(value){
        this.setAttribute('contactanos', value);
    }
    get contactanos(){
        return this.getAttribute('contactanos');
    }

    set aboutUs(value){
        this.setAttribute('aboutUs', value);
    }
    get aboutUs(){
        return this.getAttribute('aboutUs');
    }

    set proyecto(value) {
        return this.setAttribute('proyecto', value);
    }
    get proyecto() {
        return this.getAttribute('proyecto');
    }

    set colaboraciones(value) {
        return this.setAttribute('colaboraciones', value);
    }
    get colaboraciones() {
        return this.getAttribute('colaboraciones');
    }

    set recomendaciones(value) {
        return this.setAttribute('recomendaciones', value);
    }
    get recomendaciones() {
        return this.getAttribute('recomendaciones');
    }


    attributeChangeCallback(nombreAtr, newValue){

        switch(nombreAtr.toLowerCase()){
            case "tienda":
                this.tienda = newValue;
                break;
            case "contactanos":
                this.contactanos = newValue;
                break;

            case "aboutus":
                this.aboutUs = newValue;
                break;

            case "proyecto":
                this.proyecto = newValue;
                break;

            case "colaboraciones":
                this.colaboraciones = newValue;
                break;

            case "recomendaciones":
                this.recomendaciones = newValue;
                break;

        }
    }

    connectedCallback(){

        this.innerHTML=
            `<header>
            <div id="headerContainer">
                <div id="logoContainer">
                    <a href="./index.html">
                        <img src="./assets/CVGatuna.png" alt="Home">
                    </a>
                </div>
                <div id="navContainer">
                    <nav>
                        <ul>
                            <li>
                                <a href="./tienda.html" class="${this.tienda}">Tienda</a>
                            </li>
                            <li>
                                <a href="./contactanos.html" class="${this.contactanos}">Contáctanos</a>
                            </li>
                            <li>
                                <a href="./aboutUs.html" class="${this.aboutUs}">Sobre nosotras</a>
                                <ul>
                                    <li>
                                        <a href="./proyecto.html" class="${this.proyecto}">Proyecto</a>
                                    </li>
                                    <li>
                                        <a href="./colaboraciones.html" class=${this.colaboraciones}>Colaboraciones</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="./perfil.html" class="profile"><img src="./assets/profile2.png" alt="Perfil de usuario"></a>
                                <ul id="problematicUl">
                                    <li><a href="./recomendaciones.html" class="${this.recomendaciones}">Recomendaciones</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>`
    }
}






window.customElements.define("navigation-component", navigationComponent);