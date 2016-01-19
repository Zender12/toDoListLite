(function(){
	angular.module('app')
		.factory('NoteService', function()
		{

			var notes = [
 			{title: 'Note 1', content: 'Note 1 text'},
 			{title: 'Note 2', content: 'Note 2 text'},
 			{title: 'Note 3', content: 'Note 3 text'},
			{title: 'Note 4', content: 'Note 4 text'},
 			{title: 'Note 5', content: 'Note 5 text'},
 			{title: 'Note 6', content: 'Note 6 text'},
 			{title: 'Note 7', content: 'Note 7 text'}
 			];

			return {
				getNotes: getNotes,
				saveNote: saveNote,
				createBlankNote: createBlankNote
			};

			function getNotes()
			{
				return notes;
			}

			function saveNote(note)
			{
				return 	notes.unshift(note);;
			}

			function createBlankNote()
			{
				return {
					title: "",
					content: ""
				};
			}

			function getErrorMessage(error)
			{
				return 'Error ' + error.status  + ': ' + error.statusText;
			}
		})
	;
})()