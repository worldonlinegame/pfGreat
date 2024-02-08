var friendList = [];

function addFriendToSystem(email,datatime, despcripcion, evento, SelectCell) {
    var newFriend = {
        email: email,
        datatime: datatime,
        despcripcion: despcripcion,
        evento: evento,
        SelectCell: SelectCell
      };
      console.log(newFriend);
      friendList.push(newFriend);
      localStorageFriendList(friendList);
}

//funcion devuelve eventos

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