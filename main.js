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

    fieldGen (totblocchi)

    

})




  //generazione singolo blocco

/**
 * 
 * @param {number} totBlocchi 
 * @param {number} numBlocchi 

 */
function blockGen (totBlocchi){
    const div = document.createElement("div");
    const blocchiPerRiga = Math.sqrt(totBlocchi);
    div.classList.add("quadrato");
    div.style.flexBasis =`calc( 100% / ${blocchiPerRiga})`
    console.log(blocchiPerRiga);

 
    
    fieldContainer.append(div);
}


//generazione campo

function fieldGen (numBlocchi) {
    const campo = [];

    for (let i = 0; i < numBlocchi; i++) {

      const blocco = blockGen(numBlocchi);

      blocco.dataset.numero = i.toString;
      /*campo.addEventListener("click", casellaClick);*/
      campo.push(blocco);
    }

    return campo;
  }


//dichiarazione caselle
function casellaClick(){
    
    console.log(dataset.numero)

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
