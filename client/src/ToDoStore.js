class TodoStore {


    constructor() {
        this.todos = [];
        console.log('init TODO store')
    }

    get completedTodosCount() {
        console.log('get completed todos');
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }


    report() {
        console.log('report')
        if (this.todos.length === 0)
            return "<none>";

        return `Next todo: "${this.todos[0].task}". ` +
            `Progress: ${this.completedTodosCount}/${this.todos.length}` +
            `  All todos: ${this.allTodos}`;
    }

    addTodo(task) {

        this.todos.push({
            id: Math.random(),
            task: task,
            completed: false,
            assignee: null
        });
        console.log('added todo')
    }
}

const todoStore = new TodoStore();