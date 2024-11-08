import './App.css';
import AddTodo from './screens/AddTodo/AddTodo';
import ViewTodo from './screens/ViewTodo/ViewTodo';

function App() {
	return (
		<div className='app'>
			<AddTodo />
			<ViewTodo />
		</div>
	);
}

export default App;
