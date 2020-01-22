import {action, computed, decorate, observable} from "mobx";
import * as mobx from "mobx";


class ObservableTodoStore {
    todos = observable([]);
    pendingRequests = observable.box(0);

    constructor() {
        debugger
        mobx.autorun(() => {
            debugger;
            console.log(this.report)
        });
    }

    get completedTodosCount() {
        debugger
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }

    get report() {
        debugger
        if (this.todos.length === 0)
            return "<none>";

        return `Next todo: "${this.todos[0].task}". ` +
            `Progress: ${this.completedTodosCount}/${this.todos.length}` +
            `   All todos: ${this.allTodos}`;
    }

    get allTodos() {
        console.log('get all todos');
        let allTodos = '';
        this.todos.forEach((todo) =>
            allTodos = allTodos + todo.task + ', '
        );
        return allTodos;
    }

    addTodo(task) {
        debugger
        this.todos.push({
            id: Math.random(),
            task: task,
            completed: false,
            assignee: null
        });
    }

    addAssignee(id, people) {
        this.todos.forEach(todo =>{
            // if (todo.id==id){
                todo.assignee = people;
            // }
        });
        debugger;
    }

}

decorate(ObservableTodoStore, {
    addTodo: action,
    report: computed,
    completedTodosCount: computed,
    allTodos: computed,
    addAssignee:action
});

const observableTodoStore = new ObservableTodoStore();

// var peopleStore = mobx.observable([
//     { name: "Michel" },
//     { name: "Me" }
// ]);
observableTodoStore.addTodo('get coffe');
observableTodoStore.addTodo('buy bread');
// observableTodoStore.todos[0].assignee = peopleStore[0];
// observableTodoStore.todos[1].assignee = peopleStore[1];
export default observableTodoStore;