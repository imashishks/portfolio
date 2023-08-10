import globalstyle from "../../globalstyle";
const style = new CSSStyleSheet();
style.replaceSync(`
    
    .button {
        background: transparent;
        border: black solid 1px;
        padding: 30px;
        width: 130px;
        font-size: 25px;
        font-weight: 600;
        height: 130px;
        border-radius: 76px;
        box-shadow: 8px 8px 0 black;
        cursor: pointer;
        transition: all 0.2s;
        position: relative;

    }
    .button:hover {
        margin-top: -5px;
    }

`)
class ButtonComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: "open"
        });
        this.shadowRoot.adoptedStyleSheets = [globalstyle, style];
    }
    render() {
        return `
            <button class="button">
                <slot >
                </slot>
            </button>
            
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
        //     container.style.width = `${imgElement.clientWidth}px`;
        //     this.setBorderProperties();
        // }
        
    }   
}

customElements.define("app-button", ButtonComponent);