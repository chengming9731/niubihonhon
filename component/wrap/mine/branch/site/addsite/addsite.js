define(['uiRouter'],function(){
	var addsiteApp = angular.module('addsiteModule',['ui.router'])
		.config(function($stateProvider,$urlRouterProvider){
			$stateProvider.state('addsite',{
				url:'/addsite',
				templateUrl:'component/wrap/mine/branch/site/addsite/addsite.html',
				css:'component/wrap/mine/branch/site/addsite/addsite.css',
				controller:'addsiteCtlr'
			});
		})
		.controller('addsiteCtlr',['$state','$scope','$http',function($state,$scope,$http){
			$scope.headTitle = '添加收货地址';
			$scope.headRight = '保存';
			$scope.goBack = function(){
				window.history.go(-1);
			};
			$scope.headRightClick=function(){
				window.history.go(-1);
			}
		}])
});