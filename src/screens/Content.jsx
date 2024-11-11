import TodoForm from '../components/TodoForm';
import ViewTodo from './ViewTodo';

const Content = () => {
	return (
		<div className='content'>
			<div className='box'>
				<h3 className='add-title'>Add Todo Note</h3>
				<TodoForm />
			</div>
			<ViewTodo />
		</div>
	);
};

export default Content;
