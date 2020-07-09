import React from 'react';
import useInputState from './useInputState';

function TodoForm({addTodo}) {
    const [task, setTask, reset] = useInputState('');
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(task)
        reset()
    }

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input value={task} onChange={setTask} />
				<h1>{task}</h1>
			</form>
		</div>
	);
}

export default TodoForm;
