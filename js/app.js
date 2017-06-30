<<<<<<< HEAD
define(['uiRouter', 'angularCSS', 'mine', 'wrap','login','searchpage', 'home','category', 'shopcar'], function() {
			var app = angular.module('myModule', ['ui.router', 'angularCSS', 'loginModule', 'categoryModule', 'shopcarModule', 'mineModule', 'wrapModule', 'homeModule','searchpageModule'])
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

=======
define(['uiRouter', 'angularCSS', 'mine', 'wrap', 'login', 'home', 'category', 'shopcar', 'jquery'], function() {
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
>>>>>>> a7bdd7fc3df62e2fe819bb7d18c984620c8e50ba
