const pathCupHead = "../img/dadinho.png";

const cupHead = Character`
    width: 150px;
    margin: 0 5px;
    ${pathCupHead}
`;

const WrapperCharacter = (...character) => { 

    return `
        <div class = "wrapper-character">  
            ${character.join(' ')}
        </div>
    `;
}

