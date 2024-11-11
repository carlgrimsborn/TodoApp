import { useRef } from 'react';
import './EditNoteTypeForm.css';

const EditNoteTypeForm = () => {
	const selectRef = useRef(null);
	const onSubmit = (e) => {
		e.preventDefault();
		console.log(selectRef.current.value);
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

export default EditNoteTypeForm;
