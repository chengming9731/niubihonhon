define(['uiRouter'],function(){
	angular.module('wrapModule',['ui.router'])
		.config(function($stateProvider,$urlRouterProvider){
			$stateProvider
				.state('wrap',{
					url:'/wrap',
					templateUrl:'component/wrap/wrap.html',
					controller: 'wrapCtrl'
		});
	})
		.controller('wrapCtrl',['$state',function($state){
			$state.go('wrap.category');//默认显示第一个tab
		}])
})		