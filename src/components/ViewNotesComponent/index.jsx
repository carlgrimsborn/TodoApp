import '../../App.css';
import './ViewNotesComponent.css';
import NoteCard from '../NoteCard';
import PropTypes from 'prop-types';

const ViewNotesComponent = ({ notes, onDeleteNote }) => {
	const sortedNotes = notes.sort((a, b) => {
		if (a.prioritized && !b.prioritized) {
			return -1;
		}
		if (!a.prioritized && b.prioritized) {
			return 1;
		}
		if (a.prioritized && b.prioritized) {
			return 0;
		}
	});

	return (
		<div className='box'>
			<h3 className='box-header'>Note List</h3>
			<div className='note-scroller'>
				{notes && notes.length > 0 ? (
					sortedNotes.map(
						({ id, title, description, prioritized, status }) => (
							<NoteCard
								key={id}
								id={id}
								title={title}
								description={description}
								prioritized={prioritized}
								status={status}
								onDeleteNote={onDeleteNote}
							/>
						)
					)
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
			prioritized: PropTypes.bool,
			status: PropTypes.string,
			id: PropTypes.number
		})
	),
	onDeleteNote: PropTypes.func
};

export default ViewNotesComponent;
