const  globalStyle = new CSSStyleSheet();
globalStyle.replaceSync(`
    .font-large{
        font-size: 6rem;
    }
`);

export default globalStyle;