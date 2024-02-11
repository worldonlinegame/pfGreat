var friendList = [];

function addFriendToSystem(email,datatime, despcripcion, evento, SelectCell) {
    var newFriend = {
        email: email,
        datatime: datatime,
        despcripcion: despcripcion,
        evento: evento,
        SelectCell: SelectCell,
        petList:[]
      };
      if(email == "" || datatime == "" || despcripcion == "" || evento == ""){
        alert('ERROR ! No se puede guardar si los campos estan vacios, tienes que rellenar todos los campos!');
        return;
      }else{
      console.log(newFriend);
      friendList.push(newFriend);
      localStorageFriendList(friendList);
    }
      
}


//funcion devuelve los eventos

function getFriendList() {
    var storedList = localStorage.getItem("localFriendList");
    if (storedList == null) {
      friendList = [];
    } else {
      friendList = JSON.parse(storedList);
      
    }

    return friendList;
    
  }


function localStorageFriendList(pList) {
    localStorage.setItem("localFriendList", JSON.stringify(pList));
    
  }
  
 /* logica de comentario del evento */


/* funcion buscar id post del evento*/

function findFriend(pemail){
  var friendObj;
  for(var i = 0; i < friendList.length; i ++){
    if(friendList[i].email == pemail){
      friendObj = friendList[i];

    }
  }
  return friendObj;
}

/* funcion añadir comentario seleccionado por id*/

function addPetToFriend(pfriendObj, ppetName, ptype, pgender){
  var newPet = {
    name: ppetName,
    type: ptype,
    gender: pgender
  }
  var index = friendList.indexOf(pfriendObj);
  pfriendObj.petList.push(newPet);

  friendList[index] = pfriendObj;
  localStorageFriendList(friendList);

 }
  
  