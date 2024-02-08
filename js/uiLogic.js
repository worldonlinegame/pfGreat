document.querySelector('#btnSaveFriend').addEventListener('click', seveFriend);
 
  drawFriendsTable();

  function seveFriend() {
    var sEmail = document.querySelector('#email').value,
     sDatatime = document.querySelector('#datatime').value,
     sDespcripcion = document.querySelector('#despcripcion').value,
     sEvento = document.querySelector('#evento').value;
  
    addFriendToSystem(sEmail, sDatatime, sDespcripcion, sEvento);
    drawFriendsTable();
  
  }

  //imprimer eventos
  function drawFriendsTable(){
    var list = getFriendList(),
        tbody = document.querySelector('#friendsTable tbody');
    
    tbody.innerHTML = '';

    for (var i = 0; i < list.length; i++) {

      var row = tbody.insertRow(i),
          EmailCell = row.insertCell(0),
          DatatimeCell = row.insertCell(1),
          DespcripcionCell = row.insertCell(2),
          EventoCell = row.insertCell(3);
          selectCell = row.insertCell(4);
      
      EmailCell.innerHTML = list[i].email;
      DatatimeCell.innerHTML = list[i].datatime;
      DespcripcionCell.innerHTML = list[i].despcripcion;
      EventoCell.innerHTML = list[i].evento;


      var inputSelect = document.createElement('input');
      inputSelect.type = 'radio';
      inputSelect.value = list[i].email;
      inputSelect.name = 'select';
      selectCell.appendChild(inputSelect);

      tbody.appendChild(row);
    }
  }