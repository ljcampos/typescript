"use strict";
// class Todo implements ITodo {
//     name: string;
//     description: string;
//     completed: boolean;
//     constructor(name: string, description: string, completed: boolean) {
//         this.name = name;
//         this.description = description;
//         this.completed = completed;        
//     }
// }
var Todo = /** @class */ (function () {
    function Todo(name, description, completed) {
        this.name = name;
        this.description = description;
        this.completed = completed;
    }
    return Todo;
}());
var TodoList = /** @class */ (function () {
    function TodoList() {
    }
    TodoList.prototype.createTodoItem = function (name, description) {
        var newItem = new Todo(name, description, false);
        var totalCount = TodoList.allTodos.push(newItem);
        return totalCount;
    };
    TodoList.prototype.allTodoItems = function () {
        return TodoList.allTodos;
    };
    TodoList.allTodos = new Array();
    return TodoList;
}());
window.onload = function () {
    var task = document.getElementById('todoName');
    var description = document.getElementById('todoDescription');
    document.getElementById('add').addEventListener('click', function () { return toAllTask(task.value, description.value); });
};
function toAllTask(task, description) {
    var todo = new TodoList();
    todo.createTodoItem(task, description);
    var div = document.getElementById('todoList');
    var list = "<dl class='dl-horizontal'>";
    for (var index = 0; index < TodoList.allTodos.length; index++) {
        list = list + " <dt> " + TodoList.allTodos[index].name + ' </dt> <dd>' + TodoList.allTodos[index].description + '</dd>';
    }
    console.log('todos', TodoList.allTodos.length);
    list += "</dl>";
    div.innerHTML = list;
    document.getElementById('todoName').value = '';
    document.getElementById('todoDescription').value = '';
}
//# sourceMappingURL=todo.js.map