(function() {
	var app = angular.module('gmatApp', ['timer']);

	app.controller('QuestionController', ['$scope', 'questionsService', function($scope, questionsService){		
		var that = this;

		$scope.questions = [];

		questionsService.getQuestions().success(function(data) {
		  	console.log(data);
			$scope.questions = data;
			that.nextQuestion();
		}).error(function(data, status, headers, config) {
			alert('error');
		});
		
		this.verify = function(choice, correct){
			this.isCorrect = choice === correct;
			this.answered = true;
			$scope.$broadcast('timer-stop');
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
			this.question = $scope.shuffleQuestion();
			$scope.$broadcast('timer-start');
		}

		this.reset = function() {
			this.question = null;
			this.choice = '';
			this.isCorrect = false;
			this.answered = false;
		}
	}]);

})();