//localStorage.clear();
let _todo_app_data_;



class Todo {
	constructor(title, description='', status="todo", mit="false", created, completed) {
		this._title = title;
		this._description = description;
		this._status = status;
		this._mit = mit;
		this._created = created?new Date(created):new Date();
		this._completed = completed?new Date(completed):null;
	}//constructor end
	get title() {
		return this._title;
	}

	get description() {
		return this._description;
	}

	get status() {
		return this._status;
	}

	get isMIT() {
		return this._mit;
	}

	get created() {
		return this._created.toDateString();
	}

	get completed() {
		return this._completed ? this._completed.toDateString() : null;
	}

	setCompleted(date) {
		this._completed = date;
	}

	setStatus(status) {
		this._status = status;
	}
}


function init() {
  if(!localStorage.getItem('_todo_app_data_')) {
    _todo_app_data_ = [{
    	todos: [],
		doing: [],
		done: [],
		mits: []
    }];
  }
  else {
		_todo_app_data_ = JSON.parse(localStorage.getItem('_todo_app_data_'));

		let nTodos = [];
		for(let todo of _todo_app_data_[0].todos) {
		
			todo = new Todo(todo._title,todo._description, todo._status, todo._mit, todo._created, todo._completed);
			nTodos.push(todo);
		}
		_todo_app_data_[0].todos = nTodos;
  }

	save();
	display();
}

function save() {
  localStorage.setItem('_todo_app_data_', JSON.stringify(_todo_app_data_));
	localStorage.setItem('_todo_app_data', JSON.stringify(_todo_app_data_[0]));
}

