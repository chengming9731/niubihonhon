define(['uiRouter'],function(){
	angular.module('searchpageModule',['ui.router'])
		.config(function($stateProvider,$urlRouterProvider){
			$stateProvider
				.state('searchpage',{
					url:'/searchpage',
					templateUrl:'component/searchpage/searchpage.html',
					css:'component/searchpage/searchpage.css',
					controller:'searchpagectrl'
				});
		})
		.controller('searchpagectrl',function($scope){
			$scope.goback=function(){
				window.history.go(-1);
			}
			$scope.isactive=true;
			$scope.goodsHistory = JSON.parse(localStorage.getItem('goods1133'));
			console.log($scope.goodsHistory);
			$scope.srearch=function(){
				$scope.isactive=false;
				if(localStorage.getItem('goods1133')){
					var arr2 = JSON.parse(localStorage.getItem('goods1133'))
					arr2.push($scope.value);
					localStorage.setItem('goods1133',JSON.stringify(arr2))
				}else{
					var arr = [];
					arr.push($scope.value);
					localStorage.setItem('goods1133',JSON.stringify(arr))
				}
				$scope.goodsHistory = JSON.parse(localStorage.getItem('goods1133'));
				console.log($scope.goodsHistory);
			}
			$scope.remove=function(){
				 localStorage.clear();
				 $scope.goodsHistory = JSON.parse(localStorage.getItem('goods1133'));
				 $scope.isactive=true;
			}
		})
});