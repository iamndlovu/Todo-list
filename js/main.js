window.addEventListener('load', init);
document.querySelector('.add').addEventListener('submit', formSubmit);
document.querySelector('.addMIT').addEventListener('submit', mitformSubmit);
document.querySelector('nav').addEventListener('click', navClick);
document.querySelector('.copy').addEventListener('click', toggleEncrypt);



function display() {
	for(let todo of _todo_app_data.todos) {
		
		let todoItem = buildTodoItem(todo);
		mountTodo(todoItem);
//alert('Todo');
	}

	for(let mit of _todo_app_data.mits)  {
		
let mitItem = buildTodoItem(mit);
		mountMIT(mitItem);	
//alert('MIT');
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

	if(todo.status.toUpperCase() == 'DONE') container.classList.add('done');

	container.title = todo.title;
	if(todo.isMIT) {
		title.textContent = encrypt(todo.title);
	description.textContent = encrypt(todo.description);
	} else {
		title.textContent = todo.title;
		description.textContent = todo.description;
	}
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

function mountMIT(mitItem) {
	document.querySelector('.mit-list').appendChild(mitItem);
	mitItem.addEventListener('click', todoClick);
}

function todoClick(e) {
	el = e.target;
	if(el.classList.contains('check')) 
			toggleStatus(el.parentElement);	
	else if (el.classList.contains('deleteBtn'))
		deleteTodo(el.parentElement);
	else toggleDisplay(el.parentElement);
}

function toggleStatus(el) {
	for(let todo of _todo_app_data.todos) {
		if (todo.title == el.title) {
			if(todo.status.toUpperCase() == 'TODO') todo.setStatus('done');
				
			else todo.setStatus('todo');
		}
	}
	toggleCancel(el);
	save();
//alert(5);
}

function toggleCancel(el) {

	if(!el.classList.contains('done'))
		el.classList.add('done');
	else el.classList.remove('done');
}

function deleteTodo(el) {
	if(!confirm(`Are you sure you want to delete ${el.title}`)) return;
	let newTodos = [],
	    newMITs = [];
	for(let todo of _todo_app_data.todos) {
		if(!(todo.title == el.title))
			newTodos.push(todo);
	}

	for(let mit of _todo_app_data.mits) {
		if(!(mit.title == el.title))
			newMITs.push(mit);
	}

	el.parentElement.removeChild(el);
	_todo_app_data.todos = newTodos;
	_todo_app_data.mits = newMITs;
	save();
}

function toggleDisplay(el) {
	if (el.classList.contains('expand'))
		el.classList.remove('expand');
	else el.classList.add('expand');
}

function formSubmit(e) {
	e.preventDefault();
	const input = document.querySelector('.newTodo'); 
	      descriptionInput = document.querySelector('.tdescription');
	      title = input.value,
	      description = descriptionInput.value;
	addTodo(title, description);
	input.value='';
	descriptionInput.value='';
}

function addTodo(title, description='_ _') {
	const newTodo = new Todo(title, description);
	_todo_app_data.todos.push(newTodo);
	const newEl = buildTodoItem(newTodo);
	mountTodo(newEl);
	save();
}

function mitformSubmit(e) {
	e.preventDefault();
	const input = document.querySelector('.newMIT'); 
	      descriptionInput = document.querySelector('.MITdescription');
	      title = input.value,
	      description = descriptionInput.value;
	addMIT(title, description);
	input.value='';
	descriptionInput.value='';
}

function addMIT(title, description='_ _') {
	const newMIT = new MIT(title, description);
	_todo_app_data.mits.push(newMIT);
	const newEl = buildTodoItem(newMIT);
	mountMIT(newEl);
	save();
}

function navClick(e) {
	const id = e.target.id;
	if(id == 'home' || id == 'mits')
		toggleView(id);
	return;
}

function toggleView(state) {
	document.getElementById(state).className = 'active text-muted';
	document.querySelector(`.${state}`).classList.add('show');

	if(state == 'home') {
		document.getElementById('mits').className = 'text-primary';
		document.querySelector('.mits').classList.remove('show');
	} else {
		document.getElementById('home').className = 'text-primary';
		document.querySelector('.home').classList.remove('show');
	}

	_todo_app_data.current = state;
	save();
}

function toggleEncrypt() {
	const titles = document.querySelectorAll('.mit-list .title');
	const descriptions = document.querySelectorAll('.mit-list .description');

	if(mitState == 'encrypted') {
		titles.forEach(title => title.textContent = decrypt(title.textContent));
		descriptions.forEach(description => description.textContent = decrypt(description.textContent));
		mitState = 'decrypted';
	}
	else if(mitState == 'decrypted') {
		titles.forEach(title => title.textContent = encrypt(title.textContent));
		descriptions.forEach(description => description.textContent = encrypt(description.textContent));
		mitState = 'encrypted';
	}
	return;
}