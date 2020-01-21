import React from 'react';

export default function TodoList(props) {

    return (
        <div>
            {
                props.items.map((todo) => {
                    return <div key={todo.id}>{todo.item}</div>
                })
            }
        </div>
    )
}