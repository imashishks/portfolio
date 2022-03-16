import anime from 'animejs/lib/anime.es.js';
import '../styles/index.css';
import './components/home/home';
import './components/about/about';
import './components/skills/skills';
import './components/writeups/writeups';
import './common/components/image';

import './common/components/heading';

class AppComponent{
    appRef = document.querySelector("#app");
    init(){
       
       
    }
    render(){
        // add all the components
        const homeComponent = document.createElement("app-home");
        const aboutComponent = document.createElement("app-about");
        const skillsComponent = document.createElement("app-skills");
        const writeUpsComponent = document.createElement("app-writeups");
        this.appRef.appendChild(homeComponent);
        this.appRef.appendChild(aboutComponent);
        this.appRef.appendChild(skillsComponent);
        this.appRef.appendChild(writeUpsComponent);
    }
}

const app = new AppComponent();
app.render();