import React from 'react';

const TodoForm = props => {

    return (
        <form onSubmit={props.handleSubmit}>
            {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
            <input
                type="text"
                name="item"
                value={props.todoText}
                onChange={props.handleChanges}
            />
            <button>Add</button>
        </form>
    );
}

export default TodoForm;