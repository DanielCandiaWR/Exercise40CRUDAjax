/**
 * 
 */
var tableDogs = document.getElementById("tableDogs");

function giveDataDogs() {
    //Create the XHR object
    var xhttp = new XMLHttpRequest();

    //Process to know if the status is ready to use
    //Configure the action of the response
    xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                displayData(this.responseText);
            }
            console.log(this.readyState);
        }
        //GET es usado al traer datos, POST para enviar datos
    xhttp.open("GET", "perros.json", true);
    //Go to and give me the data
    xhttp.send();
}

function displayData(data) {
    var listaPerros = JSON.parse(data);
    for (var i = 0; i < listaPerros.length; i++) {
        var perro = listaPerros[i];
        createRows(perro);
    }
}

function createRows(perro) {
    var tbody = tableDogs.tBodies[0];

    //Create rows
    var row = document.createElement("tr");


    var tdName = document.createElement("td");
    var tdAge = document.createElement("td");
    var tdWeigth = document.createElement("td");
    var tdIsAlive = document.createElement("td");
    var tdOwner = document.createElement("td");
    var tdOwnerAge = document.createElement("td");
    var tdOwnerAddress = document.createElement("td");
    var tdCares = document.createElement("td");

    tdName.innerText = perro.nombre;
    tdAge.innerText = perro.edad;
    tdWeigth.innerText = perro.peso;
    tdIsAlive.innerText = perro.estaVivo;
    tdOwner.innerText = perro.propietario.nombre;
    tdOwnerAge.innerText = perro.propietario.edad;
    tdOwnerAddress.innerText = perro.propietario.direccion;
    tdCares.innerText = perro.cuidados[0];

    //Add celdas to the table
    row.appendChild(tdName);
    row.appendChild(tdAge);
    row.appendChild(tdWeigth);
    row.appendChild(tdIsAlive);
    row.appendChild(tdOwner);
    row.appendChild(tdOwnerAge);
    row.appendChild(tdOwnerAddress);
    row.appendChild(tdCares);

    tbody.appendChild(row);
}

document.getElementById("click").addEventListener("click", function() {
    giveDataDogs();
})