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

	const DeleteNote = (noteId) => {
		const newNotes = notes.filter((note) => note.id !== noteId);
		setNotes(newNotes);
	};

	return (
		<div className='content'>
			<AddNoteComponent addNote={AddNote} oldNote={oldNoteRef.current} />
			<ViewNotesComponent notes={notes} onDeleteNote={DeleteNote} />
		</div>
	);
};

export default Content;
