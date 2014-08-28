(function() {
	var app = angular.module('gmatApp', []);
	
	app.controller('QuestionController', ['$http', function($http){
		var that = this;
		//var url = 'http://gmat-test-server.herokuapp.com/public/questions.json';
		var url = 'http://localhost:9292/app/questions.json';

		$http.get(url).success(function(data) {
		  console.log(data);
			that.questions = data;
			that.nextQuestion();
		}).error(function(data, status, headers, config) {
			alert('error');
		});
		
		this.verify = function(choice, correct){
			this.isCorrect = choice === correct;
			this.answered = true;
			this.elapsedTime = new Date().getTime() - this.elapsedTime;
		};

		this.shuffleQuestion = function() {
			return this.questions[this.getRandomInt(0, this.questions.length)];
		};

		this.getRandomInt = function(min, max) {
			// from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
			return Math.floor(Math.random() * (max - min)) + min;
		};

		this.nextQuestion = function() {
			this.reset();
			this.elapsedTime = new Date().getTime();
			this.question = this.shuffleQuestion();
		}

		this.reset = function() {
			this.elapsedTime = 0;
			this.question = null;
			this.choice = '';
			this.isCorrect = false;
			this.answered = false;
		}
	}]);

})();