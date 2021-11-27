const jsonEmployees = ''



fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => {
    json.forEach(e => {
        const selector = document.getElementById('mainSelect')
        const option = document.createElement('option')
        option.value = e.id
        option.text = e.name
        selector.appendChild(option)
    });
})
.catch(error => console.log(error))

function GetEmployeeId(){
    var e = document.getElementById("mainSelect");
    var id = e.options[e.selectedIndex].value;
    fetch('https://jsonplaceholder.typicode.com/users/'+id)
    .then(response => response.json())
    .then(json => {
        Limpiar()
        const name = document.getElementById('nombre')
        const list = document.getElementById('lista')
        name.innerText = json.name
        const item = document.createElement('li')
        item.setAttribute('class', 'list-group-item')
        item.textContent = json.username
        list.appendChild(item)
        const item2 = document.createElement('li')
        item2.setAttribute('class', 'list-group-item')
        item2.textContent = json.email
        list.appendChild(item2)
        const item3 = document.createElement('li')
        item3.setAttribute('class', 'list-group-item')
        item3.textContent = json.address.street
        list.appendChild(item3)

    })
    .catch(error => console.log(error))
}

function Limpiar(){
    const list = document.getElementById('lista')
    list.innerHTML = '';
}
