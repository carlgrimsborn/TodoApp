import './NoteCard.css';
import EditNoteTypeForm from '../EditNoteTypeForm';
import PropTypes from 'prop-types';

const NoteCard = ({ title, description, prioritized }) => {
	return (
		<div className='note-card'>
			<h2>{title}</h2>
			{prioritized && <p className='priority-label'>prioritized</p>}
			<p className='note-description'>{description}</p>
			<EditNoteTypeForm />
		</div>
	);
};

NoteCard.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	prioritized: PropTypes.bool
};

export default NoteCard;
