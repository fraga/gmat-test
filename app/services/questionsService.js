(function () {

	var questionsService = function($http){
		var factory = {};
		//var url = 'http://gmat-test-server.herokuapp.com/public/questions.json';
		var url = '/app/questions.json';

		factory.getQuestions = function() {
			return $http.get(url);
		}

		return factory;
	};

	questionsService.$inject = ['$http'];

    angular.module('gmatApp').factory('questionsService', questionsService);

}());