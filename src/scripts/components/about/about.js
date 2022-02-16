import globalstyle from "../../globalstyle";
import anime from 'animejs/lib/anime.es.js';
import wave from '../../../assets/images/wave.svg';
import me from '../../../assets/images/me.png';
import circlePattern from '../../../assets/images/circle_pattern.svg';
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
    .profile-img-container{
        position:relative;
        display: flex;
        justify-content:flex-end;
    }
    .accent-img{
        position: absolute;
        right: -25%;
        top: -15%;
        width: 200px;
       
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
                <div class="profile-img-container">
                    <img class="accent-img" src="${circlePattern}" />
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
                    <h1> I am Ashish Kumar </h1>
                    <p> A web developer and digital artist from <b>India </b></p>
                    <p>Born and brought up in Jamshedpur (the steel city of India), working now as full time web developer in Bengaluru ( the silicon valley of India). Apart from work, i like to paint, cycle and go on long walks.Coffee is my choice of fuel (both cold and hot brew, i don't discriminate). Never said no to a  fried chicken burger or some chicken biryani. Big fan of all kinds of music from Kishore kumar to Ritviz to Pink flyod and Queen.</p>
                </div>
            </section>
        `;
    }
    connectedCallback() {
        
        this.shadowRoot.innerHTML = this.render();
        
    }
   
}

customElements.define("app-about", AboutComponent);