define(['uiRouter'],function(){
	var homeApp = angular.module('homeModule',['ui.router'])
		.config(function($stateProvider,$urlRouterProvider){
			$stateProvider.state('wrap.home',{
				url:'/home',
				templateUrl:'component/wrap/home/home.html',
				css:'component/wrap/home/home.css'
			});
		});
});
