import '../../App.css';
import './ViewNotes.css';
import NoteCard from '../NoteCard';
import PropTypes from 'prop-types';

const ViewNotes = ({ notes }) => {
	return (
		<div className='box'>
			<h3 className='box-header'>Note List</h3>
			<div className='note-scroller'>
				{notes &&
					notes.map(({ id, title, description, prioritized }) => (
						<NoteCard
							key={id}
							title={title}
							description={description}
							prioritized={prioritized}
						/>
					))}
			</div>
		</div>
	);
};

ViewNotes.propTypes = {
	notes: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			description: PropTypes.string,
			prioritized: PropTypes.bool,
			id: PropTypes.string
		})
	)
};

export default ViewNotes;
