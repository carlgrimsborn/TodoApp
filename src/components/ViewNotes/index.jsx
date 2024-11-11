import '../../App.css';
import './ViewNotes.css';
import NoteCard from '../NoteCard';

const ViewNotes = () => {
	return (
		<div className='box'>
			<h3 className='box-header'>Note List</h3>
			<div className='note-scroller'>
				<NoteCard />
				<NoteCard />
				<NoteCard />
			</div>
		</div>
	);
};

export default ViewNotes;
