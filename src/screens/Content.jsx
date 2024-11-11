import { useState } from 'react';
import AddNoteCard from '../components/AddNoteCard';
import ViewNotes from '../components/ViewNotes';

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
			<AddNoteCard addNote={AddNote} />
			<ViewNotes notes={notes} />
		</div>
	);
};

export default Content;
