var a;
var b;
var m;
var uitkomst;
var suitkomst;

function Bereken() {
    a = document.getElementById("waarde1").value;
    m = document.getElementById("methode").value;
    
    if (a != "") {
        
        if (m == "_") {
            alert ("Geen rekenmethode geselecteerd");
        }
        if (m == "+") {
            b = prompt ("Voer een secundaire waarde in");
            if (b != "") {
                uitkomst = +a + +b;
                document.getElementById("uitkomst").value = uitkomst;
                document.getElementById("uitwerking").value = a + " + " + b + " = " + uitkomst;
            }
            else {
                alert ("Geen geldige waarde ingevoerd");
            }
        }
        if (m == "-") {
            b = prompt ("Voer een secundaire waarde in");
            if (b != "") {
                uitkomst = +a - +b;
                document.getElementById("uitkomst").value = uitkomst;
                document.getElementById("uitwerking").value = a + " - " + b + " = " + uitkomst;
            }
            else {
                alert ("Geen geldige waarde ingevoerd");
            }
        }
        if (m == "x") {
            b = prompt ("Voer een secundaire waarde in");
            if (b != "") {
                uitkomst = +a * +b;
                document.getElementById("uitkomst").value = uitkomst;
                document.getElementById("uitwerking").value = a + " x " + b + " = " + uitkomst;
            }
            else {
                alert ("Geen geldige waarde ingevoerd");
            }
        }
        if (m == "/") {
            b = prompt ("Voer een secundaire waarde in");
            if (b != "") {
                uitkomst = +a / +b;
                document.getElementById("uitkomst").value = uitkomst;
                document.getElementById("uitwerking").value = a + " / " + b + " = " + uitkomst;
            }
            else {
                alert ("Geen geldige waarde ingevoerd");
            }
        }
        if (m == "^") {
            b = prompt ("Voer een secundaire waarde in");
            if (b != "") {
                uitkomst = Math.pow(+a, +b);
                document.getElementById("uitkomst").value = uitkomst;
                document.getElementById("uitwerking").value = a + "^" + b + " = " + uitkomst;
            }
            else {
                alert ("Geen geldige waarde ingevoerd");
            }
        }
        if (m == "√") {
            uitkomst = Math.sqrt(+a);
            suitkomst = uitkomst.toFixed(4)
            document.getElementById("uitkomst").value = uitkomst;
            document.getElementById("uitwerking").value = "√" + a + " = " + suitkomst + ", want " + suitkomst + " x " + suitkomst + " = " + a;
        }
        if (m == "%") {
            b = prompt ("Voer een secundaire waarde in");
            if (b != "") {
                uitkomst = (+b / +a) * 100;
                document.getElementById("uitkomst").value = uitkomst;
                document.getElementById("uitwerking").value = b + " / " + a + " x 100 = " + uitkomst + "%";
            }
            else {
                alert ("Geen geldige waarde ingevoerd");
            }
        }
    }
    else {
        alert ("Geen geldige waarde ingevoerd");
    }
}