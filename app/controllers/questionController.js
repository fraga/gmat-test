(function() {
	var questionController = ['$scope', 'questionsService', function($scope, questionsService){		
		$scope.master = {};
		$scope.addedQuestion = null;

        // $scope.update = function(user) {
        //   $scope.master = angular.copy(user);
        // };

        $scope.reset = function() {
          $scope.user = angular.copy($scope.master);
        };

        $scope.addQuestion = function(question) {
        	$scope.addedQuestion = questionsService.addQuestion(question);
        };

        $scope.reset();
	}];

	angular.module('gmatApp').controller('QuestionController', questionController);
}());