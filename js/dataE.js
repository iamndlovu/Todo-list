//localStorage.clear();
let _todo_app_data;


class Todo {
	constructor(title, description='', status="todo", created, completed) {
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

class MIT extends Todo {
	constructor(title, description='', status="todo", created=null, completed=null) {
		super(title, description, status, created, completed);
		this._mit = true;
	}//constructor end
	
	get isMIT() {
		return this._mit;
	}
}


function init() {
  if(!localStorage.getItem('_todo_app_data')) {
    _todo_app_data = {
    	todos: [],
		doing: [],
		done: [],
		mits: [],
		current: 'home'
    };
  }
  else {
		_todo_app_data = JSON.parse(localStorage.getItem('_todo_app_data'));

		let nTodos = [];
		for(let todo of _todo_app_data.todos) {
		
			todo = new Todo(todo._title,todo._description, todo._status, todo._created, todo._completed);
			nTodos.push(todo);
		}
		let nMITs = [];
		for(let mit of _todo_app_data.mits) {
		
			mit = new MIT(mit._title,mit._description, mit._status, mit._created, mit._completed);
			nMITs.push(mit);
		}
		_todo_app_data.todos = nTodos;
		_todo_app_data.mits = nMITs;*/
  }

//	save();
	//display();
 alert(0);
}
/*
function save() {
  localStorage.setItem('_todo_app_data', JSON.stringify(_todo_app_data));
	localStorage.setItem('_todo_app_data_', JSON.stringify([_todo_app_data]));
}

*/