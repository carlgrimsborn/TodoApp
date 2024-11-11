import AddNoteForm from '../AddNoteForm';
import '../../App.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const AddNoteComponent = ({ addNote }) => {
	const [noteForm, setNoteForm] = useState({
		title: '',
		description: '',
		prioritized: false
	});

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
		addNote(formToAdd);
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
		</div>
	);
};

AddNoteComponent.propTypes = {
	addNote: PropTypes.func
};

export default AddNoteComponent;
