define(['uiRouter'], function() {
	angular.moudel('banner1Mouder',['ui.router'])
	.config(function  ($stateProvider,$urlRouterProvider) {
		$stateProvider
			.state('home.banner1',{
				url:'/banner1',
				templateUrl:'component/home/banner1/banner1.html',
				controller:'banner1Ctrl',
				css:'component/home/banner1/banner1.css'		
			})
			.controller('banner1Ctrl',['$scope',function  ($scope) {
				$scope.name= 'banner1';
			}])
	})
})