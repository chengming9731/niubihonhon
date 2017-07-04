define(['uiRouter'],function  () {
	angular.module('newProductModule',[])
	.config(function  ($stateProvider,$urlRouterProvider) {
		$stateProvider
			.state('newProduct',{
				url:'/newProduct',
				templateUrl:'component/newProduct/newProduct.html',
				css:'component/newProduct/newProduct.css',
				controller:'newProductCtrl'
			})
	})
	.controller('newProductCtrl',['$scope','$state','$http',function  ($scope,$state,$http) {
		$scope.name = '新品首发';
		
	}])
})