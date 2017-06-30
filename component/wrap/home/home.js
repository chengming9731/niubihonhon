define(['uiRouter'],function(){
	var homeApp = angular.module('homeModule',['ui.router'])
		.config(function($stateProvider,$urlRouterProvider){
			$stateProvider.state('wrap.home',{
				url:'/home',
				templateUrl:'component/wrap/home/home.html',
				controller:'homeCtrl',
				css:'component/wrap/home/home.css'
			});
		})
		.controller('homeCtrl',['$scope','$http',function($scope,$http) {
			$scope.name = '徐士杰';
			$http.get('http://mce.mogucdn.com/jsonp/multiget/3?pids=51822%2C51827%2C41119%2C51833%2C51836%2C4604&callback=CALLBACK').then(function (res) {
				console.log(res);
        })
		}])
});
