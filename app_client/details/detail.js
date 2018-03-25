
angular
    .module('bidderApp')
    .controller('detailsCtrl', detailsCtrl);

detailsCtrl.$inject = ['$http'];
function detailsCtrl ($http) {
    var vm = this;
    vm.pageHeader = {
        title: 'Bid Item App',
        strapline: 'Item Detail'
    };
    vm.sidebar = {
        content: "Item Detail"
    };

    vm.data = {};
    vm.getData = function() {
        console.log("sending request");
        $http.get('/api/items')
            .success(function (d) {
                if (d) {
                    vm.data.item = d;
                    console.log(vm.data);
                }
                console.log(d);
            })
            .error(function (err) {
                console.log(err);
            });
    };

    vm.getData()};