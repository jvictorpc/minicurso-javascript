//tagged template string
const Title = (css, textContent) => {
    console.log(css[0].trim());

    return `
        <h1 style = "${css[0].trim()}">${textContent}</h1>
    `;
}


