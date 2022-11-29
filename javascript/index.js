const root = document.querySelector('#root');
const textContent = "Dificuldade";
const li = document.querySelectorAll('.item');


const title = Title`
    color: #9b59b6;
    font-size: 2.5em;
    letter-spacing: 1.5px;
    margin-bottom: 2em;
    ${textContent}
`

let wrapperCharacter = WrapperCharacter(cupHead);

function handleClick (event) {
    const {target} = event;
    const allItems = document.querySelectorAll('.item');
    const action = document.querySelector('.action');
    const title =  document.querySelector('.title');
    const wrapperStructure = document.querySelector('.wrapper-character');

    allItems.forEach(item => item.classList.remove('active'));
    target.classList.add('active'); 

    clearAction(action);

    if(target.classList.contains('pos-2')){
        action.classList.add('second');
        root.removeChild(wrapperStructure);
        wrapperCharacter = WrapperCharacter(cupHead, cupHead);
        title.insertAdjacentHTML('afterend', wrapperCharacter);
        
    }
    if(target.classList.contains('pos-3')){
        action.classList.add('third');
        root.removeChild(wrapperStructure);
        wrapperCharacter = WrapperCharacter(cupHead, cupHead, cupHead);
        title.insertAdjacentHTML('afterend', wrapperCharacter);
    }
    if(target.classList.contains('pos-1')){
        root.removeChild(wrapperStructure);
        wrapperCharacter = WrapperCharacter(cupHead);
        title.insertAdjacentHTML('afterend', wrapperCharacter);
    }

    

}

root.insertAdjacentHTML('beforeend', title);
root.insertAdjacentHTML('beforeend', wrapperCharacter);
root.insertAdjacentHTML('beforeend', slide);