import globalstyle from "../../globalstyle";
class HomeComponent extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.adoptedStyleSheets = [globalstyle];
        this.shadowRoot.innerHTML = this.render();
    }
    render(){
       return  `
            <section class="home">
                <h1 class="font-large">Hello World !</h1>
                <h2> I am Ashish Kumar </h2>
                <p> A webdeveloper and digital artist from India</p>
            </section>
        
        `;
    }
}

customElements.define("app-home",HomeComponent);