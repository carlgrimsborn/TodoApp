import NoteForm from '../components/NoteForm';
import ViewNotes from '../components/ViewNotes';

const Content = () => {
	return (
		<div className='content'>
			<div className='box'>
				<h3 className='box-header'>Add Todo Note</h3>
				<NoteForm />
			</div>
			<ViewNotes />
		</div>
	);
};

export default Content;
