window.addEventListener('load', init);
document.querySelector('.add').addEventListener('submit', formSubmit);

function todoClick(e) {
	el = e.target;
	if(el.classList.contains('check')) {
			toggleStatus(el.parentElement);
		}
	else if (el.classList.contains('deleteBtn'))
		deleteTodo(el.parentElement);
	else toggleDisplay(el.parentElement) .classList.add('expand');
}

function toggleDisplay(el) {
	if (el.classList.contains('expand'))
		el.classList.remove('expand');
	else el.classList.add('expand');
}

function toggleStatus(el) {
	for(let todo of _todo_app_data_[0].todos) {
		if (todo.title == el.title) {
			if(todo.status.toUpperCase() == 'TODO') todo.setStatus('done');
			else todo.setStatus('todo');
		}
	}
	display();
	save();
}

function formSubmit(e) {
	e.preventDefault();
	const input = document.querySelector('.newTodo'); 
	const descriptionInput = document.querySelector('.description');
	const title = input.value,
	      description = descriptionInput.value;
	addTodo(title, description);
	input.value='';
	descriptionInput.value='';
}

function addTodo(title, description='_ _') {
	const newTodo = new Todo(title, description);
	_todo_app_data_[0].todos.push(newTodo);
	const newEl = buildTodoItem(newTodo);
	mountTodo(newEl);
	save();
}


function deleteTodo(el) {
	if(!confirm(`Are you sure you want to delete ${el.title}`)) return;
	let newTodos = [];
	for(let todo of _todo_app_data_[0].todos) {
		if(!(todo.title == el.title))
			newTodos.push(todo);
	}
	el.parentElement.removeChild(el);
	_todo_app_data_[0].todos = newTodos;
	save();
}


function display() {
	document.querySelector('.todo-list').textContent = '';
	//list heading
	const container = document.createElement('li');
	const listHeading = document.createElement('h3');
	listHeading.textContent = 'Todo List';
	container. appendChild(listHeading);
	mountTodo(container);

	for(let todo of _todo_app_data_[0].todos) {
		
		let todoItem = buildTodoItem(todo);
		mountTodo(todoItem);
	}
}

function buildTodoItem(todo) {
	const container = document.createElement('li');
	const check = document.createElement('div');
	const deleteBtn = document.createElement('div');
	const title = document.createElement('h5');
	const description = document.createElement('p');
	const created = document.createElement('div');
	const line1 = document.createElement('div');
	const line2 = document.createElement('div');

	container.className = 'todoItem';
	check.className = 'check';
	line1.className = 'line line1';
	line2.className = 'line line2';
	deleteBtn.className = 'deleteBtn btn-danger';
	title.className = 'title';
	description.className = 'description';
	created.className = 'created';

	if(todo.status.toUpperCase() == 'DONE'){
		title.classList.add('text-muted');
		description.classList.add('text-muted');
		created.classList.add('text-muted');
		
		title.style.textDecoration = 'line-through';
		description.style.textDecoration = 'line-through';
		created.style.textDecoration = 'line-through';
		line1.style.background = '#00333F';
		line2.style.background = '#00333F';

	}

	title.textContent = todo.title;
	description.textContent = todo.description;
	container.title = todo.title;
	created.textContent = `created: ${todo.created}`;
	deleteBtn.textContent = 'X';

	check.appendChild(line1);
	check.appendChild(line2);
	container.appendChild(check);
	container.appendChild(title);
	container.appendChild(description);
	container.appendChild(created);
	container.appendChild(deleteBtn);

	return container;
}

function mountTodo(todoItem) {
	document.querySelector('.todo-list').appendChild(todoItem);
	todoItem.addEventListener('click', todoClick);
}

