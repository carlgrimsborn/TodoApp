import './NoteCard.css';
import EditNoteTypeForm from '../EditNoteTypeForm';
import PropTypes from 'prop-types';

const NoteCard = ({ id, title, description, prioritized, onDeleteNote }) => {
	return (
		<div className='note-card'>
			<h2 className='note-title'>{title}</h2>
			{prioritized && <p className='priority-label'>prioritized</p>}
			<p className='note-description'>{description}</p>
			<EditNoteTypeForm noteId={id} onDeleteNote={onDeleteNote} />
		</div>
	);
};

NoteCard.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	description: PropTypes.string,
	prioritized: PropTypes.bool,
	status: PropTypes.string,
	onDeleteNote: PropTypes.func
};

export default NoteCard;
