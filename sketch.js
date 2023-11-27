//@author: Gabriel Vinicius Da Silva!
var contador;
contador = prompt("Quantas repetições devem ser feitas nesse código?");

var resultado = "";

for (var i = 1; i < contador; i++) {
   // resultado = resultado + "* " + "\n";
        for ( var coluna  = 1; coluna<=i ; coluna++){
                resultado = resultado + "* "
        }
        resultado = resultado + "\n"
}

alert(resultado);
