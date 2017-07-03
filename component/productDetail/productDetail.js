define(['uiRouter'],function(){
	angular.module('productDetailModule',['ui.router'])
		.config(function($stateProvider,$urlRouterProvider){
			$stateProvider
				.state('productDetail',{
					url:'/productDetail',
					templateUrl:'component/productDetail/productDetail.html',
					css:'component/productDetail/productDetail.css',
					controller:'pdCtrl',
					params:{'prodcutInfo':null}
				})
		})
		.controller('pdCtrl',['$scope','$stateParams',function($scope,$stateParams){
			console.log($stateParams.productInfo);
		}])
		
});