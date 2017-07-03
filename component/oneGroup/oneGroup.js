define(['uiRouter'],function  () {
	angular.module('oneGroupModule',[])
	.config(function  ($stateProvider,$urlRouterProvider) {
		$stateProvider
			.state('oneGroup',{
				url:'/oneGroup',
				templateUrl:'component/oneGroup/oneGroup.html',
				css:'component/oneGroup/oneGroup.css',
				controller:'oneGroupCtrl'
			})
	})
	.controller('oneGroupCtrl',['$scope','$state','$http',function  ($scope,$state,$http) {
		$scope.name = '一元拼团';
		$http.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=15711%2C41510&callback=CALL_BACK').then(function  (res) {
		console.log(res);	
		})
	}])
})