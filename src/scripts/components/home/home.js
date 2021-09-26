import globalstyle from "../../globalstyle";
import anime from 'animejs/lib/anime.es.js';
import wave from '../../../assets/images/wave.svg';
const style = new CSSStyleSheet();
style.replaceSync(`
    .home{
        width: 100%;
        height: 100vh;
        background: url(${wave}) repeat-x; 
        background-size: 100%;
        background-position: 50%;

        font-family: Urbanist;
        postion:absolute;
        bottom:0;
        left:0;
    }
    svg{
        width:80%;
        height:auto;
    }
    svg path{
        mix-blend-mode:multiply;
    }
`)
class HomeComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: "open"
        });
        this.shadowRoot.adoptedStyleSheets = [globalstyle, style];

    }
    render() {
        return `
       <section class="home flex-container flex-dir-col flex-hor-center flex-vert-center">
            <svg width="600" height="136" viewBox="0 0 610 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="h1" d="M20.5 22V116" stroke="#999999" stroke-width="40" stroke-linecap="round"/>
                <path class="h2" d="M21 69L91 69" stroke="#555555" stroke-width="40" stroke-linecap="round"/>
                <path class="h3" d="M91 22V116" stroke="#111111" stroke-width="40" stroke-linecap="round"/>
                <path class="h4" d="M21.5 69.5V68.5" stroke="#111111" stroke-width="40" stroke-linecap="round"/>
                <path class="e1" d="M139 22V116" stroke="#555555" stroke-width="40" stroke-linecap="round"/>
                <path class="e2" d="M140 69H176" stroke="#555555" stroke-width="40" stroke-linecap="round"/>
                <path class="e3" d="M139.5 22L209.5 22" stroke="#999999" stroke-width="40" stroke-linecap="round"/>
                <path class="e4" d="M139.5 116L209.5 116" stroke="#111111" stroke-width="40" stroke-linecap="round"/>
                <path class="l1" d="M258 22V116" stroke="#111111" stroke-width="40" stroke-linecap="round"/>
                <path class="l2" d="M258.5 116L328.5 116" stroke="#555555" stroke-width="40" stroke-linecap="round"/>
                <path class="l3" d="M377 21V115" stroke="#777777" stroke-width="40" stroke-linecap="round"/>
                <path class="l4" d="M377.5 115L447.5 115" stroke="#333333" stroke-width="40" stroke-linecap="round"/>
                <circle class="o1" cx="530" cy="68" r="48" stroke="#333333" stroke-width="40"/>
            </svg>
            <h2  class="font-md font-bold mt-10"> I am Ashish Kumar </h2>
            <p class="mt-5"> A web developer and digital artist from India</p>
        </section>
        `;
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = this.render();
        this.setupAnimation.call(this);
    }
    setupAnimation() {
        const that = this;
        const animations = [
            [{
                name: ".h1"
            }, {
                name: ".h3"
            }, {
                name: ".h2"
            }, {
                name: ".h4"
            }],
            [{
                name: ".e3"
            }, {
                name: ".e2"
            }, {
                name: ".e4"
            }, {
                name: ".e1"
            }],
            [{
                name: ".l1"
            }, {
                name: ".l2"
            }],
            [{
                name: ".l4"
            }, {
                name: ".l3"
            }]
        ]

        function setDash(el) {
            if (el.nodeName === 'path') {
                el.style.dashArray = anime.setDashoffset(el);
                return [anime.setDashoffset(el) - 1, 0];
            }

            return 0;
        }

        animations.forEach(function(animationVal, index) {
            const timeline = anime.timeline({
                autoplay: true,
                direction: 'alternate',
                loop: false
            });
            animationVal.forEach(function(animation, index1) {
                timeline
                    .add({
                        targets: that.shadowRoot.querySelector(animation.name),
                        opacity: {
                            value: [0, 1],
                            duration: 200,
                            delay: 100 * index,
                            easing: 'easeInOutQuad'
                        },

                    });
                timeline
                    .add({
                        targets: that.shadowRoot.querySelector(animation.name),
                        strokeDashoffset: {
                            value: setDash,
                            duration: 400,
                            delay: 100 * index,
                            easing: 'easeInOutQuad'
                        },
                    });
            })

        });
        const timeline = anime.timeline({
            autoplay: true,
            direction: 'alternate',
            loop: false
        });
        timeline.add({
            targets: that.shadowRoot.querySelector(".o1"),
            opacity: {
                value: [0, 1],
                duration: 1500,
                delay: 110,
                easing: 'easeInOutQuad'
            },

            scale: {
                value: [0.8, 1],
                duration: 1500,
                delay: 110,
                easing: 'easeInOutQuad'
            }
        });
        timeline.add({
            targets: that.shadowRoot.querySelector("h2"),
            opacity: {
                value: [0, 1],
                duration: 500,
                delay: 200,
                easing: 'easeInOutQuad'
            },

        });
        timeline.add({
            targets: that.shadowRoot.querySelector("p"),
            opacity: {
                value: [0, 1],
                duration: 500,
                delay: 200,
                easing: 'easeInOutQuad'
            },

        });
    }
}

customElements.define("app-home", HomeComponent);