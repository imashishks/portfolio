import globalstyle from "../../globalstyle";
import anime from 'animejs/lib/anime.es.js';
import wave from '../../../assets/images/wave.svg';
import me from '../../../assets/images/me.png';
import circlePattern from '../../../assets/images/circle_pattern.svg';
const style = new CSSStyleSheet();
style.replaceSync(`
    
    .profile-img-container{
        position:relative;
        display: flex;
        justify-content:flex-end;
    }
    .accent-img{
        position: absolute;
        right: 0%;
        top: -15%;
        width: 180px;
       
    }
    .about{
        margin: auto;
        width: 80%;
        max-width: 1200px;
        height: 100vh;
    }
    .profile-img{
        margin-right: 100px;
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
        const imgStyle ='width:400px;'
          
        return `
            <section class="about flex-container flex-dir-row flex-hor-center flex-vert-center">
                <div class="profile-img-container">
                    <img class="accent-img" src="${circlePattern}" />
                    <app-img 
                        class="profile-img"
                        src="${me}"
                        style="${imgStyle}"
                        borderPosition='top left'
                        borderOffset='20'
                        borderColor='#000'
                        borderFilled='false'
                    >
                    </app-img>
                </div>
                <div>
                    <h1 class="f-6xl"> I am Ashish Kumar </h1>
                    <p class="f-xl mt-10"> A web developer and digital artist from <b>India </b></p>
                    <p class="mt-20">Born and brought up in Jamshedpur (the steel city of India), working now as full time web developer in Bengaluru ( the silicon valley of India). Apart from work, i like to paint, cycle and go on long walks.Coffee is my choice of fuel (both cold and hot brew, i don't discriminate). Never said no to a  fried chicken burger or some chicken biryani. Big fan of all kinds of music from Kishore kumar to Ritviz to Pink flyod and Queen.</p>
                </div>
            </section>
        `;
    }
    connectedCallback() {
        
        this.shadowRoot.innerHTML = this.render();
        
    }
   
}

customElements.define("app-about", AboutComponent);