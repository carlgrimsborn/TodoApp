import { useState } from 'react';
import './AddNoteForm.css';
import PropTypes from 'prop-types';

const AddNoteForm = ({ addNote }) => {
	const [noteFormAddition, setNoteFormAddition] = useState({
		title: '',
		description: '',
		prioritized: false
	});

	const setFormValue = (e) =>
		setNoteFormAddition({
			...noteFormAddition,
			[e.target.name]: e.target.value
		});

	const setPrioritizedChecked = (e) => {
		setNoteFormAddition({
			...noteFormAddition,
			prioritized: e.target.checked
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const formToAdd = { ...noteFormAddition, id: Math.random() * 100 };
		addNote(formToAdd);
	};

	return (
		<div className='form-wrapper'>
			<form onSubmit={onSubmit} className='todo-form'>
				<label className='form-label'>
					<p>Title:</p>
					<input
						type='text'
						name='title'
						value={noteFormAddition.title}
						onChange={setFormValue}
					/>
				</label>
				<label className='form-label'>
					<p>Activity:</p>
					<textarea
						name='description'
						value={noteFormAddition.description}
						onChange={setFormValue}
					/>
				</label>
				<label className='form-check-label'>
					<p>Urgent:</p>
					<input
						type='checkbox'
						name='prioritized'
						checked={noteFormAddition.prioritized}
						onChange={setPrioritizedChecked}
					/>
				</label>
				<button type='submit' className='form-submit'>
					Submit
				</button>
			</form>
		</div>
	);
};

AddNoteForm.propTypes = {
	addNote: PropTypes.func
};

export default AddNoteForm;
