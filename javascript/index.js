const root = document.querySelector('#root');
const textContent = "Dificuldade"


const title = Title`
    color: red;
    ${textContent}
`

root.insertAdjacentHTML('beforeend', title);