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
   
    .writeups {
        width: 80vw;
        max-width: 1500px;
        min-height: 100vh;
        margin-bottom:200px;
    }
    .writeup-desc {
        max-width:200px;
    }
    .writeup-item {
        cursor: pointer;
    }
    .writeups-container {
        text-align: center;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        row-gap: 30px;
    }
`)
const POST_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ashish09';
class WriteUpsComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: "open"
        });
        this.shadowRoot.adoptedStyleSheets = [globalstyle, style];
    }
    mediumData = [];
    render(response) {
        const imgStyle ='max-width:200px;max-height:200px;object-fit: cover;';
        let borderBoolean = false;
        return `
            <section class="writeups flex-container flex-dir-col mt-10">
                <app-heading position='start'>
                    Write Ups
                </app-heading>
                <div class="flex-container flex-hor-center flex-vert-center mt-100 flex-wrap">
                ${response.items.map((element,index) => {
                    borderBoolean = !borderBoolean;
                    const divMargin = (index+1) % 2 === 0 ?  'mt-100':'mt-250'  ;
                    return `
                            <div onclick="test()" class="writeup-item flex-dir-col ml-70 mb-50 ${divMargin}">
                                <app-img 
                                    class='writeup-img'
                                    src='${element.thumbnail}' 
                                    style='${imgStyle}'
                                    borderPosition='${borderBoolean? 'top left': 'top right'}' 
                                    borderOffset='20'
                                    borderColor='#000' 
                                    borderFilled='false'>
                                </app-img>
                                <p class='writeup-desc mt-50'><b>${element.title}</b></p>
                            </div>
                            `;

                }).join('')}
               
                
               </div>
               
            </section>
        `;
    }
    async fetchData(){
        const response = await fetch.get(POST_URL);
        console.log(response);
        // only render this section if article data is retreived 
        if(response && response.status==='ok') {
            const resp = {
                ...response,
                items:response.items.concat(response.items).concat(response.items)
            }
            this.shadowRoot.innerHTML = this.render(resp);
            const writeups = this.shadowRoot.querySelectorAll('.writeup-item');
            
            console.log();
        }
       
    }
    test(){
        console.log('test');
    }
    connectedCallback() {
        this.fetchData();
    }
   
}

customElements.define("app-writeups", WriteUpsComponent);