

const root = document.querySelector('#root');
const textContent = "Dificuldade"


const title = Title`
    color: #82589F;
    font-size: 2.5em;
    letter-spacing: 1.5px;
    ${textContent}
`

root.insertAdjacentHTML('beforeend', title);