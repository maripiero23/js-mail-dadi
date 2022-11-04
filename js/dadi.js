let numberPc;

let numberPlayer;

    


const btnEl = document.getElementById("rollbtn")

btnEl.addEventListener("click", function(){


    numberPc = Math.floor(Math.random()* 6 + 1);

    numberPlayer = Math.floor(Math.random()* 6 + 1);

    const pclabel = document.getElementById("pc");

    pclabel.innerHTML = numberPc;

    const playerlabel = document.getElementById("Player");

    playerlabel.innerHTML = numberPlayer;

    


    if( numberPc > numberPlayer ){
        console.log("Il pc ha vinto");
    
    } else if( numberPc === numberPlayer){
        console.log("Pareggio");
    
    } else{
        console.log("Il Player ha vinto!!!");
    
    }
})

    

    