function digitos(){

    var numero = prompt("Introduce un numero menos a 1000:");

    if ((numero > 0) && (numero < 1000)){
        
        for (var i = 0; i < numero.length; i++){
            alert(numero.charAt(i));
        }
    } else {
        alert("Numero no valido")
    }
}