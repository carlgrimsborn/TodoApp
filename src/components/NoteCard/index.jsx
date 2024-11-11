import './NoteCard.css';
import SubmitNoteForm from '../SubmitNoteForm';

const NoteCard = () => {
	return (
		<div className='note-card'>
			<h2>Title</h2>
			<p className='priority-label'>prioritized</p>
			<p className='note-description'>
				description02409357230498750293847502934875asdfadsfasdf2049852309485723049857
			</p>
			<SubmitNoteForm />
		</div>
	);
};

export default NoteCard;
