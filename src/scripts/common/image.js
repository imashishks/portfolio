import globalstyle from "../globalstyle";
const style = new CSSStyleSheet();
import me from '../../assets/images/me.png';
style.replaceSync(`
    .image-container {
        position: relative;
    }
    .image-border {
        height: 100%;
        width: 100%;
        position: absolute;
        border: 2px solid black;
    }
    .image {
        position: relative;
    }

`)
class ImageComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: "open"
        });
        this.shadowRoot.adoptedStyleSheets = [globalstyle, style];
    }
    render() {
        return `
            <div class="image-container">
                <div class="image-border">
                </div>
                <img class="image" />
            </div>
        `;
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = this.render();  
        const imgElement = this.shadowRoot.querySelector(".image");
        const container = this.shadowRoot.querySelector(".image-container");
        imgElement.src = this.getAttribute('src'); 
        imgElement.style.cssText += this.getAttribute('style');
        imgElement.onload = ()=>{
            container.style.height = `${imgElement.clientHeight}px`;
        }
        this.setBorderProperties();
    }
    setBorderProperties(){

        // border element 

        const borderElement =  this.shadowRoot.querySelector(".image-border");

        // position
        const positions = this.getAttribute('borderPosition') && this.getAttribute('borderPosition').split(' ');
        positions.forEach((position)=>{
            borderElement.style[position] = `${this.getAttribute('borderOffset')}px`;
        })

        // color
        borderElement.style.borderColor = this.getAttribute('borderColor');
        
        // background filled
        if(this.getAttribute('borderFilled') === 'true')
            borderElement.style.background  = this.getAttribute('borderColor');
    }
   
}

customElements.define("app-img", ImageComponent);