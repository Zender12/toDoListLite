(function(){
	angular.module('app', ['templates']);
})();

(function(){
	angular.module('app')
		.controller('IndexController', function($scope, NoteService)
		{
			$scope.notes = NoteService.getNotes();
		})
	;
})();
(function(){
	angular.module('app')
		.directive('newNote', function()
		{
			return {
				templateUrl: "new-note.html",
				scope: {
					notes: '='
				},
				controller: NewNoteController
			};

			function NewNoteController($scope, NoteService)
			{
				$scope.blankNote = null;

				$scope.createNote = createNote;
				$scope.saveNote = saveNote;

				function createNote()
				{
					$scope.blankNote = NoteService.createBlankNote();
				}

				function saveNote()
				{
					if ($scope.blankNote && ($scope.blankNote.title.length > 0 || $scope.blankNote.content.length > 0))
					{
						NoteService.saveNote($scope.blankNote).then(function(savedNote)
						{
							$scope.notes.unshift(savedNote);
						});
					}

					$scope.blankNote = null;
				}
			}
		})
	;
})();
(function(){
	angular.module('app')
		.directive('note', function()
		{
			return {
				templateUrl: "note.html"
			};
		})
	;
})();
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