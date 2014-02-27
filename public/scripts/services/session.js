'use strict';

/**
* lamg-stack Module
*
* Session resource
*/
angular.module('lamg-stack')
  .factory('Session', function($resource) {
    return $resource('/api/session/');
  });