(function() {
	var app = angular.module('gmatApp', []);

	app.factory('questionsFactory', ['$http', function($http){
		var factory = {};
		//var url = 'http://gmat-test-server.herokuapp.com/public/questions.json';
		var url = '/app/questions.json';

		factory.getQuestions = function() {
			return $http.get(url);
		}

		return factory;
	}]);

	app.controller('QuestionController', ['$scope', 'questionsFactory', function($scope, questionsFactory){		
		var that = this;

		$scope.questions = [];
		$scope.elapsedTime = 0;

		questionsFactory.getQuestions().success(function(data) {
		  	console.log(data);
			$scope.questions = data;
			that.nextQuestion();
		}).error(function(data, status, headers, config) {
			alert('error');
		});
		
		this.verify = function(choice, correct){
			this.isCorrect = choice === correct;
			this.answered = true;
			$scope.elapsedTime = new Date().getTime() - $scope.elapsedTime;
		};

		$scope.shuffleQuestion = function() {
			return $scope.questions[$scope.getRandomInt(0, $scope.questions.length)];
		};

		$scope.getRandomInt = function(min, max) {
			// from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
			return Math.floor(Math.random() * (max - min)) + min;
		};

		this.nextQuestion = function() {
			this.reset();
			$scope.elapsedTime = new Date().getTime();
			this.question = $scope.shuffleQuestion();
		}

		this.reset = function() {
			$scope.elapsedTime = 0;
			this.question = null;
			this.choice = '';
			this.isCorrect = false;
			this.answered = false;
		}
	}]);

})();