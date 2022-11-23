const root = document.querySelector('#root');

const newElement = (tag, content) => {
    const title = `<${tag}>${content}</${tag}>`;

    root.insertAdjacentHTML('beforeend', title);
}


newElement('h1 ', 'Dificuldade');





/**
* cria um elemento e insere na div root 

*   const root = document.querySelector('#root');
    const title = document.createElement('h1');
    title.textContent = 'Dificuldade';

    root.insertAdjacentElement('beforeend', title);
    console.log(root); 
*/
