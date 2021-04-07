function reservaciones(){
    var fecha = document.getElementById("fecha").value;
    var pasajeros = document.getElementById("pasajeros").value;
    var destino = document.getElementById("destino").value;

    var RuserArray = [];

    if(localStorage.getItem("PSUserArray")!==null){
        RuserArray = JSON.parse(localStorage.getItem("PSUserArray"));
    }

    var current_reg = {
        lfecha: fecha,
        lpasajeros: pasajeros,
        ldestino: destino
    };

    RuserArray.push(current_reg);

    localStorage.setItem("PSUserArray", JSON.stringify(RuserArray));

}

function tablita(){
    window.location.href = "tablareservaciones.html"
    var table = getElementById("myTable")
    var Stable = JSON.parse(localStorage.getItem("PSUserArray"))
    alert("llll")
    for(var i = 0; i < Stable.length; i++){
        var row = table.insertRow(1)
        var cell0 = newRow.insertCell(0)
        var cell1 = newRow.insertCell(1)
        var cell2 = newRow.insertCell(2)
        cell0.innerHTML = Stable[i].lfecha
        cell1.innerHTML = Stable[i].lpasajeros
        cell2.innerHTML = Stable[i].ldestino
        alert(Stable[i].lfecha)
        alert(Stable[i].lpasajeros)
        alert(Stable[i].ldestino)
        alert("slsllss")
 
    }

}