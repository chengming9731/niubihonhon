define(['uiRouter'],function(){
	var siteApp = angular.module('siteModule',['ui.router'])
		.config(function($stateProvider,$urlRouterProvider){
			$stateProvider.state('site',{
				url:'/site',
				templateUrl:'component/wrap/mine/branch/site/site.html',
				css:'component/wrap/mine/branch/site/site.css',
				controller:'siteCtlr'
			});
		})
		.controller('siteCtlr',['$state','$http',function($state,$http){
//			myUrl='http://api.mogujie.com/h5/mwp.member.QQMallHomeIndex/1.0/?mw-appkey=100028&mw-t=1498730507111&mw-ttid=NMMain%40mgj_h5_1.0&mw-sign=98763e0bf969390355320fc6c71af7df&data=%7B%22type%22%3A%22h5%22%7D&callback=mwpCb1&_=1498730507113&callback=JSON_CALLBACK'
//			$http.jsonp(myUrl).success(function(data){
//				console.log(data)
//			})
		}])
});