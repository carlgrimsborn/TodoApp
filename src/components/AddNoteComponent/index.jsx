import AddNoteForm from '../AddNoteForm';
import '../../App.css';
import './AddNoteComponent.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const AddNoteComponent = ({ addNote, oldNote }) => {
	const initialState = {
		title: '',
		description: '',
		prioritized: false
	};
	const [noteForm, setNoteForm] = useState(initialState);

	const setFormValue = (e) =>
		setNoteForm({
			...noteForm,
			[e.target.name]: e.target.value
		});

	const setPrioritizedChecked = (e) => {
		setNoteForm({
			...noteForm,
			prioritized: e.target.checked
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const formToAdd = { ...noteForm, id: Math.random() * 100 };
		setNoteForm(initialState);
		addNote(formToAdd);
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
