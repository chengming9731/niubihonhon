define(['uiRouter'], function() {
	angular.module('wrapModule', ['ui.router'])
		.config(function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('wrap', {
					url: '/wrap',
					templateUrl: 'component/wrap/wrap.html',
					controller: 'wrapCtrl'
				});
		})
		.controller('wrapCtrl', ['$state', '$scope', function($state, $scope) {
			localStorage.setItem('tabIndex', 0);
			var tabIndex = localStorage.getItem('tabIndex');
			
			$scope.tabIndex = tabIndex ? tabIndex : 0;
			var sTabPage = getTabPage();
			$state.go(sTabPage); //默认显示第一个tab
			$scope.changeTab = function(index) {
				$scope.tabIndex = index;
				localStorage.setItem('tabIndex', index);
			}
			function getTabPage() {
				var sTabPage;
				switch($scope.tabIndex) {
					case '0':
						sTabPage = 'wrap.home';
						break;
					case '1':
						sTabPage = 'wrap.category';
						break;
					case '2':
						sTabPage = 'shopcar';
						break;
					case '3':
						sTabPage = 'wrap.mine';
						break;
				}
				return sTabPage;
			}
		}])
})