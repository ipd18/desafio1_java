function calcularTotal(){
    var precio = 90990;
    var cantidad = document.querySelector("#cantidad").value;
    var color = document.querySelector("#color").value;
    document.querySelector("#resultadoFinal").innerHTML = cantidad * precio;
    document.querySelector("#cantidadFinal").innerHTML = cantidad   ;
    document.querySelector("#colorFinal").style.backgroundColor = color;
   



    const color1 = document.getElementById("color");
    
color1.addEventListener("change", (event) => {
  colorElegido = event.target.value;

  const showColor = document.getElementById("showColor");

  showColor.innerHTML = colorElegido;
  
});

}




