import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";

function TodoList() {
    const [todos, setTodos] = useState([]);
    //const [isCompleted, setIsCompleted] = useState(false);


    function handleRemove(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    /*function handleCompleted() {
        setIsCompleted(isCompleted = !isCompleted);
    }*/

    /** Add new box object to boxList. */
    const addTodo = todo => {
        let newtodo = { ...todo, id: uuid() };
        setTodos(todos => [...todos, newtodo]);
    };
    // end addBox

    return (
        <div>
            <h3>Todo List</h3>
            <NewTodoForm addTodo={addTodo} />
            <div className="TodoList">
                {todos.map(({ id, task }) =>

                    <Todo key={id} task={task}
                        handleRemove={evt => handleRemove(id)}
                    />
                )}
            </div>
        </div>
    );
    /* handleCompleted={evt => handleCompleted()}
                        isCompleted={isCompleted} */
};
// end

export default TodoList;
