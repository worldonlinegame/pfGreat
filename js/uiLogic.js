document.querySelector('#btnSaveFriend').addEventListener('click', seveFriend);
document.querySelector('#btnAssignPet').addEventListener('click', addPet);
const divContainer = document.querySelector('#whatsapp');

drawFriendsTable();
drawPetsTable();


let select = document.querySelector('#select');
let isClicked = true;

select.checked = false;

let showDiv  = function () {
    if (isClicked || !select.checked) {
        divContainer.style.display = 'block';
        isClicked = false;
   
    } else {
        divContainer.style.display = 'none';
        isClicked = true;
        location = window.location.href = "index.html";
     
    }
    
}

function seveFriend() {

    var sEmail = document.querySelector('#email').value,
     sDatatime = document.querySelector('#datatime').value,  //data time
     sDespcripcion = document.querySelector('#despcripcion').value,
     sEvento = document.querySelector('#evento').value;

 var datos = addFriendToSystem(sEmail, sDatatime, sDespcripcion, sEvento);
  if(!datos){  
    
    return true;

  }else{
      drawFriendsTable(datos)
      }
  }

  //imprimer eventos
  function drawFriendsTable(){
    
    var list = getFriendList(),
        tbody = document.querySelector('#friendsTable tbody');
    
    tbody.innerHTML = '';
    
    for (var i = 0; i < list.length; i++) {

      var row = tbody.insertRow(i),
          EmailCell = row.insertCell(0),
          DatatimeCell = row.insertCell(1),            // este datatime
          DespcripcionCell = row.insertCell(2),
          EventoCell = row.insertCell(3);
          selectCell = row.insertCell(4);
      
      EmailCell.innerHTML = list[i].email;
      DatatimeCell.innerHTML = list[i].datatime;       // esta datatime
      DespcripcionCell.innerHTML = list[i].despcripcion;
      EventoCell.innerHTML = list[i].evento;


      var inputSelect = document.createElement('input');
      inputSelect.type = 'radio';
      inputSelect.value = list[i].email;
      inputSelect.name = 'rbtFriend';
      selectCell.appendChild(inputSelect);

      tbody.appendChild(row);
    }
   
  }

  // funcion de añadir pet "el comentario del post evento"

  function addPet(){
    var sName = document.querySelector('#txtPetName').value,
        sType = document.querySelector('#txtAnimal').value,  
        sGender = document.querySelector('#txtGender').value,
        sOwnerId = document.querySelector('#friendsTable tbody input[type=radio]:checked').value;

      if(sName == '' || sType == '' || sGender == ''){
        alert('Error!, tienes que rellenar todos los campos, para enviarle un comentario!')
        return;
      }else{

        var friendObj = findFriend(sOwnerId);

      addPetToFriend(friendObj, sName,sType,sGender);
      drawPetsTable();
      }

  }

  // dibujamos la tabla de los post de eventos pets

  function drawPetsTable(){
    var list = getFriendList(),
        tbody = document.querySelector('#petsTable tbody');
    tbody.innerHTML = '';
    /*Ciclo para recorrer la lista de amigos*/
    for(var i = 0; i < list.length; i++){
      /*Ciclo que recorrer la lista de mascotas de cada amigo */
      for(var j = 0; j < list[i].petList.length; j++){
        var row = tbody.insertRow(j),
        ownerCell = row.insertCell(0),
        nameCell = row.insertCell(1), 
        typeCell = row.insertCell(2),
        genderCell = row.insertCell(3);

        ownerCell.innerHTML = list[i].email;
        nameCell.innerHTML = list[i].petList[j].name;
        typeCell.innerHTML = list[i].petList[j].type;
        genderCell.innerHTML = list[i].petList[j].gender;

      }
    }

  }