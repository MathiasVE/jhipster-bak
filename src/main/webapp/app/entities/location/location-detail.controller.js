(function() {
    'use strict';

    angular
        .module('appApp')
        .controller('LocationDetailController', LocationDetailController);

    LocationDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Location', 'Country'];

    function LocationDetailController($scope, $rootScope, $stateParams, entity, Location, Country) {
        var vm = this;

        vm.location = entity;

        var unsubscribe = $rootScope.$on('appApp:locationUpdate', function(event, result) {
            vm.location = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
