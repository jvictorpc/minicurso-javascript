//tagged template string
const Title = (css, textContent) => {
    return `
        <h1 class="title"  style = "${css[0].trim()}">${textContent}</h1>
    `;
}
