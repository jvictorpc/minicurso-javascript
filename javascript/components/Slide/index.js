const stateItems = [true, false, false]; 

function showItems(stateItems){
    const itemActive = (pos) => Item`
        .item.active{
            transform:scale(1.7);
        }
        ${`active pos-${pos}`}
    `;
       
    const item = (pos) => Item`
        .item {
            height: calc(var(--line-height) * 3);
            width: calc(var(--line-height) * 3);
            background-color: var(--slide-color);
            border-radius: 50%;
            transition: transform 100ms linear;
            cursor: pointer;
        }
        ${`pos-${pos}`}
    `;

       

    const items = stateItems.map((state, index)  => {
        if(state){
            return itemActive(index+1);
        }

        return item(index+1);
    })
    
   return items.join('');
}

function clearAction(action){
    action.classList.remove('second');
    action.classList.remove('third');
}


function createStyle (css) {
    const head = document.querySelector('head');
    const style = `
        <style>
            ${css}
        </style>
    `;

    
    head.insertAdjacentHTML('beforeend', style);
}

const Action = (css ) => {
   createStyle(css);
   
    return`
        <li class="action"></li>
    `
}

const Item = (css, className) => {
    createStyle(css);
    
    return `
        <li class="item ${className}" onclick="handleClick(event)"></li>
    `;
}

const Slide = (css, content) => {
    return `
        <ul style="${css[0].trim()}">${content}</ul>
    `;
}

const action = Action`
    .action{
        height: calc(var(--line-height) * 4);
        width: calc(var(--line-height) * 4);
        background-color: var(--action-color);
        border-radius: 50%;
        position: absolute;
        left: -4px;
        transition: transform 300ms linear;
    }
    .action.second {
        transform: translateX(215px);
    }

    .action.third{
        transform: translateX(431px);
    }
    
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
    ${showItems(stateItems) + action}
`

