import './NoteCard.css';
import EditNoteTypeForm from '../EditNoteTypeForm';
import PropTypes from 'prop-types';

const NoteCard = ({ id, title, description, type, onEditNoteType }) => {
	const isPrioritized = type === 'prioritized';
	const onSubmit = (e, value) => {
		e.preventDefault();
		onEditNoteType(id, value);
	};
	return (
		<div className='note-card'>
			<h2 className='note-title'>{title}</h2>
			{isPrioritized && <p className='priority-label'>prioritized</p>}
			<p className='note-description'>{description}</p>
			<EditNoteTypeForm onSubmit={(e, value) => onSubmit(e, value)} />
		</div>
	);
};

NoteCard.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	description: PropTypes.string,
	type: PropTypes.string,
	onEditNoteType: PropTypes.func
};

export default NoteCard;
