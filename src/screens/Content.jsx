import { useState } from 'react';
import AddNoteComponent from '../components/AddNoteComponent';
import ViewNotesComponent from '../components/ViewNotesComponent';

const Content = () => {
	const [notes, setNotes] = useState([]);
	const AddNote = (note) => {
		const newNotes = [...notes, note];
		setNotes(newNotes);
	};
	return (
		<div className='content'>
			<AddNoteComponent addNote={AddNote} />
			<ViewNotesComponent notes={notes} />
		</div>
	);
};

export default Content;
