const todosNode = document.querySelector('.todo__list');
const inputNode = document.querySelector('.todo__input');
const addBtn = document.querySelector('.todo__btn_confirm');

let todos = [];

function addTodo(text) {
    const todo = {
        text,
        done: false,
        id: `${Math.random()}`
    }

    todos.push(todo);
}

function deleteTodo(id) {
    todos.forEach(todo => {
        if(todo.id === id) {
            todo.done = true;
        }
    })
}

function render() {
    let html = '';
    
    todos.forEach(todo => {
        if(todo.done) {
            return;
        };

        html += `
            <li class='todo__input_text'>
            ${todo.text}
            <button data-id='${todo.id}'>Complete</button>
            </li>
        `;
    })

    todosNode.innerHTML = html;
}

addBtn.addEventListener("click", () => {
    const text = inputNode.value;

    addTodo(text);

    render();
});

todosNode.addEventListener("click", (event) => {
    if(event.target.tagName !== 'BUTTON') {
        return;
    }

    const id = event.target.dataset.id;

    deleteTodo(id);

    render();
})