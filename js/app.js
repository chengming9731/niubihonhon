define(['uiRouter','home','category','shopcar','mine'],function(){
	var app = angular.module('myModule',['ui.router','homeModule','categoryModule','shopcarModule','mineModule'])
		.config(function($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise('/home');
		})
	;
});
