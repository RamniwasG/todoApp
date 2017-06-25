var app = angular.module("myapp",[]);
	app.controller("todoController", function($scope){
		
		var vm = this;
		vm.items=[];
		vm.newItem='';
		vm.selectedIndex='';
		$scope.imgGallery=[];

		vm.items = JSON.parse(localStorage.getItem("listData")) ==null ? [] : JSON.parse(localStorage.getItem("listData"));
		vm.filterTxt = vm.items.length>0 ? 'Filter item' : 'No Item Available';

		vm.ShowBox =function () {
			$("#addItemBox").show();
			$("#addItem").hide();
			$("#updateItem").hide();
			$("#saveItem").show();
			vm.newItem='';
		}
		
		vm.CancelBox = function(){
			$("#addItemBox").hide();
			$("#addItem").show();	
		}

		vm.itemClicked=function(index){
			vm.selectedIndex=index;
		}
		
		vm.saveItem=function(){
			var item = vm.newItem;
			vm.items.push(item);
			localStorage.setItem("listData",JSON.stringify(vm.items));
			$("#addItemBox").hide();
			$("#addItem").show();
		}

		vm.editItem =function(index){
			$("#addItemBox").show();
			$("#updateItem").show();
			$("#saveItem").hide();
			$("#addItem").hide();
			vm.selectedIndex=index;
			vm.newItem=vm.items[index];
		}
		
		vm.deleteItem =function(index){
			vm.items.splice(index,1);
			localStorage.setItem("listData",JSON.stringify(vm.items));
		}
		
		vm.updateItem = function(){
			vm.items[vm.selectedIndex]=vm.newItem;
			localStorage.setItem("listData",JSON.stringify(vm.items));
			$("#addItemBox").hide();
			$("#addItem").show();
		}
		
	});