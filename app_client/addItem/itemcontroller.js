
    angular
        .module('bidderApp')
        .controller('addItemCtrl', addItemCtrl);


addItemCtrl.$inject = ['$http'];
    function addItemCtrl($http) {
        var vm = this;
        vm.pageHeader = {
            title: 'Add Item',
            strapline: 'Bid on item'
        };
        vm.sidebar = {
            content: "Add item"
        };

        vm.itemForm = {};
            vm.onSubmit = function () {
            console.log(vm.itemForm);
            $http.post('/api/items', vm.itemForm);
            vm.message = "Item Added";
        };
    }

