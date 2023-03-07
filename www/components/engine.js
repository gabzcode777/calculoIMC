function olamundo() {
        alert('Olá mundo');
   }
   
   function calcularIMC(){
    var peso, altura, imc

    peso = document.getElementById ('peso').value
    altura = document.getElementById ('altura').value
   
    imc = peso /  ( altura * altura ) 
    document.getElementById("IMC").textContent = imc
    alert(imc)

   }