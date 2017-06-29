define(['uiRouter'],function(){
	angular.module('shopcarModule',['ui.router'])
		.config(function($stateProvider,$urlRouterProvider){
			$stateProvider
				.state('shopcar',{
					url:'/shopcar',
					templateUrl:'component/shopcar/shopcar.html',
					css:'component/shopcar/shopcar.css',
					controller:''
				});
		})
		
});
