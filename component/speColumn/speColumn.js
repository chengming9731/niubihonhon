define(['uiRouter'],function(){
	angular.module('speColumnModule',[])
		.config(function($stateProvider,$urlRouterProvider){
			$stateProvider
				.state('speColumn',{
					url:'/speColumn',
					templateUrl:'component/speColumn/speColumn.html',
					css:'component/speColumn/speColumn.css',
					controller:'speColumnCtrl'
				})
		})
		.factory('columnData',['$http',function($http){
			var baseUrl = 'http://list.mogujie.com/search?_version=61&ad=2&f=baidusem_z8iw0di5yq';
			var _mguuid='_mgjuuid=98aaf9e0-1d52-435f-baf9-9432b703de2c';
			var ptp = 'ptp=m1._mf1_1239_3682.0.0.ewrKV9';
			var other = 'width=330& height=440&userId=&cKey=16';
			var callBack = 'callback=JSON_CALLBACK';
			var info = {};
			info.getApi = function(link,sort,page,minPrice,maxPrice){
				console.log(link)
				var qurrys= link.split('/');
				var infos = qurrys[qurrys.length-1].split('&');
				var action = 'action='+infos[0].split('?')[0];
				var fcid = infos[0].split('?')[1];
				var title = infos[1];
				var acm = infos[2];	
				var time = '_='+new Date().getTime();
				var sort = sort ? 'sort='+sort : 'sort=pop';
				var page = page ? 'page='+page : 'page =1';
				var api 
				if(minPrice && maxPrice){
					var priceFilter = 'cpc_offset=0&offset=&minPrice='+minPrice+'&maxPrice='+maxPrice;
					var apiInfos = [baseUrl,_mguuid,ptp,other,action,fcid,title,acm,sort,page,priceFilter,time,callBack]
					api = apiInfos.join('&');
				} else {
					var apiInfos = [baseUrl,_mguuid,ptp,other,action,fcid,title,acm,sort,page,time,callBack]
					api = apiInfos.join('&');
				}
				return api;
			}
			return info;
		}])
		.controller('speColumnCtrl',['$scope','$state','$http','columnData',function($scope,$state,$http,columnData){
			var columnInfo = JSON.parse(localStorage.getItem('columnInfo'));
			var api =  columnData.getApi(columnInfo.link);
			console.log(api);
			$http.jsonp(api).then(function(res){
				var result = res.data.result;
				$scope.hotCates = result.hotCates;
				console.log(result);
			});
			
			$scope.headRight = '<i class="iconfont icon-gouwuchekong" style="font-size:0.65rem;color:#cccccc;margin-right:0.6rem;"></i>';
			$scope.goBack = function(){
				history.go('-1');
			}
			$scope.headRightClick = function(){
				$state.go('shopcar');
			}
			$scope.headTitle = columnInfo.title;
			$scope.jump2column = function(info){
				console.log(info);
				localStorage.setItem('columnInfo',info);
				$state.go('speColumn');
			}
		}])
	;
});