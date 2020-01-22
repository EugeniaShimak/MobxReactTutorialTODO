import React, {useState} from 'react';
import './App.css';
import store from './ObservableStore'
import {observer} from "mobx-react";
import peopleStore from './ObservableStorePeople';


class TodoView extends React.Component {
    render() {
        const todo = this.props.todo;
        return (
            <li onDoubleClick={this.onRename}>
                <input
                    type='checkbox'
                    checked={todo.completed}
                    onChange={this.onToggleCompleted}
                />
                {todo.task}
                <br/>
                {todo.assignee
                    ? <small>{todo.assignee.name}</small>
                    : <small>{'nobody assignee'}</small>
                }
                {/*<RenderCounter/>*/}
            </li>
        );
    }

    onToggleCompleted = () => {
        const todo = this.props.todo;
        todo.completed = !todo.completed;
    };

    onRename = () => {
        const todo = this.props.todo;
        todo.task = prompt('Task name', todo.task) || "";
    }
}

const ToDoList = observer(({taskStore, peopleStore}) => {
        const [val, setVal] = useState('');

        return <div>
            <div>
                {taskStore.report}
                <ul>
                    {taskStore.todos.map(
                        (todo) => <TodoView todo={todo} key={todo.id}/>
                    )}
                </ul>
                {taskStore.pendingRequests > 0 ? <span>Loading...</span>: null}
                <input value={val} onChange={(e) => {
                    debugger;
                    setVal(e.target.value)
                }}/>
                <button onClick={() => {
                    taskStore.addTodo(val);
                    debugger
                    let me = peopleStore.getPerson('Me');
                    taskStore.addAssignee(1, me) ;
                }}>Положить в стор
                </button>
                {/*<RenderCounter/>*/}
            </div>
        </div>
    }
);

function App() {

    return (
        <div className="App">
            <ToDoList taskStore={store} peopleStore={peopleStore} />
        </div>
    );
}

export default App;
