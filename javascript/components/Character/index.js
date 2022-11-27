const Character = (css, path) => {
    return `
        <img style =  "${css[0].trim()}" src = ${path} alt = "personagem">
    `;
}