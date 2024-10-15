const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')


let createToDo = () => {
    if (!input.value.trim()) return alert('напиши что нибудь')
    let div = document.createElement('div')
    let text = document.createElement('h3')
    div.className = 'todo-text'
    div.setAttribute('class', 'block_text')
    text.innerHTML = input.value;
    div.innerHTML = `
        <div class="btns-todo">
            <button class="delete_button">delete</button>
            <button class="edit_button">Edit</button>
        </div>
    `

    let deleteButton = div.querySelector('.delete_button')
    let editButton = div.querySelector('.edit_button')

    deleteButton.addEventListener('click', (e) => {
        div.remove()
    })
    editButton.addEventListener('click', (e) => {
        let newValue = prompt('введите новый значения')
        text.innerHTML = newValue;
    })

    div.append(text)
    todoList.append(div)

    input.value = ''
}

createButton.addEventListener('click', createToDo)

input.addEventListener("keydown" , (e) =>{
    if (e.key === "Enter")createToDo();
});