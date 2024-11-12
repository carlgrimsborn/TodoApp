import '../../App.css';
import NoteCard from '../NoteCard';
import './CompletedNotesComponent.css';
import PropTypes from 'prop-types';

const CompletedNotesComponent = ({ notes }) => {
	return (
		<div className='box completed-box'>
			<h3 className='box-header'>Completed Todos:</h3>
			<div className='note-scroller'>
				{notes.length > 0 &&
					notes.map(({ id, title, description, type }) => (
						<NoteCard
							key={id}
							title={title}
							description={description}
							type={type}
						/>
					))}
			</div>
		</div>
	);
};

CompletedNotesComponent.propTypes = {
	notes: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			description: PropTypes.string,
			type: PropTypes.string,
			id: PropTypes.number
		})
	)
};

export default CompletedNotesComponent;
