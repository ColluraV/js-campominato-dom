`use strict`


const btnConferma = document.querySelector(".conferma");
const fieldContainer = document.querySelector("[id=field-container]");

//selezione difficoltà
btnConferma.addEventListener("click",function(){
   fieldContainer.innerHTML="";
   
    let totblocchi = 0;

    const lvlSelect = document.querySelector("#difficolta").value;
    console.log (lvlSelect)

        if(lvlSelect==="facile"){
            totblocchi= 100 }
         
        if(lvlSelect==="medio"){
            totblocchi= 81 }
        
        if(lvlSelect==="difficile"){
            totblocchi= 49 }

    console.log(totblocchi);

    randomNumber(totblocchi);

    const campoPieno = fieldGen (totblocchi);



    for (let i = 0; i<campoPieno.length; i++){
        fieldContainer.append(campoPieno[i]);
        div.addEventListener ("click", casellaClick);

    }


    
    console.log(campoPieno);
})




  //generazione singolo blocco

/**
 * 
 * @param {*} totBlocchi 
 * @param {number} numBlocchi 
 * @returns 
 */
function blockGen (contenuto, numBlocchi){
    const div = document.createElement("div");
    const blocchiPerRiga = Math.sqrt(numBlocchi);
    div.classList.add("quadrato");
    div.style.flexBasis =`calc( 100% / ${blocchiPerRiga})`
    console.log(blocchiPerRiga);

    //inserimento testo interno al div da sostituire con ciò che più aggrada
    div.innerHTML= contenuto;

    return div;
}


//generazione campo

function fieldGen (numBlocchi) {
    const campo = [];
  
    for (let i = 0; i < numBlocchi; i++) {
      
      const blocco = blockGen("blocco " + (i+1) , numBlocchi);
  
      campo.push(blocco);

    }
    return campo;
  }


//dichiarazione caselle
function casellaClick(){

    if()
    this.classList.toggle("")
}






//generazione numero random
/**
 * @param {number} maxVal 
 */
  function randomNumber(maxVal) {   /*da verificare che prenda il valore numerico di maxVal*/
    let numbers=[];     
    while (numbers.length < 16){
        const random = Math.floor(Math.random() * maxVal) + 1;
        if (numbers.indexOf(random) === -1){ 
            numbers.push(random);
        }
    }
    console.log("numeri esplosivi: " + numbers)
    return numbers;
}
