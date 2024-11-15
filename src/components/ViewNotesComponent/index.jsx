import '../../App.css';
import './ViewNotesComponent.css';
import NoteCard from '../NoteCard';
import PropTypes from 'prop-types';

const ViewNotesComponent = ({ notes, onEditNoteType }) => {
	return (
		<div className='box'>
			<h3 className='box-header'>Todo Note List</h3>
			<div className='note-scroller'>
				{notes && notes.length > 0 ? (
					notes.map(({ id, title, description, type }) => (
						<NoteCard
							key={id}
							id={id}
							title={title}
							description={description}
							type={type}
							onEditNoteType={onEditNoteType}
						/>
					))
				) : (
					<label className='empty-label'>
						Submitted notes will be shown here
					</label>
				)}
			</div>
		</div>
	);
};

ViewNotesComponent.propTypes = {
	notes: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			description: PropTypes.string,
			type: PropTypes.string,
			id: PropTypes.number
		})
	),
	onEditNoteType: PropTypes.func
};

export default ViewNotesComponent;
