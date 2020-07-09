import React, { useState } from 'react';
import TodoForm from './TodoForm';

function TodoApp() {
	const initialTodo = [
		{ id: 1, task: 'Wakeup', completed: false },
		{ id: 2, task: 'Bath', completed: false },
		{ id: 3, task: 'Wakeup', completed: false },
	];

	const customStyles = {
		textAlign: 'center',
	};

	const [todos, setToDos] = useState(initialTodo);

	const addTodo = (newTodoText) => {
		setToDos([...todos, { id: 4, task: newTodoText, completed: false }]);
	};

	return (
		<div>
			<TodoForm addTodo={addTodo} />
			<table style={customStyles}>
				<thead>
					<tr>
						<th>S.No</th>
						<th>Task</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{todos.map((todo) => (
						<tr>
							<td>{todo.id}</td>
							<td>{todo.task}</td>
							<td>{todo.status}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default TodoApp;
