import { useRef } from 'react';
import './EditNoteTypeForm.css';
import PropTypes from 'prop-types';

const EditNoteTypeForm = ({ noteId, onDeleteNote }) => {
	const selectRef = useRef(null);
	const onSubmit = (e) => {
		e.preventDefault();
		const selectValue = selectRef.current.value;

		switch (selectValue) {
			case 'deleted':
				onDeleteNote(noteId);
				break;
			case 'prioritized':
				console.log('prioritized');
				break;
			case 'done':
				console.log('done');
				break;
		}
	};
	return (
		<form onSubmit={onSubmit}>
			<label>
				Change Status:
				<select ref={selectRef}>
					<option value='done'>Done</option>
					<option value='prioritized'>Prioritized</option>
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
	onDeleteNote: PropTypes.func
};

export default EditNoteTypeForm;
