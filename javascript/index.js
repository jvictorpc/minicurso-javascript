const root = document.querySelector('#root');
const textContent = "Dificuldade"

const title = Title`
    color:red;
    ${textContent}
    font-size: 30px;
    ${'texto pequeno'}
`

root.insertAdjacentHTML('beforeend', title);