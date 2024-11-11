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

	console.log(oldNoteRef);
	return (
		<div className='content'>
			<AddNoteComponent addNote={AddNote} oldNote={oldNoteRef.current} />
			<ViewNotesComponent notes={notes} />
		</div>
	);
};

export default Content;
