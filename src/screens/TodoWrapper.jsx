import AddTodo from './AddTodo';
import ViewTodo from './ViewTodo';

const TodoWrapper = () => {
	return (
		<div className='todoWrapper'>
			<AddTodo />
			<ViewTodo />
		</div>
	);
};

export default TodoWrapper;
