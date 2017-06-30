define(['uiRouter','register'],function(){
	angular.module('loginModule',['ui.router','registerModule'])
		.config(function($stateProvider,$urlRouterProvider){
			$stateProvider
				.state('login',{
					url:'/login',
					templateUrl:'component/login/login.html',
					css:'component/login/login.css',
					controller:'loginCtrl'
				});
		})
		.controller('loginCtrl',['$scope','$state',function($scope,$state){
			$scope.headTitle = '登录';
			$scope.headRight = '忘记密码';
			$scope.goBack = function(){
				history.go(-1);
			};
			$scope.headRightClick = function(){
				$state.go('wrap');
			}
			
			$scope.login = function(){
				if($scope.account === 'rasir' && $scope.password === '123456'){
					history.back();
					localStorage.setItem('isLogin','true');
				} else {
					alert('账号密码错误')
					$scope.account = '';
					$scope.password = '';
				}
				
			}
		}])
		;
});