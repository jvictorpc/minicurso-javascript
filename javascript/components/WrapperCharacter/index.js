const pathCupHead = "../img/dadinho.png";

const cupHead = Character`
    width: 150px;
    margin: 0 auto;
    ${pathCupHead}
`;

const WrapperCharacter = (...character) => { 

    return `
        <div class = "wrapper-character">  
            ${character[0].trim()}
            ${character[1].trim()}
            ${character[2].trim()}
        </div>
    `;
}

const wrapperCharacter = WrapperCharacter(cupHead, cupHead, cupHead);






console.log(wrapperCharacter);