import './SubmitNoteForm.css';

const SubmitNoteForm = () => {
	const onSubmit = (e) => {
		console.log(e);
	};
	return (
		<form onSubmit={onSubmit}>
			<label>
				Change Status:
				<select>
					<option>Done</option>
					<option>Prioritized</option>
					<option>Delete</option>
				</select>
			</label>
			<button type='submit' className='submit-note-type'>
				Submit
			</button>
		</form>
	);
};

export default SubmitNoteForm;
