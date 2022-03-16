import globalstyle from "../../globalstyle";
import anime from 'animejs/lib/anime.es.js';

const style = new CSSStyleSheet();
style.replaceSync(`
  
    .profile-img-container{
        position:relative;
        display: flex;
        justify-content:flex-end;
    }
   
    .skills{
        margin: auto;
        width: 80vw;
        max-width: 1200px;
        height: 50vh;
    }
   
    .skills-container {
        text-align: center;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        row-gap: 30px;
    }
`)
class SkillsComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: "open"
        });
        this.shadowRoot.adoptedStyleSheets = [globalstyle, style];
    }
    render() {
        
          
        return `
            <section class="skills flex-container flex-dir-col ">
               <app-heading position='end'>
                    Skills
               </app-heading>
                <div class='mt-70 skills-container'>
                    <span> HTML</span>
                    <span> Angular</span>
                    <span> Photoshop</span>
                    <span> CSS/ SASS</span>
                    <span> React</span>
                    <span> Illustrator</span>
                    <span> JavaScript</span>
                    <span> Vue</span>
                    <span> Figma</span>
                    <span> TypeScript</span>
                    <span> NodeJs</span>
                    <span> PHP</span>
                </div>
            </section>
        `;
    }
    connectedCallback() {
        
        this.shadowRoot.innerHTML = this.render();
        
    }
   
}

customElements.define("app-skills", SkillsComponent);