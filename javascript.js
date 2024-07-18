function calc(op){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    //var output = num1 + num2;

    //document.getElementById("output").value = output;

    var output = 0;

    switch (op){
        case '+':
            output = num1 + num2;
            break;
        case '-':
            output = num1 - num2;
            break;
        case '*':
            output = num1 * num2;
            break;
        case '/':
            output = num1 / num2;
            break;
    }

    document.getElementById("output").value = output;

    //document.getElementById("history").innerHTML += "<div>" + num1 + " " + op + " " + num2 + " " + "=" + output + "</div>";

       var newHistory = "<div>" + num1 + "" + op + "" + num2 + "" + "=" + output + "</div>";

    document.getElementById("history").innerHTML = newHistory.getElementById("history").innerHTML; 
}