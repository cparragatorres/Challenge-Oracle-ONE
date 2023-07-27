const ingresoTexto = document.getElementById("ingresoTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const mensajeFinal = document.getElementById("mensajeFinal");
const botonCopiar = document.getElementById("botonCopiar");

const munheco = document.getElementById("munheco");
const rightInfo = document.getElementById("rightInfo");
const divRight = document.getElementById("divRight");

// e - enter
// o - ober
// i - imes
// a - ai
// u - ufat

let reemplazar = [
  ["e","enter"],
  ["o","ober"],
  ["i","imes"],
  ["a","ai"],
  ["u","ufat"]
]

const mensajeEncriptado = (nuevoMensaje) =>{
  mensajeFinal.innerHTML = nuevoMensaje;

  munheco.classList.add("oculto");

  ingresoTexto.value = "";
  rightInfo.style.display = "none";
  botonCopiar.style.display = "block";
  divRight.classList.add("ajustar");
  mensajeFinal.classList.add("ajustar");
};

const reset = () =>{
  mensajeFinal.innerHTML = "";

  munheco.classList.remove("oculto");
  rightInfo.style.display = "block";
  botonCopiar.style.display = "none";
  divRight.classList.remove("ajustar");
  mensajeFinal.classList.remove("ajustar");
  ingresoTexto.focus();
}

botonEncriptar.addEventListener("click", () => {
  const texto = ingresoTexto.value.toLowerCase();
  if(texto != ""){
    function encriptar(newText){
      for(let i = 0; i < reemplazar.length; i++){
        if(newText.includes(reemplazar[i][0])){
          newText = newText.replaceAll(
            reemplazar[i][0], reemplazar[i][1]
            )
        }
      }
      return newText;
    }
  }else{
    swal("Ooops!","Ingrese texto a encriptar", "warning");
    reset();
  }  

  // const textoEncriptado = encriptar(texto);
  mensajeEncriptado(encriptar(texto));
  
});

botonDesencriptar.addEventListener("click", () => {
  const texto = ingresoTexto.value.toLowerCase();
  if (texto !="") {
    function desencriptar(newText){
      for(let i = 0; i < reemplazar.length; i++){
        if(newText.includes(reemplazar[i][1])){
          newText = newText.replaceAll(
            reemplazar[i][1], reemplazar[i][0]
            )
        }
      }
      return newText;
    }
  }else{
    swal("Ooops!","Ingrese texto a desencriptar", "warning");
    reset();
  }
  
  mensajeEncriptado(desencriptar(texto));
});

botonCopiar.addEventListener("click", () =>{
  let texto = mensajeFinal;
  // navigator.clipboard.writeText(texto.value);
  texto.select();
  document.execCommand("copy");
  swal("Copied!","Debes ingresar un texto", "success");
  reset();
});