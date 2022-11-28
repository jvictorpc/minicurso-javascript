const stateItems = [true, false, false]; 

function showItems(){
    const items = stateItems.map(state  => {
        if(state){
            return itemActive;
        }

        return item;
    })

    
   return items.join('');
}


const Action = (css ) => {
    return`
        <li style= "${css}"></li>
    `
}

const Item = (css, content = '') => {
    return `
        <li style="${css[0].trim()}">${content}</li>
    `;
}

const Slide = (css, content) => {
    return `
        <ul style="${css[0].trim()}">${content}</ul>
    `;
}

const action = Action`
    height: calc(var(--line-height) * 4);
    width: calc(var(--line-height) * 4);
    background-color: var(--action-color);
    border-radius: 50%;
    position: absolute;
    left: 5px;
    

`

const item = Item`
    height: calc(var(--line-height) * 3);
    width: calc(var(--line-height) * 3);
    background-color: var(--slide-color);
    border-radius: 50%;

`;

const itemActive = Item`
    height: calc(var(--line-height) * 5);
    width: calc(var(--line-height) * 5);
    background-color: var(--slide-color);
    border-radius: 50%;
`


const slide = Slide`
    width: 60%;
    height: var(--line-height);
    background-color: var(--slide-color);
    margin: 0 auto;
    margin-top: auto;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 50px;
    position: relative;
    ${showItems() + action}
`

