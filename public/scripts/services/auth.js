'use strict';

/**
* lamg-stack Module
*
* Auth Service Provider
*/
angular.module('lamg-stack')
  .factory('Auth', function($location, $rootScope, Session, User, $cookieStore) {

    $rootScope.currentUser = $cookieStore.get('user') || null;
    $cookieStore.remove('user');

    return {
      /**
       * 
       * @param  {[type]}   user     [description]
       * @param  {Function} callback [description]
       * @return {[type]}            [description]
       */
      login: function(user, callback) {

        var cb = callback || angular.noop;

        return Session.save({
          email: user.email,
          password: user.password
        },
        function(user) {
          $rootScope.currentUser = user;
        },
        function(error) {
          return cb(error);
        });

      },

      /**
       * [logout description]
       * @param  {Function} callback [description]
       * @return {[type]}            [description]
       */
      logout: function(callback) {
        
        var cb = callback || angular.noop;
        return Session.delete(function() {
          $rootScope.currentUser = null;
          return cb();
        },
        function(error) {
          return cb(error);
        }).$promise;
      },

      isLoggedIn: function() {
        var user = $rootScope.currentUser;
        return !!user;
      }
    };

  });