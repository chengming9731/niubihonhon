define(['uiRouter'],function(){
	var mineApp = angular.module('mineModule',['ui.router'])
		.config(function($stateProvider,$urlRouterProvider){
			$stateProvider.state('wrap.mine',{
				url:'/mine',
				templateUrl:'component/wrap/mine/mine.html',
				css:'component/wrap/mine/mine.css',
				controller:''
			});
		});
});
