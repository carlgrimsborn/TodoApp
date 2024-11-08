const TodoForm = () => {
	const onSubmit = (e) => {
		console.log(e);
	};
	return <form onSubmit={onSubmit}></form>;
};

export default TodoForm;
