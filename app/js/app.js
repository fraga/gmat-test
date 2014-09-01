(function() {
	var app = angular.module('gmatApp', ['ngRoute', 'timer']);

	app.config(function($routeProvider) {
		$routeProvider
			.when('/questions', {
				controller: 'QuestionsController',
				templateUrl: '/app/views/questions/questions.html'
			})
			.otherwise({ redirectTo: '/questions' });
	});
})();