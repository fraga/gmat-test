(function() {
	var app = angular.module('gmatApp', ['ngRoute', 'timer']);

	app.config(function($routeProvider) {
		$routeProvider
			.when('/questions', {
				controller: 'QuestionsController',
				templateUrl: '/app/views/questions/index.html'
			})
			.when('/questions/new', {
				controller: 'QuestionController',
				templateUrl: '/app/views/questions/new.html'
			})
			.otherwise({ redirectTo: '/questions' });
	});
})();