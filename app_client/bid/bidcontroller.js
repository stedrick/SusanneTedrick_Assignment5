
angular
    .module('bidderApp')
    .controller('bidCtrl', bidCtrl);

bidCtrl.$inject = ['$http'];
function bidCtrl ($http) {
    var vm = this;
    vm.pageHeader = {
        title: 'Bidder App',
        strapline: 'Enter Your Bid'
    };

    vm.data = {};
    vm.postData = function() {
        console.log("sending request");
        $http.post('/api/bids')
            .success(function (d) {
                if (d) {
                    vm.data.bid = d;
                    console.log(vm.data);
                }
                console.log(d);
            })
            .error(function (err) {
                console.log(err);
            });
    };

    vm.postData()};