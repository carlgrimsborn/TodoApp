import { useRef } from 'react';
import './EditNoteTypeForm.css';
import PropTypes from 'prop-types';

const EditNoteTypeForm = ({ onSubmit }) => {
	const selectRef = useRef(null);
	return (
		<form onSubmit={(e) => onSubmit(e, selectRef.current.value)}>
			<label>
				Change Status:
				<select ref={selectRef}>
					<option value='done'>Done</option>
					<option value='prioritized'>Prioritized</option>
					<option value='todo'>TODO</option>
					<option value='deleted'>Delete</option>
				</select>
			</label>
			<button type='submit' className='submit-note-type-btn'>
				Submit
			</button>
		</form>
	);
};

EditNoteTypeForm.propTypes = {
	noteId: PropTypes.number,
	onSubmit: PropTypes.func
};

export default EditNoteTypeForm;
