const divContainer = document.querySelector('#whatsapp');
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
