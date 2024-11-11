import './SubmitNoteForm.css';

const SubmitNoteForm = () => {
	return (
		<form>
			<label>
				Change Status:
				<select>
					<option>Done</option>
					<option>Prioritized</option>
					<option>Delete</option>
				</select>
			</label>
			<button type='submit' className='submit-note'>
				Submit
			</button>
		</form>
	);
};

export default SubmitNoteForm;
