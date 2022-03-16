import globalstyle from "../../globalstyle";

import circlePattern from '../../../assets/images/circle_pattern.svg';
const style = new CSSStyleSheet();
style.replaceSync(`
    .heading-container {
        position: relative;
    }
    
    .accent-img{
        position: absolute;
        top: -15%;
        width: 100px;
    }
    .heading {
        position: relative;
        font-weight: bold;
    }

`)
class HeadingComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: "open"
        });
        this.shadowRoot.adoptedStyleSheets = [globalstyle, style];
    }
    render() {
        let classList = '';
        if(this.hasAttribute('position')){
            classList+=` flex-hor-${this.getAttribute('position')}`;
        }
       
        return `
            <div class="heading-container flex-container ${classList}">
                <img class="accent-img" src="${circlePattern}" />
                <h1 class="heading f-6xl">
                    <slot >
                    </slot>
                </h1>
            </div>
        `;
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = this.render();  
        // const imgElement = this.shadowRoot.querySelector(".image");
        // const container = this.shadowRoot.querySelector(".image-container");
        // imgElement.src = this.getAttribute('src'); 
        // imgElement.style.cssText += this.getAttribute('style');
        // imgElement.onload = ()=>{
        //     container.style.height = `${imgElement.clientHeight}px`;
        // }
        // this.setBorderProperties();
    }
   
   
}

customElements.define("app-heading", HeadingComponent);