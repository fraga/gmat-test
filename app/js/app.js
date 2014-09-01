(function() {
	var app = angular.module('gmatApp', ['ngRoute', 'timer']);

	app.config(function($routeProvider) {
		$routeProvider
			.when('/questions', {
				controller: 'QuestionsController',
				templateUrl: '/app/views/questions/questions.html'
			})
			.when('/questions/new', {
				controller: 'QuestionController',
				templateUrl: '/app/views/questions/question.html'
			})
			.otherwise({ redirectTo: '/questions' });
	});
})();