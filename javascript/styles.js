const style = `
<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    body{
        background-color:#F8EFBA;

        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #root {
        height: 65vh;
        width: 40vw;
        min-width:768px;
        background-color: #34495e;
        font-family: 'Press Start 2P', cursive;
        text-align: center;
        padding-top: 4em;
        display:flex;
        flex-direction: column; 
        align-items: center;
        border-radius: 15px;
    }

    .wrapper-character{
        width: 80%;
        margin: 0 auto;
        display:flex;
        align-items: center;
        justify-content: space-around;
    }

  
</style>`

const head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', style);