import './TodoForm.css';

const TodoForm = () => {
	const onSubmit = (e) => {
		console.log(e);
	};
	return (
		<div className='form-wrapper'>
			<form onSubmit={onSubmit} className='todo-form'>
				<label className='form-label'>
					<p>Title:</p>
					<input type='text' name='title' />
				</label>
				<label className='form-label'>
					<p>Activity:</p>
					<textarea name='activity' />
				</label>
				<label className='form-check-label'>
					<p>Urgent:</p>
					<input type='checkbox' name='urgent' />
				</label>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default TodoForm;
