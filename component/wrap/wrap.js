define(['uiRouter','home'],function(){
	angular.module('wrapModule',['ui.router','homeModule'])
		.config(function($stateProvider,$urlRouterProvider){
			$stateProvider
				.state('wrap',{
					url:'/wrap',
					templateUrl:'component/wrap/wrap.html',
					css:'component/wrap/wrap.css',
					controller: 'wrapCtrl'
		});
	})
		.controller('wrapCtrl',['$state',function($state){
			$state.go('wrap.home');//默认显示第一个tab
		}])
})		