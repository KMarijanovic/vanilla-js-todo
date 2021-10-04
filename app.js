//selectors
const mainForm = document.querySelector('form');
const mainUl = document.querySelector('ul');
const clearAll = document.getElementById('clearAll');

//events
mainForm.addEventListener('submit', handleSubmitForm);
mainUl.addEventListener('click', handleClickDeleteOrCheck);
clearAll.addEventListener('click', handleClearAll);

//3 main functions
function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
        addTodo(input.value);
    input.value = '';
}

function handleClickDeleteOrCheck(e) {
    if (e.target.name == 'checkButton')
        checkTodo(e);

    if (e.target.name == 'deleteButton')
        deleteTodo(e);
}

function handleClearAll(e) {
    document.querySelector('ul').innerHTML = '';
}

//helper functions
function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `
    <span class="todo-item">${todo}</span>
    <button name="checkButton"><i class="fa fa-check-square"></i></button>
    <button name="deleteButton"><i class="fa fa-trash"></i></button>
    `;

    li.classList.add('todo-list-item');
    ul.appendChild(li);
}

function checkTodo(e) {
    let item = e.target.parentNode;
    if (item.style.textDecoration == 'line-through')
        item.style.textDecoration = 'none';
    else
        item.style.textDecoration = 'line-through';

}

function deleteTodo(e) {
    let item = e.target.parentNode;

    item.addEventListener('transitionend', function () {
        item.remove()
    })

    item.classList.add('todo-list-item-fall');
}
