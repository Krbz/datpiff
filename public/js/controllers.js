'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('mainPage', function ($scope, socket, json_data) {

    socket.on('send:name', function () {
      console.log('json_data', json_data); //.value from services
      $scope.name = json_data.user[0].name; //po zalogowaniu, pobierz name
    });

  })
  .controller('MyCtrl1', function ($scope, socket) {
    // socket.on('send:time', function (data) {
    //   $scope.time = data.time;
    // });
  
  })
  .controller('MyCtrl2', function ($scope) {
  
    // write Ctrl here
  
  })
  .controller("newsController", function (message) {
      $scope.message = message;
  });
