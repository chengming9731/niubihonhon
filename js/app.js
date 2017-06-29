define(['uiRouter', 'angularCSS', 'mine', 'wrap','login', 'home','category', 'shopcar'], function() {
			var app = angular.module('myModule', ['ui.router', 'angularCSS', 'loginModule', 'categoryModule', 'shopcarModule', 'mineModule', 'wrapModule', 'homeModule'])
				.config(function($stateProvider, $urlRouterProvider) {
					$urlRouterProvider.otherwise('/wrap');
				})
				.directive('search', function() {
					return {
						restrict: 'E',
						replace: true,
						templateUrl: 'component/search/search.html',
					};
				});
});

