import globalstyle from "../../globalstyle";
import anime from 'animejs/lib/anime.es.js';
import wave from '../../../assets/images/wave.svg';
import me from '../../../assets/images/me.png';
const style = new CSSStyleSheet();
style.replaceSync(`
    .home{
        width: 100%;
        height: 100vh;
        background: url(${wave}) repeat-x; 
        background-size: 100%;
        background-position: 50%;

        font-family: Urbanist;
        postion:absolute;
        bottom:0;
        left:0;
    }
    svg{
        width:80%;
        height:auto;
    }
    svg path{
        mix-blend-mode:multiply;
    }
    svg circle{
        mix-blend-mode:multiply;
    }
`)
class AboutComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: "open"
        });
        this.shadowRoot.adoptedStyleSheets = [globalstyle, style];

    }
    render() {
        return `
            <section class="home flex-container flex-dir-col flex-hor-center flex-vert-center">
                <div>
                        <app-img 
                            src='${me}'
                            borderPosition='top left'
                            borderOffset='20'
                            borderColor='#000'
                            borderFilled='false'
                        >
                        </app-img>
                </div>
                <div>
                B
                </div>
            </section>
        `;
    }
    connectedCallback() {
        
        this.shadowRoot.innerHTML = this.render();
        
    }
   
}

customElements.define("app-about", AboutComponent);