import AddNoteForm from '../AddNoteForm';
import '../../App.css';
import PropTypes from 'prop-types';

const AddNoteCard = ({ addNote }) => {
	return (
		<div className='box'>
			<h3 className='box-header'>Add Todo Note</h3>
			<AddNoteForm addNote={addNote} />
		</div>
	);
};

AddNoteCard.propTypes = {
	addNote: PropTypes.func
};

export default AddNoteCard;
