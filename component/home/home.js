define(['uiRouter'],function(){
	var homeApp = angular.module('homeModule',['ui.router'])
		.config(function($stateProvider,$urlRouterProvider){
			$stateProvider.state('home',{
				url:'/home',
				templateUrl:'component/home/home.html'
			});
		});
});
