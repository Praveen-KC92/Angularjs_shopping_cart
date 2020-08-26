var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope){
    $scope.products = [{
        name: "Apple",
        cost: 200,
        Selected: false
    },
    {
        name: "Avacado",
        cost: 150,
        Selected: false
    },
    {
        name: "Orange",
        cost: 100,
        Selected: false
    },
    {
        name: "Mango",
        cost: 80,
        Selected: false
    },
    {
        name: "Banana",
        cost: 30,
        Selected: false
    }];

    $scope.cartTotal = 0;
    $scope.cart = [];

    $scope.addToCart = function(product){
        $scope.remove = false;
        for(i=0; i<$scope.products.length; i++){
            if($scope.products[i].Selected){
                $scope.cartTotal+=$scope.products[i].cost;
                $scope.cart.push($scope.products[i]);
            }
        }
    }

    $scope.removeFromCart = function(item) {
        var itemIndexId = $scope.cart.indexOf(item);
        $scope.cartTotal-= item.cost;
        $scope.cart.splice(itemIndexId, 1);
    };
});