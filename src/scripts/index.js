import anime from 'animejs/lib/anime.es.js';
import '../styles/index.css';
import './components/home/home';

class AppComponent{
    appRef = document.querySelector("#app");
    init(){
       
       
    }
    render(){
        // add all the components
        const homeComponent = document.createElement("app-home");
        this.appRef.appendChild(homeComponent);
    }
}

const app = new AppComponent();
app.render();
