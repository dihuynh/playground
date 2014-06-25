var app = angular.module('app', []);

	app.controller('SitesController',
		function SiteController($scope){
			$scope.sites = [
			{
				name:'To Buy List',
				link:'toBuyList/index.html',
				description:' A way to list my wish list with AngularJS and MixItUp'
			},{
				name:'Bucket List',
				link:'BucketList/index.html',
				description:''
			},{
				name:'JS Timer',
				link:'JSTimer/index.html',
				description:'A javascript timer with green screen for embedding in videos'
			},{
				name:'Workout Plan',
				link:'WorkoutPlan/index.html',
				description:'A simple web app to tell me what my workout of the day is'
			}
			];
		});
