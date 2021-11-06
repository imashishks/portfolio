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
    svg circle{
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
            <svg width="809" height="305" viewBox="0 0 809 305" fill="none" xmlns="http://www.w3.org/2000/svg">  
                <path class="h1" d="M107 22V116" stroke="#999999" stroke-width="40" stroke-linecap="round"/>
                <path class="h2" d="M107.5 69L177.5 69" stroke="#555555" stroke-width="40" stroke-linecap="round"/>
                <path class="h3" d="M177.5 22V116" stroke="#111111" stroke-width="40" stroke-linecap="round"/>
                <path class="h4" d="M108 69.5V68.5" stroke="#111111" stroke-width="40" stroke-linecap="round"/>
                <path class="e1" d="M225.5 22V116" stroke="#555555" stroke-width="40" stroke-linecap="round"/>
                <path class="e2" d="M226.5 69H262.5" stroke="#555555" stroke-width="40" stroke-linecap="round"/>
                <path class="e3" d="M226 22L296 22" stroke="#999999" stroke-width="40" stroke-linecap="round"/>
                <path class="e4" d="M226 116L296 116" stroke="#111111" stroke-width="40" stroke-linecap="round"/>
                <path class="l1" d="M344.5 22V116" stroke="#111111" stroke-width="40" stroke-linecap="round"/>
                <path class="l2" d="M345 116L415 116" stroke="#555555" stroke-width="40" stroke-linecap="round"/>
                <path class="l3" d="M471 21V115" stroke="#777777" stroke-width="40" stroke-linecap="round"/>
                <path class="l4" d="M471.5 115L541.5 115" stroke="#333333" stroke-width="40" stroke-linecap="round"/>
                <circle class="o1" cx="631" cy="68" r="48" stroke="#333333" stroke-width="40"/>
                <path class="w1" d="M25 182L52 276" stroke="#999999" stroke-width="40" stroke-linecap="round"/>
                <path class="w2" d="M155 182L128 276" stroke="#999999" stroke-width="40" stroke-linecap="round"/>
                <path class="w3" d="M90 208L51.9999 275.615" stroke="#555555" stroke-width="40" stroke-linecap="round"/>
                <path class="w4" d="M90 208L128 275.615" stroke="#555555" stroke-width="40" stroke-linecap="round"/>
                <circle class="o2" cx="251" cy="228" r="48" stroke="#333333" stroke-width="40"/>
                <path class="r1" d="M361 234L431.5 275" stroke="#333333" stroke-width="40" stroke-linecap="round"/>
                <path class="r2" d="M361 181V275" stroke="#777777" stroke-width="40" stroke-linecap="round"/>
                <circle class="r3"  cx="395" cy="214" r="34" stroke="#999999" stroke-width="40"/>
                <path class="l6" d="M500 181V275" stroke="#777777" stroke-width="40" stroke-linecap="round"/>
                <path class="l5" d="M500.5 275L570.5 275" stroke="#333333" stroke-width="40" stroke-linecap="round"/>
                <circle class="d1" cx="669" cy="228" r="48" stroke="#333333" stroke-width="40"/>
                <path class="d2"  d="M619 181V275" stroke="#777777" stroke-width="40" stroke-linecap="round"/>
                <path class="d3" d="M619 276V275" stroke="#999999" stroke-width="40" stroke-linecap="round"/>




                
                <path  class="ex1" d="M780 182V232" stroke="#777777" stroke-width="40" stroke-linecap="round"/>

                <path class="ex2" d="M780.5 276L779.793 276.707" stroke="#333333" stroke-width="40" stroke-linecap="round"/>
 

            </svg>
           

            <!-- <h2  class="font-md font-bold mt-10"> I am Ashish Kumar </h2>
            <p class="mt-5"> A web developer and digital artist from India</p> -->
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
                name: ".w1"
            }, {
                name: ".w3"
            }, {
                name: ".w2"
            }, {
                name: ".w4"
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
            }],
            [{
                name: ".r1"
            }, {
                name: ".r2"
            },{
                name: ".r3"
            }],
            [{
                name: ".l5"
            }, {
                name: ".l6"
            }],
            [{
                name: ".d1"
            }, {
                name: ".d2"
            },{
                name: ".d3"
            }],
            [{
                name: ".ex1"
            }, {
                name: ".ex2"
            }],
           
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
            targets: that.shadowRoot.querySelector(".o2"),
            opacity: {
                value: [0, 1],
                duration: 500,
                delay: 0,
                easing: 'easeInOutQuad'
            },

            // scale: {
            //     value: [0.8, 1],
            //     duration: 1500,
            //     delay: 110,
            //     easing: 'easeInOutQuad'
            // }
        });

    }
}

customElements.define("app-home", HomeComponent);