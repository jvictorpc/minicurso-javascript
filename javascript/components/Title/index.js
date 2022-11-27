//tagged template string
const Title = (css, textContent) => {
    return `
        <h1 style = "${css[0].trim()}">${textContent}</h1>
    `;
}
