const fala =
  "Bom dia, alunos! Me chamo Marilia Curie Peixoto, mas podem me chamar de Dra Peixoto, serei a professora de Catemática de vocês. Desejo boas-vindas a Gatec.";

const elemento = docufunction escrever(){
    if (i<fala.length){
        elemento.textContent += fala.charAt(i);
        i++;

        setTimeout(escrever, 30);
    }
}

escrever();ment.getElementById("falaPersona");

let i = 0;


