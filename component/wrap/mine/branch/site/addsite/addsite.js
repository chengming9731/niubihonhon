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
			$scope.citieName = '请选择';
			$scope.townName = '请选择';
			$scope.areaName ='请选择';
			$scope.headTitle = '添加收货地址';
			$scope.headRight = '保存';
			$scope.goBack = function(){
				window.history.go(-1);
			};
			$scope.headRightClick=function(){
				window.history.go(-1);
			}
			//城市数据
			$http.get('json/chinaCities.json').then(function(res){
				//省数据
				$scope.cities=res.data.china
			})
			//市数据
			$scope.citie=function(polis){
				angular.forEach($scope.cities,function(data){
					if(polis==data.name){
						$scope.urban=data.sub;
						if(!$scope.urban[0].sub){
							var arr =[{name:'a'}];
							arr.push({name:polis})
							$scope.urban= arr;
						}
					}
				})
			}
				//区数据
			$scope.town=function(tow){
				console.log(tow)
				if(!$scope.urban[0].sub){
					angular.forEach($scope.cities,function(data){
						if(tow==data.name){
							$scope.region=data.sub							
						}
					})
				}else{
					angular.forEach($scope.urban,function(data){
					if(tow==data.name){
						$scope.region=data.sub;
					}
				})
				}
			}
		}])
});