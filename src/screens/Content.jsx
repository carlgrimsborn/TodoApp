import { useRef, useState } from 'react';
import AddNoteComponent from '../components/AddNoteComponent';
import ViewNotesComponent from '../components/ViewNotesComponent';

const Content = () => {
	const [notes, setNotes] = useState([]);
	const oldNoteRef = useRef(null);

	const AddNote = (note) => {
		const newNotes = [...notes, note];
		oldNoteRef.current = note;
		setNotes(newNotes);
	};
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
		<div className='content'>
			<AddNoteComponent addNote={AddNote} oldNote={oldNoteRef.current} />
			<ViewNotesComponent notes={sortedNotes} />
		</div>
	);
};

export default Content;
