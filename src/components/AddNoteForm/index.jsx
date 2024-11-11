import './AddNoteForm.css';
import PropTypes from 'prop-types';

const AddNoteForm = ({ addNote }) => {
	const onSubmit = (e) => {
		console.log(e);
	};
	return (
		<div className='form-wrapper'>
			<form onSubmit={onSubmit} className='todo-form'>
				<label className='form-label'>
					<p>Title:</p>
					<input type='text' name='title' />
				</label>
				<label className='form-label'>
					<p>Activity:</p>
					<textarea name='activity' />
				</label>
				<label className='form-check-label'>
					<p>Urgent:</p>
					<input type='checkbox' name='urgent' />
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
