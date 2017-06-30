define(['uiRouter','register','findPassWord','loginWithoutPassword'],function(){
	angular.module('loginModule',['ui.router','registerModule','findPassWordModule','lwpModule'])
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
				$state.go('wrap.home');
			};
			$scope.headRightClick = function(){
				$state.go('findPassWord');
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