`use strict`


const btnConferma = document.querySelector(".conferma");
const fieldContainer = document.querySelector("[id=field-container]");
let numEsplosivi=[];

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

    numEsplosivi = randomNumber(totblocchi);
    
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
    div.addEventListener("click", casellaClick);
    
    fieldContainer.append(div);

    return div
}


//generazione campo

function fieldGen (numBlocchi) {
    const campo = [];

    for (let i = 0; i < numBlocchi; i++) {

      const blocco = blockGen(numBlocchi);

      blocco.dataset.numero = i+1;

      campo.push(blocco);
    }
  
    return campo;
  }


//dichiarazione caselle

function casellaClick(){
    const scelta=( this.dataset.numero)

        console.log(scelta)
    
    for(let i= 1; i <= numEsplosivi.length;i++){
 

        if(numEsplosivi[i] == scelta){
            console.log("ouch")
            console.log(numEsplosivi[i]);
            this.classList.add("bg-danger");
            this.innerHTML = `<i class="fa-solid fa-biohazard fs-1"></i>`
            return
        }
        else{ 
            console.log("bene");
            this.classList.add("bg-success");
            this.innerHTML = `<i class="fa-solid fa-dragon fs-2"></i>`;
        }
    }
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
