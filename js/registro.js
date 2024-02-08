const registroform = document.querySelector("#registroform")
registroform.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    // creamos la base de datos en la store del navegador en un array

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)
    if(isUserRegistered){
        return alert('El usuario ya existe!')
    }
    
    Users.push({name: name, email: email, password: password})
    localStorage.setItem('users',JSON.stringify(Users))
    alert('Se ha registrado satisfactoriamente!')
    window.location.href = 'login.html'
    
})