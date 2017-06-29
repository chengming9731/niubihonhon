define(['uiRouter','category','shopcar','mine','wrap','login','angularCSS'],function(){
	var app = angular.module('myModule',['ui.router','angularCSS','loginModule','categoryModule','shopcarModule','mineModule','wrapModule'])
		.config(function($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise('/wrap');
		})
	;
});
