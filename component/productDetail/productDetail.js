define(['uiRouter', 'jquery'], function() {
	angular.module('productDetailModule', ['ui.router'])
		.config(function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('productDetail', {
					url: '/productDetail',
					templateUrl: 'component/productDetail/productDetail.html',
					css: 'component/productDetail/productDetail.css',
					controller: 'pdCtrl'
				})
		})
		.factory('api', function() {
			return {
				getProductApi: function(tradeItemId) {
					return 'http://m.mogujie.com/jsonp/detail.api/v1?iid=' + tradeItemId + '&template=1-2-detail_normal-1.0.0&callback=JSON_CALLBACK&_=' + new Date().getTime();
				},
				getSimilarityApi: function(link) {
					var baseUrl = 'http://list.mogujie.com/search?_version=61&cKey=h5-similarity';
					var staticData = "&channel=H5&_mgjuuid=98aaf9e0-1d52-435f-baf9-9432b703de2c&sort=pop&page=1&userId=&cpc_offset=0&offset=&_=" + new Date().getTime();
					var callback = '&callback=JSON_CALLBACK';
					var other = "&" + link.split('?')[1];
					return baseUrl + staticData + other + callback;
				},
				getShopActivityApi: function(userInfo) {
					var baseUrl = 'http://promotion.mogujie.com/jsonp/getValidShopProList/1?';
					var data = 'sellerId=' + userInfo.sellerId + '&shopId=' + userInfo.shopId;
					var other = '&marketType=market_mogujie&callback=JSON_CALLBACK&_' + new Date().getTime();
					var api = baseUrl + data + other;
					return api;
				}
			}
		})
		.controller('pdCtrl', ['$scope', '$http', 'api', '$state', function($scope, $http, api, $state) {
			initData();
			//			头部信息初始化

			$scope.goBack = function() {
				if($scope.productsList.length != 1) {
					$scope.productsList.shift();
					localStorage.setItem('prodcutsList', JSON.stringify($scope.productsList));
					initData();
				} else {
					history.go(-1);
				}
			}

			function initData() {
				$scope.ishide = true;
				$scope.treasu = JSON.parse(localStorage.getItem('treasu'));
				$scope.productsList = JSON.parse(localStorage.getItem('prodcutsList'))
				console.log($scope.treasu)
				if($scope.treasu){
					$scope.productsList=$scope.treasu;
					$scope.productInfo = $scope.productsList[0];
				}else{
					$scope.productInfo = $scope.productsList[0];
				}
				
				
				
				$scope.similarityProducts = [];
				console.log($scope.productInfo)
				//				产品数据
				$http.jsonp(api.getProductApi($scope.productInfo.tradeItemId))
					.then(function(res) {
						var productInfoList = res.data.data;
						//						一级数据
						$scope.collcationSet = productInfoList.collcationSet;
						$scope.topImages = productInfoList.topImages;
						$scope.detailInfo = productInfoList.detailInfo;
						$scope.itemInfo = productInfoList.itemInfo;
						$scope.itemParams = productInfoList.itemParams;
						$scope.itemServices = productInfoList.itemServices;
						$scope.normalPrice = productInfoList.normalPrice;
						$scope.normalShareInfo = productInfoList.normalShareInfo;
						$scope.rateInfo = productInfoList.rateInfo;
						$scope.shopInfo = productInfoList.shopInfo;
						$scope.skuInfo = productInfoList.skuInfo;
						$scope.userInfo = productInfoList.userInfo;
						//						二级数据
						$scope.topImagesIndex = 1;
						$scope.headTitle = $scope.itemInfo.title;
						$scope.shopLevel = (function() {
							var arr = [];
							for(var i = 0; i < $scope.shopInfo.level; i++) {
								arr.push(i);
							}
							return arr;
						})();

						//				店铺活动信息
						$http.jsonp(api.getShopActivityApi($scope.userInfo))
							.then(function(res) {
								$scope.shopAcitivityInfos = res.data.data.list;
							})

					})

				//					类似产品
				if($scope.productInfo.similarityUrl) {
					$http.jsonp(api.getSimilarityApi($scope.productInfo.similarityUrl))
						.then(function(res) {
							$scope.similarityProducts = res.data.result.wall.docs;
							var num = parseInt($scope.similarityProducts.length / 3);
							$scope.similarityProducts.length = num * 3;
							console.log($scope.similarityProducts)
						})
				} else {
					$scope.similarityProducts.length = 0;
				}

			}
//			更换产品
			$scope.jump2product = function(product) {
				$scope.productsList.unshift(product);
				localStorage.setItem('prodcutsList', JSON.stringify($scope.productsList));
				initData();
				$scope.back2top();
			}
//			回到顶端
			$scope.back2top = function() {
				$('#products-detail').scrollTop(0);
			}
//			添加到购物车
			$scope.add2shopcar = function(productInfo){
				var shopcarProducts = JSON.parse(localStorage.getItem('shopcarProducts'));
				if(!shopcarProducts){
					shopcarProducts = [];
				}
				var hasProduct = isHasProduct(shopcarProducts,productInfo);
				if(hasProduct){
					hasProduct.num ++;
				} else {
					productInfo.num = 1;
					shopcarProducts.unshift(productInfo);
				}
				localStorage.setItem('shopcarProducts',JSON.stringify(shopcarProducts));
			}
//			收藏产品
			$scope.collectProduct = function(productInfo){
				console.log(productInfo)
				var collectionProducts = JSON.parse(localStorage.getItem('collectionProducts'));
				if(!collectionProducts){
					collectionProducts = [];
				}
				var hasProduct = isHasProduct(collectionProducts,productInfo);
				if(!hasProduct){
					collectionProducts.unshift(productInfo);
				}
				localStorage.setItem('collectionProducts',JSON.stringify(collectionProducts));
				console.log(collectionProducts)
			}
//			立即购买
			$scope.order = function(productInfo){
				$scope.add2shopcar(productInfo);
				$state.go('shopcar');
			}
//			滚动事件
			$('#products-detail').on('scroll',function(){
				console.log($('#products-detail').scrollTop()>$('#products-detail').height())
				if($('#products-detail').scrollTop()>$('#products-detail').height()){
					$scope.ishide = false;
					$scope.$apply();
				} else {
					$scope.ishide = true;
					$scope.$apply();
				}
			});
//			快捷导航
			$scope.quickNav =function(){
				
			}
//			判断是否为同一个产品	
			function isHasProduct(arr,obj){
				for(var i = 0; i< arr.length; i++){
					if(arr[i].tradeItemId === obj.tradeItemId){
					return arr[i];
				} else {
					return false;
				}
				}
				
			}
			
		}])

});