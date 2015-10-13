'use strict';

/**
 * @ngdoc function
 * @name foliageFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the foliageFrontendApp
 */
angular.module('foliageFrontendApp')
  .controller('MainCtrl', function ($scope, $http, MessageFactory) {
      MessageFactory.list().success(function(data){
          $scope.messages = data;
      }).error(function(data){
          console.log(data);
      });
  });
