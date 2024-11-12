import './AddNoteForm.css';
import PropTypes from 'prop-types';

const AddNoteForm = ({
	noteForm,
	setFormValue,
	setPrioritizedChecked,
	onSubmit,
	error
}) => {
	const isChecked = noteForm.type === 'prioritized';
	return (
		<div className='form-wrapper'>
			<form onSubmit={onSubmit} className='todo-form'>
				<label className='form-label'>
					<p>Title:</p>
					<input
						type='text'
						name='title'
						value={noteForm.title}
						onChange={setFormValue}
					/>
				</label>
				<label className='form-label'>
					<p>Activity:</p>
					<textarea
						name='description'
						value={noteForm.description}
						onChange={setFormValue}
					/>
				</label>
				<label className='form-check-label'>
					<p>Urgent:</p>
					<input
						type='checkbox'
						name='prioritized'
						checked={isChecked}
						onChange={setPrioritizedChecked}
					/>
				</label>

				<button type='submit' className='form-submit'>
					Submit
				</button>
				{error && <p className='add-note-error'>{error}</p>}
			</form>
		</div>
	);
};

AddNoteForm.propTypes = {
	noteForm: PropTypes.shape({
		title: PropTypes.string,
		description: PropTypes.string,
		type: PropTypes.string
	}),
	setFormValue: PropTypes.func,
	setPrioritizedChecked: PropTypes.func,
	onSubmit: PropTypes.func,
	error: PropTypes.string
};

export default AddNoteForm;
