//tagged template string

function Title (css, textContent, smalltext) {
    console.log(css);
    return `
        <h1 style="${css[0]}${css[1]}">
            ${textContent}
            <small> ${smalltext}</small>
        </h1>
    `;
}


