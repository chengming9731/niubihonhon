define(['uiRouter'],function(){
	angular.module('registerModule',['ui.router'])
		.config(function($stateProvider,$urlRouterProvider){
			$stateProvider
				.state('register',{
					url:'/register',
					templateUrl:'component/register/register.html',
					css:'component/register/register.css',
					controller:'registerCtrl'
				})
		})
		.controller('registerCtrl',['$scope',function($scope){
			$scope.headTitle = '进入精品集';
			$scope.headRight = ' ';
			$scope.contryCode = '86';
			$scope.goBack = function(){
				history.go(-1);
			}
		}])
});