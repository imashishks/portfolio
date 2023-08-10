import globalstyle from "../../globalstyle";
import anime from 'animejs/lib/anime.es.js';
import fetch from "../../common/services/fetch";

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
        max-width: 1500px;
        min-height: 100vh;
        margin-bottom:200px;
    }
    .skills-desc {
        max-width:200px;
    }
   
    .skills-container {
        text-align: center;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        row-gap: 30px;
    }
`)
const POST_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ashish09';
class ArtShowreelComponent extends HTMLElement {
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
            <section class="skills flex-container flex-dir-col ">
                <app-heading position='end'>
                    Art Showreel
                </app-heading>
                <div class="flex-container flex-hor-center flex-vert-center mt-100 flex-wrap">
                ${response.items.map((element,index) => {
                    borderBoolean = !borderBoolean;
                    const divMargin = (index+1) % 2 === 0 ?  'mt-100':'mt-250';
                    return `
                            <div class="flex-dir-col ml-70 mb-50 ${divMargin}">
                                <app-img 
                                    class=''
                                    src='${element.thumbnail}' 
                                    style='${imgStyle}'
                                    borderPosition='${borderBoolean? 'top left': 'top right'}' 
                                    borderOffset='20'
                                    borderColor='#000' 
                                    borderFilled='false'>
                                </app-img>
                                <p class='skills-desc mt-50 '><b>${element.title}</b></p>
                            </div>
                            `;

                }).join('')}
                
                <app-button>
                    See More
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

customElements.define("app-artshowreel", ArtShowreelComponent);