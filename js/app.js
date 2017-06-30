define(['uiRouter', 'angularCSS', 'mine', 'wrap','login', 'home','category','searchpage', 'shopcar','site','addsite','orderform'], function() {
	var app = angular.module('myModule', ['ui.router', 'angularCSS', 
	'loginModule', 'categoryModule', 'addsiteModule','shopcarModule', 
	'mineModule', 'wrapModule','searchpageModule', 'orderformModule',
	'homeModule','siteModule'])
		.config(function($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise('/wrap');
		})
		.directive('search', function() {
			return {
				restrict: 'E',
				replace: true,
				templateUrl: 'component/search/search.html',
			};
		})
		.directive('backHead', function() {
			return {
				restrict: 'E',
				templateUrl: 'component/head/head.html',
				replace: true,
			}
		})
		.filter('trust2Html', ['$sce', function($sce) {
			return function(val) {
				return $sce.trustAsHtml(val);
			};
		}])
});
