(function($scope){
    var app = angular.module('todoApp',[]);
    
    app.controller('todoController', function(){
        this.todoList = todos;
        this.totalTodos = function(){
            return this.todoList.length;    
        };
        this.formTodoText = '';
        this.addTodo = function(){
            var newTodo = { text: this.formTodoText, done: false};
            this.todoList.push(newTodo);
            this.formTodoText = '';
            //console.log("addTodo button is pressed"); 
        };
        
        this.clearCompleted = function(){
            console.log("clearCompleted button is pressed");
            this.todoList = _.filter(this.todoList, function(todo){
                return !todo.done;    
            });
        };
                
        this.toggleVarOnEnter = function(event, inputVar){
            if(event.keyCode === 13){
                inputVar = !inputVar;
                console.log("entered!");
                return inputVar;
            }
        };
    });
    
    var todos = [
        { text: "learn angular", done: false },
        { text: "eat lunch", done: false },
        { text: "drink coffee", done: false},
    ];
    
    
})();