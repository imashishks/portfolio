const  globalStyle = new CSSStyleSheet();
const marginSizes = [5,10,20,30,50,70,100,150];
const fontSizes = {
    xs : 0.75,
    sm: 0.875,
    base: 1,
    lg : 1.125,
    xl: 1.25,
    '2xl': 1.5,
    '3xl': 1.875,
    '4xl':2.25,
    '5xl':3,
    '6xl': 3.75,
    '7xl': 4.5,
    '8xl': 6

} ;
let marginStyle = '';
let fontSizeStyle= '';
for(let marginSize of marginSizes){
    marginStyle+=`
        .mt-${marginSize}{
            margin-top: ${marginSize}px;
        }
        .mb-${marginSize}{
            margin-bottom: ${marginSize}px;
        }
        .ml-${marginSize}{
            margin-right: ${marginSize}px;
        }
        .mr-${marginSize}{
            margin-right: ${marginSize}px;
        }
        .margin-${marginSize}{
            margin: ${marginSize}px;
        }
    `;
}

for(let fontSize in fontSizes){
    fontSizeStyle+= `
        .f-${fontSize} {
            font-size: ${fontSizes[fontSize]}rem;
        }
    `
}

globalStyle.replaceSync(`
    html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}
    .font-xl{
        font-size: 6rem;
        color: var(--text-color);
    }
    .font-md{
        font-size: 2rem;
        color: var(--text-color);
    }
    .font-bold{
        font-weight: bold;
    }
    .flex-container{
        display:flex;
    }
    .flex-dir-col{
        flex-direction:column;
    }
    .flex-vert-center{
        align-items: center;
    }
    .flex-hor-center{
        justify-content: center;
    }
    .flex-hor-end{
        justify-content: flex-end;
    }
    .flex-hor-evenly{
        justify-content: space-evenly;
    }
    .flex-wrap {
        flex-wrap : wrap;
    }
    ${marginStyle}

    ${fontSizeStyle}

`);

export default globalStyle;