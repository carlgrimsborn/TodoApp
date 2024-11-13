import { useRef, useState } from 'react';
import AddNoteComponent from '../components/AddNoteComponent';
import ViewNotesComponent from '../components/ViewNotesComponent';
import CompletedNotesComponent from '../components/CompletedNotesComponent';

const Content = () => {
	const [notes, setNotes] = useState([]);
	const oldNoteRef = useRef(null);

	const completedNotes = notes.filter((note) => note.type === 'done');

	const sortedNotes = notes
		.filter((note) => note.type !== 'done')
		.sort((a, b) => {
			if (a.type === 'prioritized' && b.type !== 'prioritized') {
				return -1;
			}
			if (a.type !== 'prioritized' && b.type === 'prioritized') {
				return 1;
			}
			if (a.type === 'prioritized' && b.type === 'prioritized') {
				return 0;
			}
		});

	const AddNote = (note) => {
		const newNotes = [...notes, note];
		oldNoteRef.current = note;
		setNotes(newNotes);
	};

	const DeleteNote = (noteId) => {
		const newNotes = notes.filter((note) => note.id !== noteId);
		setNotes(newNotes);
	};

	const EditNoteType = (noteId, noteType) => {
		if (noteType === 'deleted') {
			DeleteNote(noteId);
		} else {
			const newNotes = notes.map((note) => {
				if (note.id === noteId) {
					return { ...note, type: noteType };
				} else return note;
			});
			setNotes(newNotes);
		}
	};

	return (
		<div className='content'>
			<AddNoteComponent addNote={AddNote} oldNote={oldNoteRef.current} />
			<ViewNotesComponent
				notes={sortedNotes}
				onEditNoteType={EditNoteType}
			/>
			{completedNotes.length > 0 && (
				<CompletedNotesComponent notes={completedNotes} />
			)}
		</div>
	);
};

export default Content;
