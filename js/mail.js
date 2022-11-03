//creo un array
const mailsAccepted = ["pippo@gmail.com", "pluto@gmail.com","mari.pieropan@gmail.com", "topolino@hotmail.com"]
console.log( mailsAccepted );

//chiedo all'utente la sua mail
const userMails = prompt("Inserisci la tua mail");
console.log( userMails );

//creo una variabile fuori dal ciclo
let trovata = false;

//scrivo il ciclo
for(let i = 0; i < mailsAccepted.length; i++){
    const emailLista = mailsAccepted[ i ];

    if(emailLista === userMails ){
        trovata = true;
        console.log( emailLista + "" + "è una mail presente nella lista")
    }
}
//se la mail inserita appartiene alla lista stampo nella console 
if(trovata === true){
    console.log(emailLista + "" + "è una mail presente nella lista")
//se la mail inserita non appartiene alla lista mando un allert
}else{
    alert("La mail inserita non appartiene alla lista, riprovare!")

}




