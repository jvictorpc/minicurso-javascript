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
        background-color: #3B3B98;
        font-family: 'Press Start 2P', cursive;
        text-align: center;
        padding-top: 4em;

    }
</style>`

const head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', style);