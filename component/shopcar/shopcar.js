define(['uiRouter'],function(){
	angular.module('shopcarModule',['ui.router'])
		.config(function($stateProvider,$urlRouterProvider){
			$stateProvider
				.state('shopcar',{
					url:'/shopcar',
					templateUrl:'component/shopcar/shopcar.html',
					css:'component/shopcar/shopcar.css',
					controller:'shopcarCtrl'
				});
		})
		.controller('shopcarCtrl',['$scope',function($scope){
			$scope.choose=true;
			$scope.choose0=true;
			$scope.arr=[];
			$scope.change0=function(type){
				$scope.choose0=!$scope.choose0;
			}
			$scope.change=function(type){
				$scope.choose=!$scope.choose;
//				$scope.arr.push(this);
				console.log(this);
			}
			$scope.goback=function(){
				window.history.go(-1);
			}
			
		}])
		
});
