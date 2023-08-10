import globalstyle from "../../globalstyle";
import anime from 'animejs/lib/anime.es.js';
import fetch from "../../common/services/fetch";
import linkedin from '../../../assets/images/linkedin.png';
import instagram from '../../../assets/images/instagram.png';
import github from '../../../assets/images/github.png';
import email from '../../../assets/images/email.png';

const style = new CSSStyleSheet();
style.replaceSync(`
    .contact-link-container {
        gap: 50px;
    }
    .contact {
        margin: auto;
        width: 80vw;
        max-width: 1500px;
        margin-bottom:200px;
    }
   
`)
const POST_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ashish09';
class ContactComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: "open"
        });
      
        this.shadowRoot.adoptedStyleSheets = [globalstyle, style];
        
    }
    mediumData = [];
    render(response) {
        let imgStyle ='width:40vw;max-width:200px;max-height:200px;height:740vw; object-fit: cover;';
        
        let borderBoolean = false;
        return `
            <section class="contact flex-container flex-dir-col ">
                <app-heading position='start'>
                    What's up? Say hi!
                </app-heading>
                <div class="contact-link-container flex-container flex-hor-center flex-vert-center mt-100 mb-100 flex-wrap">
                    <app-button>
                        <img  width="100%" src="${linkedin}" />
                    </app-button>
                    <app-button>
                        <img  width="100%" src="${instagram}" />
                    </app-button>
                    <app-button>
                        <img  width="100%" src="${github}" />
                    </app-button>
                    <app-button>
                        <img  width="100%" src="${email}" />
                    </app-button>
               </div>
               
            </section>
        `;
    }
    async fetchData(){
        const response = await fetch.get(POST_URL);
        console.log(response);
        // only render this section if article data is retreived 
        if(response && response.status==='ok'){
            const responseData = {...response, items: [...response.items, response.items[0]]}
            this.shadowRoot.innerHTML = this.render(responseData);
        }
       
    }
    connectedCallback() {
        this.fetchData();
    }
   
}

customElements.define("app-contact", ContactComponent);