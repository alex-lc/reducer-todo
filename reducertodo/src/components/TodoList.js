import React from 'react';

export default function TodoList(props) {

    // const toggleComplete = e => {
    //     e.preventDefault();
    //     props.dispatch({ type: "TOGGLE_TODO", payload: e.target.id });
    // }

    return (
        <div>
            {
                props.items.map((todo) => {
                    return <div
                        className={todo.completed ? `complete` : ``}
                        key={todo.id}
                        onClick={() => props.dispatch({ type: "TOGGLE_TODO", payload: todo.id })}>{todo.item}</div>
                })
            }
        </div>
    )
}