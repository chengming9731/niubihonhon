define(['uiRouter','category','shopcar','mine','wrap','login'],function(){
	var app = angular.module('myModule',['ui.router','loginModule','categoryModule','shopcarModule','mineModule','wrapModule'])
		.config(function($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise('/wrap');
		})
	;
});
