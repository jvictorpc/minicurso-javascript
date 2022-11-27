const root = document.querySelector('#root');
const textContent = "Dificuldade";



const title = Title`
    color: #9b59b6;
    font-size: 2.5em;
    letter-spacing: 1.5px;
    margin-bottom: 2em;
    ${textContent}
`


root.insertAdjacentHTML('beforeend', title);
root.insertAdjacentHTML('beforeend', wrapperCharacter);