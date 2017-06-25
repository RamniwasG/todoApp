var app = angular.module("myapp",[]);
	app.controller("todoController", function($scope){
		
		var vm = this;
		vm.items=[];
		vm.newItem='';
		vm.selectedIndex='';
		$scope.imgGallery=[];
		vm.getItems();

		function getItems() {
			
		}

		vm.items = JSON.parse(localStorage.getItem("listData")) ==null ? [] : JSON.parse(localStorage.getItem("listData"));
		console.log("list data on load :"+vm.items);
		vm.filterTxt = vm.items.length>0 ? 'Filter item' : 'No Item Available';

		vm.ShowBox =function () {
			console.log("ShowBox called");
			$("#addItemBox").show();
			$("#addItem").hide();
			$("#updateItem").hide();
			$("#saveItem").show();
			vm.newItem='';
		}
		
		vm.CancelBox = function(){
			console.log("CancelBox called");
			$("#addItemBox").hide();
			$("#addItem").show();	
		}

		vm.itemClicked=function(index){
			vm.selectedIndex=index;
			console.log("index clicked :"+vm.selectedIndex);
		}
		
		vm.saveItem=function(){
			console.log("saveItem called");
			var item = vm.newItem;
			vm.items.push(item);
			localStorage.setItem("listData",JSON.stringify(vm.items));
			console.log("Item recieved :"+item);
			$("#addItemBox").hide();
			$("#addItem").show();
		}

		vm.editItem =function(index){
			console.log("edit called"+index);
			$("#addItemBox").show();
			$("#updateItem").show();
			$("#saveItem").hide();
			$("#addItem").hide();
			vm.selectedIndex=index;
			vm.newItem=vm.items[index];
		}
		
		vm.deleteItem =function(index){
			console.log("delete called"+index);
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