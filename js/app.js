define(['uiRouter','angularCSS','category','shopcar','mine','wrap','login','home'],function(){
	var app = angular.module('myModule',['ui.router','angularCSS','loginModule','categoryModule','shopcarModule','mineModule','wrapModule','homeModule'])
		app.config(function($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise('/wrap');
		})
})
