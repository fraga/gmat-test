(function() {
	var app = angular.module('gmatApp', []);
	
	app.controller('QuestionController', function(){
		this.question = questions[0];
		this.choice = '';
		this.isCorrect = false;
		this.answered = false;
		
		this.verify = function(choice, correct){
			this.isCorrect = choice === correct;
			this.answered = true;
		};
		
	});
	
	var questions = [{
			type: "Verbal (CR)",
			description: "Comet A is seen near the Earth every 12 years while comet B every 20 years. If both comets were observed in 1979, for how many years do we have to wait to see the two comets together again? (Assume now is 2004)",
			answers: [
				{
					desc:"16",
					value:"a"
				},
				{
					desc:"20",
					value:"b"
				},
				{
					desc:"25",
					value:"c"
				},
				{
					desc:"32",
					value:"d"
				},
				{
					desc:"35",
					value:"e"
				}
			],
			correct: "e"
	},
			{
				type: "Math (PS)",
				description: "If among 5 children there are 2 siblings, in how many ways can the children be seated in a row so that the siblings do not sit together?",
				answers: [
					{
						desc:"38",
						value:"a"
					},
					{
						desc:"46",
						value:"b"
					},
					{
						desc:"72",
						value:"c"
					},
					{
						desc:"86",
						value:"d"
					},
					{
						desc:"102",
						value:"e"
					}
				],
				correct: "c"
	},
			{
				type: "Verbal (CR)",
				description: "Some who favor putting governmental enterprises into private hands suggest that conservation objectives would in general be better served if private environmental groups were put in charge of operating and financing the national park system, which is now run by the government.	Which of the following, assuming that it is a realistic possibility, argues most strongly against the suggestion above?",
				answers: [
					{
						desc:"Those seeking to abolish all restrictions on exploiting the natural resources of the parks might join the private environmental groups as members and eventually take over their leadership.",
						value:"a"
					},
					{
						desc:"Private environmental groups might not always agree on the best ways to achieve conservation objectives.",
						value:"b"
					},
					{
						desc:"If they wished to extend the park system, the private environmental groups might have to seek contributions from major donors and general public.",
						value:"c"
					},
					{
						desc:"There might be competition among private environmental groups for control of certain park areas.",
						value:"d"
					},
					{
						desc:"Some endangered species, such as the California condor, might die out despite the best efforts of the private environmental groups, even if those groups are not hampered by insufficient resources.",
						value:"e"
					}
				],
				correct: "a"
	},
			{
				type: "Math (DS)",
				description: "What is the value of X ?",
				answers: [
					{
						desc: "1. X is a mode of [3, 0, 1, -1, 0, 5, 1]",
						value: "a"					
					},
					{
						desc: "2. X is neither positive nor negative",
						value: "b"
					}
				],
				correct: "b"
				
	},
			{
				type: "Math (PS)",
				description: "A flower shop has 2 tulips, 2 roses, 2 daisies, and 2 lilies. If two flowers are sold at random, what is the probability of not picking exactly two tulips?",
				answers: [
					{
						desc: "\frac{1}{8}",
						value: "a",
						alt: "\frac{1}{8}"
					},
					{
						desc: "\frac{1}{7}",
						value: "b",
						alt: "\frac{1}{7}"
					},
					{
						desc: "\frac{1}{2}",
						value: "c",
						alt: "\frac{1}{2}"
					},
					{
						desc: "\frac{7}{8}",
						value: "d",
						alt: "\frac{7}{8}"
					},
					{
						desc: "\frac{27}{28}",
						value: "e",
						alt: "\frac{27}{28}"
					}
				],
				correct: "e"
			}
			
	];
	

})();
