import { useState } from 'react';
import AddNoteComponent from '../components/AddNoteComponent';
import ViewNotesComponent from '../components/ViewNotesComponent';

const Content = () => {
	const [notes, setNotes] = useState([
		{
			title: 'title123',
			description: 'desc12341412349218341324',
			prioritized: false,
			id: 1
		}
	]);
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
