document.getElementById("botaoenviar").addEventListener("click", validaformulario)

function validaformulario() {
   if (document.getElementById ("nome").value != "" &&
       document.getElementById ("email").value != "" &&
       document.getElementById (telefone).value != "" ){
      alert("Prontinho!Agora é só aguardar mais novidades por email")
      
   }else{
      alert("Por favor, preencha os campos em branco.")
      }
   }

