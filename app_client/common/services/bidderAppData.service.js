angular
        .module('bidderApp')
        .service('itemData', itemData);


function itemData($http) {
        var item = function () {
            console.log("sending request");
            $http.get('/api/items')
                .success(function (d) {
                    if (d) {
                        return d;
                        console.log('vm.data');
                    }
                    console.log(d);
                });
        };
    }
