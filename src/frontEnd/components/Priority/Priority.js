import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Todos from './Todo';
import "./priority.css";


export default function Priority() {
    const [todo, setTodo] = useState({
        task: "",
        urgency: true,
        importance: true
    })
    const [todoList, setTodoList] = useState([]);


    const getTask = e => (setTodo({...todo, task: e.target.value, id: uuidv4() }));
    const urgentSelection = e => setTodo({...todo, urgency: (e.target.value) !== "true" ? false : true});
    const significatSelection = e => setTodo({...todo, importance: (e.target.value) !== "true" ? false : true});
    
    function addTodoClick(){
        setTodo({id: uuidv4(), ...todo})
        setTodoList([todo, ...todoList])
        if (todo.task !== '') {
            setTodo({task: ''})
        }
    }
    function submitHandler(e) {
        e.preventDefault();
    }

    function removeTodo(id) {
        setTodoList(todoList.filter(todo => todo.id !== id))
    }

    function removeClick(id) {
        removeTodo(id)
    }

  return (
    <div className="main">
        <form id="add_input" onSubmit={submitHandler}>
            <div className="input_wrapper">
                <input className="text_input" type="text" value={todo.task} onChange={getTask} />
                <select
                    id="priority_selection"
                    value={todo.urgency}
                    onChange={urgentSelection}
                >
                    <option value="true">Urgent</option>
                    <option value="false">Not Urgent</option>
                </select>
                <select
                    id="priority_selection"
                    value={todo.importance}
                    onChange={significatSelection}
                >
                    <option value="true">Significant</option>
                    <option value="false">Insignificant</option>
                </select>
            </div>
            <button onClick={addTodoClick}>+</button>
        </form>

      <div className="priority-box red">
        <h3>Urgent & Significant</h3>
        <ul>
            <Todos todoList={todoList} removeTodo={removeTodo}/>
            {/* {todoList
            .filter(({urgency, importance}) => urgency && importance)
            .map(({id, task}) => {
                let randomKey = Math.random().toString(16).slice(2)
                return (
                    <div id="todo" key={id}>
                        <li>{task}</li><button onClick={removeTodo}>X</button>
                    </div>
            )}
            )} */}
        </ul>
      </div>
      {/* <div className="priority-box orange">
        <h3>Urgent & Insignificant</h3>
        <ul>
            {todoList
                .filter(todo => todo.urgency === false && todo.importance)
                .map((todo,index) => (
                    <div id="todo">
                        <li key={todo.id}>{todo.task}</li><button onClick={removeClick}>X</button>
                    </div>
            ))}
        </ul>
      </div>
      <div className="priority-box yellow">
        <h3>Not Urgent & Significant</h3>
        <ul>
            {todoList
                .filter(todo => todo.urgency && todo.importance === false)
                .map((todo,index) => (
                    <div id="todo">
                        <li key={todo.id}>{todo.task}</li><button onClick={removeClick}>X</button>
                    </div>
            ))}
        </ul>
      </div>
      <div className="priority-box gray">
        <h3>Not Urgent & Insignificant</h3>
        <ul>
            {todoList
                .filter(todo => todo.urgency === false && todo.importance === false  )
                .map((todo,index) => (
                    <div id="todo">
                        <li key={todo.id}>{todo.task}</li><button onClick={removeClick}>X</button>
                    </div>
            ))}
        </ul>
      </div> */}
    </div>
  );
}
