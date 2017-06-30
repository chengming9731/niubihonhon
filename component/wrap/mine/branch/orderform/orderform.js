define(['uiRouter'],function(){
	var orderApp = angular.module('orderformModule',['ui.router'])
		.config(function($stateProvider,$urlRouterProvider){
			$stateProvider.state('orderform',{
				url:'/orderfrom',
				templateUrl:'component/wrap/mine/branch/orderform/orderform.html',
				css:'component/wrap/mine/branch/orderform/orderform.css',
				controller:'orderformCtlr'
			});
		})
		.controller('orderformCtlr',['$scope','$state','$http',function($state,$scope,$http){
			$scope.headTitle = '订单列表';
			$scope.headRight = '添加';
			console.log('ni')
		}])
})