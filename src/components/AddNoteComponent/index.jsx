import AddNoteForm from '../AddNoteForm';
import '../../App.css';
import './AddNoteComponent.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const AddNoteComponent = ({ addNote, oldNote }) => {
	const initialState = {
		title: '',
		description: '',
		prioritized: false,
        status: 'todo'
	};
	const [noteForm, setNoteForm] = useState(initialState);
	const [error, setError] = useState(null);

	const formContainsValues = () =>
		noteForm.title.length > 0 && noteForm.description.length > 0;

	const setFormValue = (e) => {
		setNoteForm({
			...noteForm,
			[e.target.name]: e.target.value
		});
	};

	const setPrioritizedChecked = (e) => {
		setNoteForm({
			...noteForm,
			prioritized: e.target.checked
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (formContainsValues()) {
			error && setError(null);
			const formToAdd = { ...noteForm, id: Math.random() * 100 };
			setNoteForm(initialState);
			addNote(formToAdd);
		} else {
			setError('Error: note is not completed');
		}
	};

	const useOldNoteOnClick = () => {
		setNoteForm(oldNote);
	};
	return (
		<div className='box'>
			<h3 className='box-header'>Add Todo Note</h3>
			<AddNoteForm
				noteForm={noteForm}
				onSubmit={onSubmit}
				setFormValue={setFormValue}
				setPrioritizedChecked={setPrioritizedChecked}
				error={error}
			/>
			{oldNote && (
				<button onClick={useOldNoteOnClick} className='old-note-btn'>
					copy old note
				</button>
			)}
		</div>
	);
};

AddNoteComponent.propTypes = {
	addNote: PropTypes.func,
	oldNote: PropTypes.shape({
		title: PropTypes.string,
		description: PropTypes.string,
		prioritized: PropTypes.bool
	})
};

export default AddNoteComponent;
