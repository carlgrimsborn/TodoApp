import '../../App.css';
import './ViewNotesComponent.css';
import NoteCard from '../NoteCard';
import PropTypes from 'prop-types';

const ViewNotesComponent = ({ notes }) => {
	return (
		<div className='box'>
			<h3 className='box-header'>Note List</h3>
			<div className='note-scroller'>
				{notes && notes.length > 0 ? (
					notes.map(({ id, title, description, prioritized }) => (
						<NoteCard
							key={id}
							title={title}
							description={description}
							prioritized={prioritized}
						/>
					))
				) : (
					<label>Submitted notes will be shown here</label>
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
			id: PropTypes.number
		})
	)
};

export default ViewNotesComponent;
