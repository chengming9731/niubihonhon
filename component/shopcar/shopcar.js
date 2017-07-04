define(['uiRouter'],function(){
	angular.module('shopcarModule',['ui.router'])
		.config(function($stateProvider,$urlRouterProvider){
			$stateProvider
				.state('shopcar',{
					url:'/shopcar',
					templateUrl:'component/shopcar/shopcar.html',
					css:'component/shopcar/shopcar.css',
					controller:'shopcarCtrl'
				});
		})
		.controller('shopcarCtrl',['$scope','$state',function($scope,$state){
			$scope.arrgoodslist = JSON.parse(localStorage.getItem('shopcarProducts'));
			//购物车是否有商品
			if($scope.arrgoodslist.length==0){
				$scope.none=true;
			}else{
				$scope.none=false;
			}
			console.log($scope.arrgoodslist);
			//商品初始化
			$scope.choose=[];
			$scope.all=true;
			$scope.allnum=0;
			$scope.allprice=0.00;
			for(var i=0;i<$scope.arrgoodslist.length;i++){
				$scope.choose[i]=true;
			}
			//单个商品选择
			$scope.change=function($index){
				var num=0;
				if($scope.choose[$index]==true){
					$scope.allnum++;
				}else{
					$scope.allnum--;
				}
				$scope.choose[$index]=!$scope.choose[$index];
				for(var i=0;i<$scope.arrgoodslist.length;i++){
					if($scope.choose[i]==false){
						num++;
						$scope.allprice+=$scope.arrgoodslist[i].price;
						if(num==$scope.arrgoodslist.length){
							$scope.all=false;
						}
					}else{
						$scope.all=true;
						$scope.allprice-=$scope.arrgoodslist[i].price;
					}
				}
			}
			//全选
			$scope.chooseAll=function(){
				$scope.all=!$scope.all
				for(var i=0;i<$scope.arrgoodslist.length;i++){
					$scope.choose[i]=!$scope.choose[i];
					if($scope.all==false){
						$scope.allnum=$scope.arrgoodslist.length;
						$scope.allprice+=$scope.arrgoodslist[i].price;
					}else{
						$scope.allnum=0;
						$scope.allprice=0.00;
					}
				}
				
			}
			//合计商品总价
			
			//编辑
			$scope.name='编辑';
			$scope.show=true;
			$scope.edit=function(){
				if($scope.show==true){
					$scope.name='完成';
				}else{
					$scope.name='编辑';
				}
				$scope.show=!$scope.show;
			}
			$scope.goback=function(){
				window.history.go(-1);
			}
			//增减数量
			$scope.goodsub=function(j){
				if($scope.arrgoodslist[j].num>1){
					$scope.arrgoodslist[j].num--;
				}else{
					$scope.arrgoodslist[j].num=1;
				}
				localStorage.setItem('shopcarProducts',JSON.stringify($scope.arrgoodslist));
			}
			$scope.goodadd=function(j){
				$scope.arrgoodslist[j].num++;
				localStorage.setItem('shopcarProducts',JSON.stringify($scope.arrgoodslist));
			}
			//删除商品
			$scope.remove=function(){
				for(var i=0;i<$scope.arrgoodslist.length;i++){
					if($scope.choose[i]==false){
						$scope.arrgoodslist.splice(i,1);
					}
				}
				localStorage.setItem('shopcarProducts',JSON.stringify($scope.arrgoodslist));
			}
			//商品详情跳转
			$scope.toproducts=function(item){
				var productsList = [];
				productsList.push(item);
				localStorage.setItem('prodcutsList', JSON.stringify(productsList));
				$state.go('productDetail');
			}
			
			
			
		}])
		
});
