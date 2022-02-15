import anime from 'animejs/lib/anime.es.js';
import '../styles/index.css';
import './components/home/home';
import './components/about/about';
import './common/image';

class AppComponent{
    appRef = document.querySelector("#app");
    init(){
       
       
    }
    render(){
        // add all the components
        const homeComponent = document.createElement("app-home");
        const aboutComponent = document.createElement("app-about");
        this.appRef.appendChild(homeComponent);
        this.appRef.appendChild(aboutComponent);
    }
}

const app = new AppComponent();
app.render();