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

    if(imc <= 18.5) {

       document.getElementById('IMC'). textContent = imc + "Você está abaixo do peso!"
    }
    
    else if((imc > 18.5) && (imc <= 24.9)) {
     
     document.getElementById('IMC').textContent = imc + "Você está no peso ideal!"

   }

   else if((imc > 25) && (imc <= 29.9)) {
     
     document.getElementById('IMC').textContent = imc + "Você está no sobrepeso!"

   }


   else if((imc > 30)) {
     
     document.getElementById('IMC').textContent = imc + "Você está na obesidade"

   }

} 
